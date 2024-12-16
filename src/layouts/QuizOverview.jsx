import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function QuizOverview(props) {
  const cardStyle = {
    display: "inline-block",
    marginRight: "1rem",
    padding: "2rem",
    textDecoration: "none",
    color: "#333",
    backgroundColor: "#f9f9f9",
    border: "2px solid #ddd",
    borderRadius: "8px",
    maxWidth: "100px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const hoverStyle = {
    backgroundColor: "#e6f7ff",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
    marginBottom: "10px",
  };

  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Quiz Overview</h1>

      <NavLink
        to={props.capitalPath}
        style={{
          ...cardStyle,
          ...(hovered === "capital" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("capital")}
        onMouseLeave={() => setHovered(null)}
      >
        <img src="capitalicon.jpg" alt="capital icon" style={imageStyle} />
        {props.continent} Capital Quiz
      </NavLink>

      <NavLink
        to={props.countryPath}
        style={{
          ...cardStyle,
          ...(hovered === "country" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("country")}
        onMouseLeave={() => setHovered(null)}
      >
        <img src="tempimg.png" alt="country icon" style={imageStyle} />
        {props.continent} Country Quiz
      </NavLink>

      <NavLink
        to={props.flagPath}
        style={{
          ...cardStyle,
          ...(hovered === "flag" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("flag")}
        onMouseLeave={() => setHovered(null)}
      >
        <img src="flagicon.png" alt="flag icon" style={imageStyle} />
        {props.continent} Flag Quiz
      </NavLink>
    </div>
  );
}

export default QuizOverview;
