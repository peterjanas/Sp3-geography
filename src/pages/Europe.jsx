import QuizOverview from "../layouts/QuizOverview";
import WorldIcon from "../assets/Worlds.png";

function Europe() {


  const title = {
    fontFamily: "Arial, sans-serif",
    fontSize: "4rem",
    textShadow: "2px 2px 2px blue",
    margin: "0",
    marginTop: "1rem",
    color: "white",
    border: "2px solid #ddd",
    borderRadius: "8px",
    display: "inline-block", // Shrink border to text size
    padding: "0.2rem 0.5rem", // Optional: Add slight padding for spacing
    backgroundColor: "black",
    boxShadow: "5px 5px 5px black",

};
  const resizeImg = {
    width: "35%",
    height: "35%",
    
  };

  const centerStyle = {
    display: "flex",        // Flexbox layout
    justifyContent: "center", // Center horizontally
    alignItems: "center",   // Center vertically
    //height: "100vh",        // Take full viewport height
    flexDirection: "column" // Stack elements vertically
  };

  return (
    <div style={centerStyle}>
      <h1 style={title}>Europe quizzes</h1>
      <img style={resizeImg} src={WorldIcon} alt="world-icon" />
      <QuizOverview
        continent="Europe"
        capitalPath="/europe-capital-quiz"
        countryPath="/europe-country-quiz"
        flagPath="/europe-flag-quiz"
      />
    </div>
  );
}

export default Europe;
