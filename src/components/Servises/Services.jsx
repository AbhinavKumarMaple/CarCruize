import React from "react";
import {
  Preodic,
  Ac,
  Battery,
  CarInspection,
  CarSpa,
  ClutchBody,
  Denting,
  Detailing,
  LifeInsurance,
  Suspension,
  TyreAndWheel,
  WindShield,
} from "./Index";
import TypesOfServices from "./TypesOfServices";
import ServiceDesc from "./ServiceDesc";
import AD from "../Servises/assets/AD.png";
import Footer from "../Components/Footer";

const Services = () => {
  console.log(Preodic)
  const types = [
    { name: "Periodic Services", icon: Preodic },
    { name: "AC Service and Repair", icon:Ac},
    { name: "Batteries", icon: Battery },
    { name: "Tyres and Wheel Care", icon: TyreAndWheel },
    { name: "Denting and Painting", icon: Denting },
    { name: "Detailing Services", icon: Detailing },
    { name: "Car Spa and Cleaning", icon: CarSpa },
    { name: "Car Inspections", icon: CarInspection },
    { name: "Windshields and Lights", icon: WindShield },
    { name: "Suspension and Fitments", icon: Suspension },
    { name: "Clutch and Body Parts", icon: ClutchBody },
    { name: "Insurance Claims", icon: LifeInsurance },
  ];

  const services = [
    "Basic Service",
    "Standard Service",
    "Comprehensive Service",
    "Front Brake Pads",
    "Rare Brake Shoes",
    "Front Brake Discs",
    "Caliper Pin Replacement  ",
    "Disc Turning",
    "Handbrake Wire Replacement",
    "Brake Drums Turning",
    "Wheel Cylinder Replacement",
  ];

  return (
    <div className="">
      <div className="bg-sideNav w-[400px] h-[875px] text-white fixed px-2">
        {types.map(({name,icon}) => (
          <div className="flex ">
            <div className="w-[77px] h-[67px]  flex justify-center ">
              <img src={icon} className="w-[32px]  " alt="image" />
            </div>
            <div className=" h-[67px] flex justify-center  items-center">
              <h1 className=" text-white text-[20px] font-regular font-lato cursor-pointer hover:underline px-5 ">
                {" "}
                {name}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-[25rem] ">
        <img src={AD} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {services.map((type, index) => (
            <TypesOfServices service={type} index={index} />
          ))}
          {/* <ServiceDesc/> */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
