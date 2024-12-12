import QuizOverview from "../layouts/QuizOverview";

function NorthAmerica() {
  return (
    <div>
      <h1>North America</h1>
      <QuizOverview
      continent="North America"
      capitalPath="/north-america-capital-quiz"
      countryPath="/north-america-country-quiz"
      flagPath="/north-america-flag-quiz" />
      
    </div>
  );
}

export default NorthAmerica;
