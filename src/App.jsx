import { useState } from "react";
import "./App.css";
import Worldmaptest from "./components/worldmaptest";
import EuropaMapTest from "./components/EuropaMapTest";



function App() {
  const [countryData, setCountryData] = useState(null);

  function clickHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === "path" && clickedElement.id) {
      const countryCode = clickedElement.id.toLowerCase();

      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then((response) => response.json())
        .then((data) => {
          setCountryData(data[0]);
        })
        .catch((error) => {
          console.error("Error fetching country data:", error);
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
        <EuropaMapTest />
      </div>

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
