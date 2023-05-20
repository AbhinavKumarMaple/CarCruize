import React from "react";
import innova from "../assets/asset/innova.png";
import yelloprofile from "../assets/asset/yelloprofile.png";
import fillPhone from "../assets/asset/fillPhone.png";
import Booking from "./booking/Booking";
import Cart from "./Cart/Cart";
import Wallet from "./Wallet/Wallet";
const DashboardMain = () => {
  const carData = [
    {
      name: "Akshat Varma",
      phone: "+(91) 970 970 4044",
      Carname: "Toyota Innova Crysta",
      Model: "2.4 GX 8Star",
      FuelType: "Petrol",
      PUC_date: "24/aug/2023",
      InsuranceTill: "06/Sept/2024",
      Last_Service: "10/12/2022",
      LastServiceDays: "73",
    },
  ];


  return (
    <div className="flex flex-row gap-4 bg-second p-3">

    
      <div className="w-[377px] h-[876px]  ">
        <div className="">
            <div className="border overflow-hidden rounded-[10px]">
        <div className="  h-[249px] ">
        <div className="flex justify-center  ">
          <div>
            <div className="rounded-[10px] ">
              <img src={yelloprofile} className="mx-auto"/>
            </div>
            <div className="text-center">
              <h1 className="font-Montserrat font-bold text-[24px] text-white">
                {carData[0].name}
              </h1>
              <div className="text-[18px] flex space-x-2">
                <span className="flex items-center justify-center">
                  <img src={fillPhone} />
                </span>
                <span className="font-Montserrat font-semibold text-[18px] text-white">{carData[0].phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[377px] h-[612px] bg-[#1D1D1D]">
        <div className="flex justify-center">
          <img src={innova} className="max-w-[238px]" />
        </div>

        <div className="flex justify-center">
          <div className=" ">
            <div className="">
              <div className="justify-center flex items-center">
                <div className="pt-4">
                  <h1 className="font-lato text-[32px] font-regular pb-8 text-[#ffffff]">
                    {carData[0].Carname}
                  </h1>
                  <div className="flex font-lato font-semibold text-[16px]">
                    <div className="space-y-3">
                      <h1 className=" text-[#ffffff]">Model :</h1>
                      <h1 className=" text-[#ffffff]">Fuel Type :</h1>
                      <h1 className=" text-[#ffffff]">PUC Expire on :</h1>
                      <h1 className=" text-[#ffffff]">Insurance Till :</h1>
                      <h1 className=" text-[#ffffff]">Last Service :</h1>
                    </div>
                    <div className="space-y-3 pl-[20px]">
                      <h1 className=" text-[#ffffff]">{carData[0].Model}</h1>
                      <h1 className=" text-[#ffffff]">{carData[0].FuelType}</h1>
                      <h1 className=" text-[#ffffff]">{carData[0].PUC_date}</h1>
                      <h1 className=" text-[#ffffff]">
                        {carData[0].InsuranceTill}
                      </h1>
                      <h1 className=" text-[#ffffff]">
                        {carData[0].Last_Service}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between max-w-[315px] pt-6 pb-1 text-TextWhite font-lato font-semibold text-[16px]">
                  <h1>It's been</h1>
                  <a className="text-pila font-semibold cursor-pointer font-Montserrat text-[16px]">
                    Service History
                  </a>
                </div>

                <div className="w-[275px] h-[107px]  bg-gradient-to-l from-[#79B332] to-[#F2F0A4] rounded-[10px]">
                  
                    <h1 className="text-[70px] font-extrabold font-Montserrat indent-6 leading-none">
                      {carData[0].LastServiceDays}
                      <span className="font-semibold font-Montserrat text-[18px] ">Days</span>
                    </h1>
                    <h1 className="font-semibold font-Montserrat text-[16px] text-center uppercase">
                      SINCE YOUR LAST SERVICE
                    </h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="w-[325px]">
        <Booking/>
    </div>
    <div className="bg-prime max-h-[863px] rounded-[10px] border-2 w-full overflow-hidden">
        {/* <Cart/> */}
        <Wallet/>
    </div>
    </div>
  );
};

export default DashboardMain;
