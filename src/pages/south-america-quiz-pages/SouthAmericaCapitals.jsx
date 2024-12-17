import React from "react";
import SouthAmericaMap from "../../components/SouthAmericaMap";
import CountryAndCapitalQuiz from "../../components/CountryAndCapitalQuiz";

function SouthAmericaCapitals() {
  return (
    <CountryAndCapitalQuiz
      regionApiUrl="https://atlasapi.cphmk.dk/api/countries/region/americas"
      mapComponent={SouthAmericaMap}
      quizType="capitals"
      title="South American Capitals Quiz"
    />
  );
}

export default SouthAmericaCapitals;
