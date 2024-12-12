import QuizOverview from "../layouts/QuizOverview";

function Asia() {
  return (
    <div>
      <h1>Asia</h1>
      <QuizOverview
      continent="Asia"
      capitalPath="/asia-capital-quiz"
      countryPath="/asia-country-quiz"
      flagPath="/asia-flag-quiz" />
    </div>
  );
}

export default Asia;
