import { NavLink, Outlet } from "react-router-dom";

function QuizOverview() {
  return (
    <div>
      <h1>Quiz Overview</h1>
      <p>
        <NavLink to="/world-capital-quiz">World capital quiz</NavLink>
      </p>
      <p>
        <NavLink to="/world-countries-quiz">World countries quiz</NavLink>
      </p>
      <p>
        <NavLink to="/world-flag-quiz">World flag quiz</NavLink>
      </p>
      <Outlet />
    </div>
  );
}

export default QuizOverview;
