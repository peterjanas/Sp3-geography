import QuizOverview from "../layouts/QuizOverview";

function World() {
  return (
    <div>
      <h1>World</h1>
      <QuizOverview 
      continent="World"
      capitalPath="/world-capital-quiz" 
      countryPath="/world-country-quiz"
      flagPath="/world-flag-quiz"
       />
    </div>
  );
}

export default World;
