import React from "react";
import go from "../Servises/assets//go.svg";
export default function TypesOfServices({ service, index }) {
  return (
    <div className="bg-prime">
      <div className="lg:flex  overflow-hidden h-96 max-w-96">
        {/* {(index + 2) % 3 == 0 ? (
          <div className="border" />
        ) : (
          <div />
        )} */}
        <div className=" mx-auto my-auto  relative">
         
          <div className="border mx-auto rounded-xl text-center w-[300px] h-[300px]">
            <img src={go} className="float-right p-2 text-pila "/>
            <div className="mx-auto rounded-lg bg-white mt-7 w-[154px] h-[130px] border"></div>
            <h1 className="text-white text-[24px] font-Montserrat font-bold py-2">{service}</h1>
            <h1 className="text-white font-lato text-[16px] font-regular  ">Every 5000kms/3 months</h1>
            <p className="text-white font-light">(Recomended)</p>
          </div>
          <div className="absolute w-full flex justify-center  -bottom-4">
            <button className="text-black font-lato font-bold text-[20px] bg-pila border px-8  rounded-lg  h-8">
              book Now
            </button>
          </div>
        </div>
        {/* {(index + 2) % 3 == 0 ? (
          <div className="border h-52 mt-28 hidden xl:visible" />
        ) : (
          <div />
        )} */}
      </div>
    </div>
  );
}
