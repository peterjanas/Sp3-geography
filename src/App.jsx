import "./App.css";
import SvgmapWorld from "./components/worldmap2";
import SvgmapWorld2 from "./components/worldmap3";
import { useState } from "react";

function App() {
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function clickHandler(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "path" && clickedElement.className.baseVal) {
    const countryName = clickedElement.className

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Country not found");
        }
        return response.json();
      })
      .then((data) => {
        setCountryData(data[0]);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setErrorMessage("Could not fetch data for this country.");
      });

    const previouslyClicked = document.querySelector('path[fill="red"]');
    if (previouslyClicked && previouslyClicked !== clickedElement) {
      previouslyClicked.setAttribute(
        "fill",
        previouslyClicked.getAttribute("data-original-color")
      );
    }

    if (!clickedElement.hasAttribute("data-original-color")) {
      clickedElement.setAttribute(
        "data-original-color",
        clickedElement.getAttribute("fill")
      );
    }

    clickedElement.setAttribute("fill", "red");
  }
}

  return (
    <div>
      <h1>Country Info</h1>
      <div onClick={clickHandler}>
        <SvgmapWorld />
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}

      {countryData && (
        <div className="country-info">
          <h2>{countryData.name.common}</h2>
          <p>
            <strong>Capital:</strong>{" "}
            {countryData.capital ? countryData.capital[0] : "N/A"}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {countryData.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {countryData.region}
          </p>
          <p>
            <strong>Flag:</strong>{" "}
            <img
              src={countryData.flags[0]}
              alt="flag"
              style={{ width: "100px" }}
            />
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
