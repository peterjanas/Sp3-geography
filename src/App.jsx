import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import World from "./pages/World";
import Europe from "./pages/Europe";
import Asia from "./pages/Asia";
import Africa from "./pages/Africa";
import NorthAmerica from "./pages/NorthAmerica";
import SouthAmerica from "./pages/SouthAmerica";
import WorldCapitals from "./pages/world-quiz-pages/WorldCapitals";
import WorldCountries from "./pages/world-quiz-pages/WorldCountries";
import WorldFlags from "./pages/world-quiz-pages/WorldFlags";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/north-america" element={<NorthAmerica />} />
        <Route path="/south-america" element={<SouthAmerica />} />
        <Route path="/world-capital-quiz" element={<WorldCapitals />} />
        <Route path="/world-countries-quiz" element={<WorldCountries />} />
        <Route path="/world-flag-quiz" element={<WorldFlags />} />



      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
