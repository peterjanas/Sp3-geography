import React, { useState, useEffect } from "react";
import "../App.css";

function Quiz({ regionApiUrl, mapComponent: MapComponent, quizType, title }) {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [quizActive, setQuizActive] = useState(false);
  const [guessedCountries, setGuessedCountries] = useState([]);
  const [guesses, setGuesses] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch country data based on the API URL and quizType
  useEffect(() => {
    fetch(regionApiUrl)
      .then((response) => response.json())
      .then((data) => {
        const countryList = data
          .filter(
            (country) =>
              country.independent === true && (!quizType || country.capital)
          )
          .map((country) => ({
            name: country.name.common,
            capital: country.capital ? country.capital[0] : null,
            cca2: country.cca2.toLowerCase(),
          }));
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [regionApiUrl, quizType]);

  useEffect(() => {
    if (!quizActive && currentCountry === null && countries.length > 0) {
      setCurrentCountry(null);
    }
  }, [guessedCountries, quizActive, countries]);

  const drawCountry = () => {
    setIsLoading(true);

  
    setTimeout(() => {
      // Filter remaining countries using the most recent guessedCountries
      setGuessedCountries((latestGuessedCountries) => {
        const remainingCountries = countries.filter(
          (country) =>
            !latestGuessedCountries.some((g) => g.cca2 === country.cca2)
        );
  
        if (remainingCountries.length === 0) {
          setMessage("Congratulations! You've guessed all countries!");
          setQuizActive(false);
          setIsLoading(false);
          return latestGuessedCountries;
        }
  
        const randomCountry =
          remainingCountries[Math.floor(Math.random() * remainingCountries.length)];
  
        setCurrentCountry(randomCountry);
        setQuizActive(true);
        setIsLoading(false);
  
        return latestGuessedCountries;
      });
    }, 300);
  };

  const clickHandler = (event) => {
    if (!quizActive || !currentCountry) return;
  
    const clickedElement = event.target;
    const countryCode = clickedElement.id.toLowerCase().replace("-marker", "");
  
    if (clickedElement.tagName === "path" || clickedElement.tagName === "circle") {
      const currentAttempts = (guesses[currentCountry.cca2] || 0) + 1;
  
      if (countryCode === currentCountry.cca2) {
        // Correct guess
        setGuessedCountries((prevGuessedCountries) => [
          ...prevGuessedCountries,
          { cca2: currentCountry.cca2, attempts: currentAttempts },
        ]);
  
        setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: 0 }));
        setMessage(`Correct! ${quizType === "capitals" ? `The capital of ${currentCountry.name} is ${currentCountry.capital}.` : currentCountry.name}`);
        setQuizActive(false);
        setTimeout(() => drawCountry(prevGuessedCountries => [...prevGuessedCountries]), 300);
      } else if (currentAttempts >= 4) {
        // Max attempts reached
        setGuessedCountries((prevGuessedCountries) => [
          ...prevGuessedCountries,
          { cca2: currentCountry.cca2, attempts: currentAttempts },
        ]);
  
        setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: 0 }));
        setMessage(`The correct answer was ${quizType === "capitals" ? currentCountry.capital : currentCountry.name}.`);
        setQuizActive(false);
        setTimeout(() => drawCountry(), 300);
      } else {
        // Incorrect guess
        setGuesses((prev) => ({ ...prev, [currentCountry.cca2]: currentAttempts }));
        setMessage(`Wrong! Try again. Attempt ${currentAttempts}/4.`);
      }
    }
  };
  

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
      <h1>{title}</h1>
      <div className="quiz-controls">
        <button
          onClick={drawCountry}
          disabled={quizActive || isLoading || countries.length === 0}
        >
          {isLoading
            ? "Loading..."
            : quizActive
            ? "Quiz In Progress..."
            : "Start Quiz"}
        </button>

        {message && <p className="quiz-message">{message}</p>}
      </div>

      {currentCountry && (
        <p className="quiz-question">
          {quizType === "capitals"
            ? `Find the country with this capital: ${currentCountry.capital}`
            : `Find this country: ${currentCountry.name}`}
        </p>
      )}
      <div className="map-container" onClick={clickHandler}>
        <MapComponent
          guessedCountries={guessedCountries}
          getCountryColor={getCountryColor}
          onMouseOver={handleHoverEffect}
        />
      </div>
    </div>
  );
}

export default Quiz;
