import React from "react";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { IoIosContact } from "@react-icons/all-files/io/IoIosContact";
import logo from "../navbar/assets/logo.svg";
import { FiPhone } from "react-icons/fi";
function NavBar() {
  return (
    <div className="z-10 absolute">
      <div className=" fixed bg-bg  lg:w-full px-4 lg:pt-5">
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
          <div className="flex sm:items-center   text-white">
            <div className="flex sm:items-center relative  text-white">
              <input
                type="text"
                placeholder="  Search"
                className="bg-prime  w-16 md:w-[261px] sm:border-2 h-[42px]   rounded-lg border-cyan-50 mr-3"
              />
              <FiSearch className="sm:h-[15px]  sm:absolute text-white  right-6 cursor-pointer" />
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
