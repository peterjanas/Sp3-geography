import React, { useState, useEffect } from "react";
import "../../App.css";
import NorthAmericaMap from "../../components/NorthAmericaMapLow";

function NorhtAmericaCountries() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [quizActive, setQuizActive] = useState(false);
  const [guessedCountries, setGuessedCountries] = useState([]);
  const [guesses, setGuesses] = useState({});

  useEffect(() => {
    fetch("https://atlasapi.cphmk.dk/api/countries/region/americas")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data
          .filter(
            (country) =>
              country.independent === true || country.independent === null
          )
          .map((country) => ({
            name: country.name.common,
            cca2: country.cca2.toLowerCase(),
          }));
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // To prevent it drawing the same country twice as useState is async
  useEffect(() => {
    if (!quizActive && currentCountry === null) {
      drawCountry();
    }
  }, [guessedCountries, quizActive, currentCountry]);

  const drawCountry = () => {
    if (countries.length === 0) return;
    const remainingCountries = countries.filter(
      (country) => !guessedCountries.some((g) => g.cca2 === country.cca2)
    );
    if (remainingCountries.length === 0) {
      alert("Congratulations! You have guessed all countries.");
      setQuizActive(false);
      setCurrentCountry(null);
      return;
    }
    const randomCountry =
      remainingCountries[Math.floor(Math.random() * remainingCountries.length)];
    setCurrentCountry(randomCountry);
    setQuizActive(true);
  };

  const clickHandler = (event) => {
    const clickedElement = event.target;

    if (quizActive) {
      const countryCode = clickedElement.id
        .toLowerCase()
        .replace("-marker", "");

      if (
        clickedElement.tagName === "path" ||
        clickedElement.tagName === "circle"
      ) {
        const currentAttempts = (guesses[currentCountry.cca2] || 0) + 1; // current attempts

        if (countryCode === currentCountry.cca2) {
          // if correct guess
          setGuessedCountries((prev) => [
            ...prev,
            { cca2: currentCountry.cca2, attempts: currentAttempts },
          ]);
          setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: 0 })); // Reset attempts for this country
          alert(
            `Correct! You got ${currentCountry.name} in ${currentAttempts} attempt(s).`
          );
          setQuizActive(false); // Mark quiz as inactive
          setCurrentCountry(null); // Clear current country to trigger new draw via useEffect
        } else {
          if (currentAttempts === 4) {
            alert(
              `The correct answer is ${currentCountry.name}. Moving to the next country.`
            );
            setGuessedCountries((prev) => [
              ...prev,
              { cca2: currentCountry.cca2, attempts: currentAttempts },
            ]); // to many wrong guesses so reavaling the country
            setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: 0 })); // Reset guesses
            setQuizActive(false); // Mark quiz as inactive
            setCurrentCountry(null); // Clear current country to trigger new draw via useEffect
          } else {
            // Increment attempts
            setGuesses((prev) => ({
              ...prev,
              [currentCountry.cca2]: currentAttempts,
            }));
            alert(`Wrong! Try again. Attempt ${currentAttempts}/4.`);
          }
        }
      }
    }
  };

  // color based on the number of tries
  const getCountryColor = (countryCode) => {
    const guessedCountry = guessedCountries.find((g) => g.cca2 === countryCode);
    if (!guessedCountry) return "country-default"; 
  
    const { attempts } = guessedCountry;
    if (attempts === 1) return "country-green";
    if (attempts === 2) return "country-yellow";
    if (attempts === 3) return "country-redyellow";
    return "country-red";
  };

  const handleHoverEffect = (event) => {
    const element = event.target;

    if (
      element.classList.contains("land") ||
      element.classList.contains("marker")
    ) {
      const countryCode = element.id.replace("-marker", "").toLowerCase();

      // Check if the country is guessed
      const isGuessed = guessedCountries.some((g) => g.cca2 === countryCode);

      // Dynamically toggle hover effects
      if (isGuessed) {
        element.classList.remove("hoverable");
      } else {
        element.classList.add("hoverable");
      }
    }
  };

  return (
    <div className="quiz-container">
      <h1>North America Quiz</h1>

      <div className="quiz-controls">
        <button onClick={drawCountry} disabled={quizActive}>
          {quizActive ? "Guess the Country" : "Start Quiz"}
        </button>
        {currentCountry && (
          <p>
            Find the country: <strong>{currentCountry.name}</strong>
          </p>
        )}
      </div>

      <div
        className="map-container"
        onMouseOver={handleHoverEffect}
        onClick={clickHandler}
      >
        <NorthAmericaMap
          guessedCountries={guessedCountries}
          getCountryColor={getCountryColor}
        />
      </div>
    </div>
  );
}

export default NorhtAmericaCountries;
