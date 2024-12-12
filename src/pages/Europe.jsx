import QuizOverview from "../layouts/QuizOverview";

function Europe() {
  return (
    <div>
      <h1>Europe</h1>
      <QuizOverview
      continent="Europe"
      capitalPath="/europe-capital-quiz"
      countryPath="/europe-country-quiz"
      flagPath="/europe-flag-quiz" />
    </div>
  );
}

export default Europe;
