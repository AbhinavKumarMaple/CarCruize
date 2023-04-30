import React from 'react'
import MAN from "../HomePage/assets/MAN.png";
const CarProblem = () => {
  return (
    <div className='lg:flex'>
        <div className=" bg-TextWhite bg-opacity-60 max-h-[545px]  max-w-[413px] rounded-[10px]">
        <div className='max-w-s'>
          <div className="p-7 space-y-3 text-white">
            <span className="text-[30px] font-bold font-Montserrat">Tell us about your car  problem, we'll </span><span className="text-[30px] font-Montserrat font-bold">FIX IT!</span>
            <div className="flex">
              <h1 className="text-3xl font-bold"> </h1>
              
            </div>
            <div className="py-2 text-white font-semibold font-Montserrat text-[18px]">
              <h1>Get instant help On-the-Go....</h1>
              <div className="my-4 h-[1px] bg-black w-full"/>
            </div>
            <div className='space-y-3 text-white'>
              <lebal className="text-[30px] font-bold font-Montserrat">Name your car</lebal>
              <input
                type="text"
                placeholder="Eg:Baleno"
                className="py-2 rounded-lg border-2 placeholder-black place border-bg w-full text-[16px] font-semibold font-lato pl-3"
              ></input>
            </div >
            <div className='space-y-3 text-white'>
              <lebal className="text-[30px] font-bold font-Montserrat">Your mobile number</lebal>
              <input
                type="text"
                placeholder="Enter your mobile number here"
                className="py-2 rounded-lg border-2 placeholder-black place border-bg w-full text-[16px] font-semibold font-lato pl-3"
              ></input>
            </div>
            <div className="py-5">
              <button className="bg-pila px-5  py-1 font-bold rounded-lg text-[18px] font-lato">
                Check services
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CarProblem