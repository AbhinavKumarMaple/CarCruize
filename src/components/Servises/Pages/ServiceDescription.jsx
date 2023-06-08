import React from "react";
import CARCRUIZE_mascot from "../../assets/asset/CARCRUIZE_mascot.png";
import DENTINGPAINTING1 from '../../assets/OnclickOnService/DENTING&PAINTING 1.png'
import InsuranceClaim1 from '../../assets/OnclickOnService/InsuranceClaim 1.png';
import onCarServices1 from '../../assets/OnclickOnService/onCarServices1.png';
import SAVEUPTO40 from '../../assets/OnclickOnService/SAVEUPTO401.png' 
import Back from "../../assets/OnclickOnService/Back.png";
import car_air_conditioner_check_service from "../../assets/OnclickOnService/car_air_conditioner_check_service.png";
import DilogCart from "../../Servises/assets/DilogCart.svg";
const ServiceDescription = () => {
  return (
    <div className="bg-prime  bg-fixed h-screen">
      <div className="flex p-[50px]">
        <div>
          <img src={Back} />
        </div>
        <div className="pl-[40px] pr-[60px] " >
          <img className=" border-4" src={car_air_conditioner_check_service} />
        </div>
        <div className="text-TextWhite font-regu text-[24px]">
          <div className="flex flex-col gap-y-[8px]">
          <h1 className="font-lato font-bold text-[60px]">
            Regular AC Service
          </h1>
          <h1 className="font-lato font-italic text-[24px]">
            Every 5,000 Kms or 3 Months (Recommended)
          </h1>
          </div>
          <div className="flex flex-col gap-y-[8px] pt-[24px]">

          <h1>AC Vent Cleaning</h1>
          <h1>AC Gas (upto gms) </h1>
          <h1>AC Filter Cleaning</h1>
          <h1>AC Inspection</h1>
          <h1>Condenser Cleaning</h1>
          </div>
          <div>
            <div className="flex py-[20px] justify-center max-w-[290px] gap-[17px] items-center text-center ">
              <h1 className="text-red-500  font-Montserrat text-[24px] font-semibold line-through ">
                $1000
              </h1>
              <h1 className="font-Montserrat text-[#41B826] text-[30px] font-bold">
                $800/-
              </h1>
            </div>{" "}
          </div>
          <button className="font-lato font-bold text-[30px]  flex bg-pila gap-[15px] h-[60px] items-center justify-center rounded-[10px] w-[320px] shadow-md shadow-bg text-black">
            <img src={DilogCart} />
            Add To Cart
          </button>
        </div>
      </div>








      <div className="mt-[23px] relative bg-TextWhite bg-opacity-40 w-full h-[202px] flex  items-center">
      <img
        className="ml-[90px] max-h-[310px] max-w-[241px] flex justify-center items-center"
        src={CARCRUIZE_mascot}
      />
      <div className=" w-full flex justify-center">

      <div className="flex gap-x-[26px]">

      <div>
        <img src={DENTINGPAINTING1}/>
      </div>
      <div>
        <img src={InsuranceClaim1}/>
      </div>
      <div>
        <img src={DENTINGPAINTING1}/>
      </div>
      <div>
        <img src={onCarServices1}/>
      </div>
      
     </div>
     
      </div>
    </div>






    
    </div>
  );
};

export default ServiceDescription;
