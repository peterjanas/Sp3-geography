import React, { useState, useEffect } from "react";
import "../../App.css";
import AfricaMap from "../../components/AfricaMap";

function AfricaCapitals() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [quizActive, setQuizActive] = useState(false);
  const [guessedCountries, setGuessedCountries] = useState([]);
  const [guesses, setGuesses] = useState({});

  useEffect(() => {
    fetch("https://atlasapi.cphmk.dk/api/countries/region/africa")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data
          .filter((country) => country.independent === true && country.capital)
          .map((country) => ({
            name: country.name.common,
            capital: country.capital[0], // Use the first capital in the array
            cca2: country.cca2.toLowerCase(),
          }));
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

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
      alert("Congratulations! You have guessed all capitals.");
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
        const currentAttempts = (guesses[currentCountry.cca2] || 0) + 1;

        if (countryCode === currentCountry.cca2) {
          // Correct guess
          setGuessedCountries((prev) => [
            ...prev,
            { cca2: currentCountry.cca2, attempts: currentAttempts },
          ]);
          setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: 0 }));
          alert(
            `Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}.`
          );
          setQuizActive(false);
          setCurrentCountry(null);
        } else {
          if (currentAttempts === 4) {
            // Reveal and move to next country
            alert(
              `The correct answer is ${currentCountry.capital}, the capital of ${currentCountry.name}. Moving to the next country.`
            );
            setGuessedCountries((prev) => [
              ...prev,
              { cca2: currentCountry.cca2, attempts: currentAttempts },
            ]);
            setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: 0 }));
            setQuizActive(false);
            setCurrentCountry(null);
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

  const getCountryColor = (countryCode) => {
    const guessedCountry = guessedCountries.find((g) => g.cca2 === countryCode);
    if (!guessedCountry) return "#c0c0c0"; // Default color

    const { attempts } = guessedCountry;
    if (attempts === 1) return "#4caf50"; // Green
    if (attempts === 2) return "#ffeb3b"; // Yellow
    if (attempts === 3) return "#ffc107"; // Red-yellow
    return "#f44336"; // Red
  };

  return (
    <div className="quiz-container">
      <h1>African Capitals Quiz</h1>

      <div className="quiz-controls">
        <button onClick={drawCountry} disabled={quizActive}>
          {quizActive ? "Guess the Capital" : "Start Quiz"}
        </button>
        {currentCountry && (
          <p>
            Find the country with this capital:{" "}
            <strong>{currentCountry.capital} </strong>
          </p>
        )}
      </div>

      <div className="map-container" onClick={clickHandler}>
        <AfricaMap
          guessedCountries={guessedCountries}
          getCountryColor={getCountryColor}
        />
      </div>
    </div>
  );
}

export default AfricaCapitals;
