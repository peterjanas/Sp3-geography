import QuizOverview from "../layouts/QuizOverview";

function SouthAmerica() {
  return (
    <div>
      <h1>South America</h1>
      <QuizOverview
      continent="South America"
      capitalPath="/south-america-capital-quiz"
      countryPath="/south-america-country-quiz"
      flagPath="/south-america-flag-quiz" />
    </div>
  );
}

export default SouthAmerica;
