import { NavLink, Outlet } from "react-router-dom";

function QuizOverview(props) {
  return (
    <div>
      <h1>Quiz Overview</h1>
      <p>
        <NavLink to={props.capitalPath}>{props.continent} capital quiz</NavLink>
      </p>
      <p>
        <NavLink to={props.countryPath}>{props.continent} country quiz</NavLink>
      </p>
      <p>
        <NavLink to={props.flagPath}>{props.continent} flag quiz</NavLink>
      </p>
    </div>
  );
}

export default QuizOverview;
