import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Sørger for at fylde hele vinduet */
`;

const StyledHeader = styled.header`
  background-color: rgba(31, 120, 37, 0.68);
  color: #ffffff;
  padding: 0.5rem 1rem; /* Reducér header-størrelse */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex; /* Gør links horisontale */
    list-style: none; /* Fjern punkttegn */
  }

  li {
    margin: 0 0.8rem; /* Giv mellemrum mellem links */
  }

  a {
    text-decoration: none; /* Fjern understregning */
    color: white;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline; /* Understreg ved hover */
    }
  }
`;

const StyledFooter = styled.footer`
  background-color: rgba(31, 120, 37, 0.68);
  color: #ffffff;
  text-align: center;
  margin-top: auto;
  
`;

function MainLayout() {
  return (
    <Container>
      <StyledHeader>
        <h1>Logo her</h1> {/* Mindre font-size */}
        <Nav>
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
        </Nav>
      </StyledHeader>
      <Outlet />

      <StyledFooter>
        <p>&copy; 2024 - Atlas Quiz</p>
      </StyledFooter>
    </Container>
  );
}

export default MainLayout;
