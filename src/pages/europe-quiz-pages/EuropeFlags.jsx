import "./App.css";
import React, { useState, useEffect } from "react";

const AtlasUrl = "https://atlasapi.cphmk.dk/api/countries/region/europe";

function EuropeFlags() {
  const [countries, setCountries] = useState([]);
  const [remainingCountries, setRemainingCountries] = useState([]);
  const [completedCountries, setCompletedCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(null);
  const [correctGuesses, setCorrectGuesses] = useState([]); // Liste over korrekte svar
  const [wrongGuesses, setWrongGuesses] = useState([]); // Liste over forkerte svar
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    fetch(AtlasUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Atlas data");
        }
        return res.json();
      })
      .then((data) => {
        const independentCountries = data.filter((country) => country.independent === true);
        setCountries(independentCountries);
        setRemainingCountries(independentCountries);
        if (independentCountries.length > 0) {
          selectRandomCountry(independentCountries);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Vælg et tilfældigt land
  const selectRandomCountry = (remainingCountries) => {
    if (remainingCountries.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCountries.length);
      setRandomCountry(remainingCountries[randomIndex]);
      setAttempts(0); // Nulstil forsøg for det nye flag
    } else {
      setRandomCountry(null); // Ingen lande tilbage
    }
  };

  // Håndter klik på flag
  const handleFlagClick = (countryName) => {
    if (countryName === randomCountry.name.common) {
      alert("Korrekt!");
      setCorrectGuesses((prev) => [...prev, randomCountry]); // Tilføj til korrekt liste
      setCompletedCountries((prev) => [...prev, randomCountry]);
      setRemainingCountries((prev) => prev.filter((country) => country.name.common !== countryName));
      selectRandomCountry(
        remainingCountries.filter((country) => country.name.common !== countryName)
      );
    } else {
      setAttempts((prev) => prev + 1);
      if (attempts + 1 >= 3) {
        alert(`Forkert! Det korrekte svar er: ${randomCountry.name.common}`);
        setWrongGuesses((prev) => [...prev, randomCountry]); // Tilføj til forkert liste
        setCompletedCountries((prev) => [...prev, randomCountry]);
        setRemainingCountries((prev) => prev.filter((country) => country.name.common !== randomCountry.name.common));
        selectRandomCountry(
          remainingCountries.filter((country) => country.name.common !== randomCountry.name.common)
        );
      } else {
        alert("Forkert! Prøv igen.");
      }
    }
  };

  return (
    <div>
      <h1>Flag Guessing Game</h1>
      <h2>
        Tryk på flaget for landet:{" "}
        {randomCountry ? randomCountry.name.common : "Spillet er slut!"}
      </h2>
      <p>
        Resterende flag: {remainingCountries.length}/{countries.length}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {remainingCountries.map((country, index) => (
          <img
            key={index}
            src={country.flags.png || country.flagUrl}
            alt={`Flag of ${country.name.common}`}
            style={{
              width: "100px",
              cursor: "pointer",
            }}
            onClick={() => handleFlagClick(country.name.common)}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <h3>Korrekte svar:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {correctGuesses.map((country, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(0, 255, 0, 0.2)", // Gennemsigtig grøn baggrund
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <img
                  src={country.flags.png || country.flagUrl}
                  alt={`Flag of ${country.name.common}`}
                  style={{ width: "100px" }}
                />
                <p>{country.name.common}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3>Forkerte svar:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {wrongGuesses.map((country, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.2)", // Gennemsigtig rød baggrund
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <img
                  src={country.flags.png || country.flagUrl}
                  alt={`Flag of ${country.name.common}`}
                  style={{ width: "100px" }}
                />
                <p>{country.name.common}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {randomCountry === null && <h3>Spillet er slut! Du har gættet alle flagene!</h3>}
    </div>
  );
}

export default EuropeFlags;
