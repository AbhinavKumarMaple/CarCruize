import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Check from "../Servises/assets/Check.svg";
import BackArrow from "../Servises/assets/BackArrow.svg";
import DilogCart from "../Servises/assets/DilogCart.svg";
import "./styles.css";

export default function TypesOfServices({ service, index }) {
  const ServiceSpecifications = [
    "AC Vent Cleaning",
    "AC Vent Cleaning",
    "AC Gas (upto 400 gms)",
    "Condenser Cleaning",
    "AC Filter Cleaning",
  ];

  return (
    <Dialog.Root>
      <div className="">
        <div className="lg:flex  overflow-hidden h-96 max-w-96">
          {/* {(index + 2) % 3 == 0 ? (
              <div className="border" />
              ) : (
                <div />
              )} */}

          <div className=" m-auto           relative">
            <Dialog.Trigger asChild>
              <div className="border border-white text-white hover:text-black hover:bg-bg cursor-pointer mx-auto rounded-xl text-center w-[300px]  h-[300px]">
                {/* <img src={go} className="float-right p-2 text-pila " /> */}
                <div className="mx-auto rounded-lg  bg-white mt-7 w-[154px] h-[130px] "></div>
                <div className="text-center">
                  <h1 className="text-[24px] flex justify-center font-Montserrat font-bold py-2 whitespace-normal">
                    <span className="">{service}</span>
                  </h1>
                </div>
                <h1 className="text- font-lato text-[16px] font-regular  ">
                  Every 5000kms/3 months
                </h1>
                <p className="text- font-light">(Recomended)</p>
              </div>
            </Dialog.Trigger>
            <div className="absolute w-full flex justify-center  -bottom-6">
              <div className="max-w-[175px] max-h-[50px]">
                <button className="cursor-default text-center text-black font-lato font-bold text-[20px] bg-pila  w-[175px]  rounded-[10px]  h-[50px]">
                  book Now
                </button>
              </  div>
            </div>
          </div>
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent w-[856px] rounded-[10px] h-[403px]">
          <Dialog.Title className="DialogTitle  font-Montserrat font-bold text-[30px] shadow-bg shadow-md bg-pila h-[112px] mt-[24px]">
            <div className="flex">
              <div>
                <img
                  src={BackArrow}
                  className="text-black  mt-[18px] ml-[34px]"
                />
              </div>

              <div className="flex justify-center py-[15px] w-full">
                Regular AC Service
              </div>
            </div>
            <Dialog.Description className="DialogDescription flex justify-center">
              <h1 className="font-lato  font-regular text-[20px]">
                Every 5,000 Kms or 3 Months (Recommended)
              </h1>
            </Dialog.Description>
          </Dialog.Title>
          <div className="flex justify-center">
            <div className="grid-cols-2 gap-y-[10px] pt-[27px] grid font-lato gap-x-44 font-regular text-[20px] ">
              {ServiceSpecifications.map((item) => (
                <div className="flex ">
                  <img src={Check} className="pr-[14px]" />
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex  justify-center gap-[17px] items-center text-center ">
              <h1 className="text-red-500  font-Montserrat text-[24px] font-semibold line-through ">
                $1000
              </h1>
              <h1 className="font-Montserrat text-[#41B826] text-[30px] font-bold">
                $800/-
              </h1>
            </div>{" "}
          </div>
          <Dialog.Close asChild className="">
            <div className=" flex justify-center">
              <button className="font-lato font-bold text-[30px] flex bg-pila gap-[15px] h-[60px] items-center justify-center rounded-[10px] w-[320px] shadow-md shadow-bg">
                <img src={DilogCart} />
                Add To Cart
              </button>
            </div>
          </Dialog.Close>
          <Dialog.Close asChild></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
