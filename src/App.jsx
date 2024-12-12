import React, { useState, useEffect } from "react";
import "./App.css";
import EuropaMapTest from "./components/EuropaMapTest";

function App() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [quizActive, setQuizActive] = useState(false);
  const [guessedCountries, setGuessedCountries] = useState([]);

  useEffect(() => {
    // Fetch all European country data when the app loads
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data.map((country) => ({
          name: country.name.common,
          cca2: country.cca2.toLowerCase(),
        }));
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // Function to draw a random country
  const drawCountry = () => {
    if (countries.length === 0) return;
    const remainingCountries = countries.filter(
      (country) => !guessedCountries.includes(country.cca2)
    );
    if (remainingCountries.length === 0) {
      alert("Congratulations! You have guessed all countries.");
      setQuizActive(false);
      setCurrentCountry(null);
      return;
    }
    const randomCountry =
      remainingCountries[
        Math.floor(Math.random() * remainingCountries.length)
      ];
    setCurrentCountry(randomCountry);
    setQuizActive(true);
  };

  // Handle map click
  const clickHandler = (event) => {
    const clickedElement = event.target;

    if (quizActive && clickedElement.tagName === "path" && clickedElement.id) {
      const countryCode = clickedElement.id.toLowerCase();

      if (countryCode === currentCountry.cca2) {
        alert(`Correct! You clicked on ${currentCountry.name}.`);
        setGuessedCountries((prev) => [...prev, currentCountry.cca2]);
        setQuizActive(false);
        setCurrentCountry(null);
        drawCountry(); // Automatically draw the next country
      } else {
        alert(`Wrong! Try again.`);
      }
    }
  };

  return (
    <div>
      <h1>Geography Quiz</h1>
      <div style={{ position: "relative", zIndex: 10 }}>
        <button onClick={drawCountry} disabled={quizActive}>
          {quizActive ? "Guess the Country" : "Start Quiz"}
        </button>
        {currentCountry && <p>Find the country: {currentCountry.name}</p>}
      </div>
      <div style={{ position: "relative", zIndex: 1 }} onClick={clickHandler}>
        <EuropaMapTest />
      </div>
    </div>
  );
}

export default App;
