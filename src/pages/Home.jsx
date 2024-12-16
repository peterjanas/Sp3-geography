import { NavLink, Outlet } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  return (
    <>
  
     
          <NavLink to="/world"><Card title="World" description="Test your knowledge across all continents and become a global expert!"/></NavLink>
       
          <NavLink to="/europe"><Card title="Europe" description="Explore the rich history and vibrant cultures of Europe, from ancient times!"/></NavLink>
       
          <NavLink to="/asia"><Card title="Asia" description="Discover the wonders of Asia, from ancient traditions to modern marvels!"/></NavLink>
       
          <NavLink to="/africa"><Card title="Africa" description="Dive into Africa’s stunning landscapes and rich heritage with stunning view!"/></NavLink>
       
          <NavLink to="/north-america"><Card title="North America" description="How well do you know the contrasts and cultures of North America?"/></NavLink>
      
          <NavLink to="/south-america"><Card title="South America" description="Challenge yourself with South America’s beauty and vibrant history!"/></NavLink>
       
    </>
  );
}

export default Home;
