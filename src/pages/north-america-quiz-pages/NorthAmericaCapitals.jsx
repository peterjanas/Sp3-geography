import React from "react";
import NorthAmericaMap from "../../components/NorthAmericaMap";
import CountryAndCapitalQuiz from "../../components/CountryAndCapitalQuiz";

function NorthAmericaCapitals() {
  return (
    <CountryAndCapitalQuiz
      regionApiUrl="https://atlasapi.cphmk.dk/api/countries/region/americas"
      mapComponent={NorthAmericaMap}
      quizType="capitals"
      title="North American Capitals Quiz"
    />
  );
}

export default NorthAmericaCapitals;
