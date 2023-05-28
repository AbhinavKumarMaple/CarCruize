import React from "react";
import { IoIosContact } from "@react-icons/all-files/io/IoIosContact";
import logo from "../navbar/assets/logo.svg";
import { FiPhone } from "react-icons/fi";
import SearchBar from "./SearchBar";
function NavBar() {
  return (
    <div className="z-10 absolute ">
      <div className=" fixed bg-bg  lg:w-full px-4 lg:pt-5 ">
        <nav className="rounded-[10px] h-full flex justify-between  bg-prime sm:px-3 items-center">
          <div className="flex h-[99px] justify-center items-center">
            <img src={logo} className="md:w-[63px]" />
            <h1 className="sm:ml-3  text-white font-bold text-center md:text-[50px] h-auto">
              CARCRUIZE
            </h1>
          </div>
          <div className="text-teal-50 flex  font-bold">
            <FiPhone className=" sm:mr-1 md:mt-1 md:text-[35px] cursor-pointer" />

            <h3 className="sm:pr-1 md:text-[27px]">+(91) </h3>
            <h3 className="md:text-[27px] text-yellow-300    cursor-pointer">
              {" "}
              970 970 4044
            </h3>
          </div>
          <div>

          <div className="absolute right-7 top-12">

          <SearchBar className="" />
          </div>
          </div>
        </nav>
        <div className=" my-2 rounded-[10px] font-bold sm:text-[20px] bg-prime text-white flex justify-center p-1 lg:h-[45px]  ">
          <h3 className="sm:justify-center  sm:flex">
            SAVE UPTO 40% ON PERIODIC CAR SERVICES*
          </h3>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
