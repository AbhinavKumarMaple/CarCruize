import React from "react";
import { FiBold } from "react-icons/fi";
import CarProblem from "./CarProblem";
import BottomContant from "./BottomContant";



function MainContent() {
  return (
    <div className=" pt-12 ">
      <div className="lg:flex px-20 justify-between ">
        <div className=" text-white ">
          <div className="text-[70px]  max-w-[750px] font-Montserrat font-extrabold pr-10">
            <h1> Bring Your Car to Life With Our Expert Team!</h1>
          </div>
          <div className="md:max-w-[611px]">
            <p className="py-10 font-lato text-[20px] font-bold ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              accusamus deserunt laudantium repellat numquam quibusdam rerum
              minima rem accusantium cumque deleniti fugiat tenetur nesciunt,
              voluptate, reiciendis impedit, sint adipisci? Impedit.
            </p>
          
          </div>
          <button className="bg-pila max-w-[195px] max-h-[55px] md:h-full rounded-[8px] text-black w-full font-bold font-lato text-[30px]">
            Book Now
          </button>
        </div>
        <div>
          <CarProblem />
        </div>
      </div>
      <BottomContant />
    </div>
  );
}

export default MainContent;