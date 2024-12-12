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
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
