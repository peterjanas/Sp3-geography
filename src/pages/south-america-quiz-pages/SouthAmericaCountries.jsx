import React from "react";
import SouthAmericaMap from "../../components/SouthAmericaMap";
import CountryAndCapitalQuiz from "../../components/CountryAndCapitalQuiz";

function SouthAmericaCountries() {
  return (
    <CountryAndCapitalQuiz
      regionApiUrl="https://atlasapi.cphmk.dk/api/countries/region/americas"
      mapComponent={SouthAmericaMap}
      quizType="countries"
      title="South American Countries Quiz"
    />
  );
}

export default SouthAmericaCountries;
