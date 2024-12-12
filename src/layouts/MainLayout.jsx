import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/world">World</NavLink>
        </li>
        <li>
          <NavLink to="/europe">Europe</NavLink>
        </li>
        <li>
          <NavLink to="/asia">Asia</NavLink>
        </li>
        <li>
          <NavLink to="/africa">Africa</NavLink>
        </li>

        <li>
          <NavLink to="/north-america">North America</NavLink>
        </li>

        <li>
          <NavLink to="/south-america">South America</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MainLayout;
