import NavBar from "./components/navbar/NavBar";
import MainContent from "./components/HomePage/MainContent";
import SideBar from "./components/SideNav/SideBar";
import HomeMain from "./components/HomePage/HomeMain";
import LoginPage from "./components/Loginpage/LoginPage";
import Services from "./components/Servises/Services";
import Contact from "./components/ContactUs/Contact";
import { About } from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import DashboardMain from "./components/Dashboard/DashboardMain";
import Landing from "./components/Dashboard/LandingPage/Landing";
import Blog from "./components/Blog/Blog";
import BlogView from "./components/Blog/BlogView";
function App() {
  return (
    <div className="bg-bg">
      <NavBar />
      <div className="sm:pt-[11.3rem] pt-[6.7rem]   mx-4 ">
        <SideBar />
        <div className="ml-[7.2rem]  rounded-r-[10px] overflow-">
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/dashboard" element={<DashboardMain />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogView />} />
            <Route path="/support" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
