import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/SideNav/SideBar";
import HomeMain from "./components/HomePage/HomeMain";
import Services from "./components/Servises/Services";
import Contact from "./components/ContactUs/Contact";
import { About } from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Dash from "./components/Dashboard/Dash";
import Blog from "./components/Blog/Blog";
import BlogView from "./components/Blog/BlogView";
import ServiceHistory from "./components/Dashboard/ServiceHistory/ServiceHistory";
import ServiceDescription from "./components/Servises/Pages/ServiceDescription";
function App() {
  return (
    <div className="bg-bg">
      <NavBar />
      <div className="sm:pt-[11.3rem] pt-[6.7rem]   mx-4 ">
        <SideBar />
        <div className="ml-[7.2rem]  rounded-r-[10px] overflow-">
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/dashboard" element={<Dash/>} />

            <Route path="/dashboard/service" element={<ServiceHistory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogView />} />
            <Route path="/support" element={<Contact />} />
            <Route path="/about" element={<About />} />
              <Route path="*" element={<About />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
