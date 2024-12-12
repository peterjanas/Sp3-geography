import QuizOverview from "../layouts/QuizOverview";

function Africa() {
  return (
    <div>
      <h1>Africa</h1>
      <QuizOverview
      continent="Africa"
      capitalPath="/africa-capital-quiz"
      countryPath="/africa-country-quiz"
      flagPath="/africa-flag-quiz" />

    </div>
  );
}

export default Africa;
