import React from "react";
import "../SideNav/styles.css";
import home from "../SideNav/assets/home.svg";
import dash from "../SideNav/assets/dash.svg";
import service from "../SideNav/assets/service.svg";
import blog from "../SideNav/assets/blog.svg";
import support from "../SideNav/assets/support.svg";
import about from "../SideNav/assets/about.svg";
import OpenApp from "../SideNav/assets/OpenApp.svg";
import { NavLink, useLocation, useParams } from "react-router-dom";
import '../../index.css'


const buttons = [
  { path: "/", icon: home, name: "home" },
  { path: "/dashboard", icon: dash, name: "Dashboard" },
  { path: "/services", icon: service, name: "Services" },
  { path: "/blog", icon: blog, name: "Blog" },
  { path: "/support", icon: support, name: "Support" },
  { path: "/about", icon: about, name: "AboutUs" },
  { path: "/OpenApp", icon: OpenApp, name: "OpenApp" },
];

function SideBar() {
  const location = useLocation();

  return (
    <div className="bg-prime md:w-[116px] h-[875px] rounded-l-[10px] fixed mt-[rem]">
      <div className="flex flex-col text-center rounded-tl-[10px] rounded-bl-[10px] text-white overflow-hidden">
        {buttons.map(({ path, icon, name }) => (
          <NavLink to={path} key={path}>
            <div
              className={`flex flex-col py-[22px]  txt1 gap-[7px] ${
                path === location.pathname
                  ? "border-l-4 border-pila bg-gradient-to-r text-pila  from-[#615f36]"
                  : ""
              }`}
            >
              <img
              
                src={icon}
                alt="icon"
                className={`inline-block w-[34px] md:m-auto navicon `}
                style={{ color: "yellow" }}
              />
              <h1 className="font-lato font-bold text-[16px]">{name}</h1>
              
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
