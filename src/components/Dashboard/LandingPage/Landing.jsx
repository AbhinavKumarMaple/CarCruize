import logo from "../../assets/Dashboard/Login/logo.svg";
import mechanic from "../../assets/Dashboard/Login/mechanic.png";
import airowSign from '../../assets/Dashboard/Login/airowSign.png'
import React from "react";

const Landing = () => {
  return (
    <div className="bg-[#242424]">
      <div className="bg-white rounded-[10px] rounded-br-[70px] -[19px] flex">
        <div clas>
          <div className="p-[42px] ">
            <div className="flex">
              <img className="w-[38px]" src={logo} />
              <h1 className="font-popins text-[40px] px-3 font-bold">
                CARCRUIZE
              </h1>
            </div>
            <div>
              <h1 className="font-Montserrat font-bold text-[30px] max-w-[355px] pt-[40px]">
                Sign-in & leave the rest to us...
              </h1>
              <h1 className="font-lato font-regular text-[20px] max-w-[407px] pt-[25px]">
                We’ll help you book a service, curated just for your car
                problem!
              </h1>
            </div>
            <div className="w-[75px] bg-bg h-[2px] my-[35px]" />

            <div className="">
              <div className="max-w-[345px] space-y-[25px]">
                <div>
                  <h1 className="font-lato text-[18px] font-bold">Name*</h1>
                  <input
                    className="border-2 border-bg pl-3 font-lato text-[18px] font-semibold w-full h-[35px] rounded-[10px]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <h1 className="font-lato text-[18px] font-bold">
                    Mobile Number*
                  </h1>
                  <input
                    className="border-2 border-bg pl-3 font-lato text-[18px] font-semibold w-full h-[35px] rounded-[10px]"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
                <div>
                  <h1 className="font-lato text-[18px] font-bold">
                    Alternate Mobile Number*
                  </h1>
                  <input
                    className="border-2 border-bg pl-3 font-lato text-[18px] font-semibold w-full h-[35px] rounded-[10px]"
                    placeholder="Alternate Mobile Number"
                  />
                </div>

                <button className="font-lato text-[20px] h-[40px] font-bold w-full rounded-[10px] bg-pila">
                  Sign up
                </button>
                <div className="flex justify-center">
                  <span className="font-lato font-medium text-[18px]">
                    Already have an account
                  </span>
                  <h1 className="underline font-lato font-bold pl-2 text-[18px]">
                    Log in
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bg h-[793px] my-auto w-[1px] mx-auto" />
        <div className="p-[18px] flex justify-center">
          <div
            className="relative w-[1155px] h-[829px] bg-no-repeat bg-cover bg-center rounded-br-[70px] "
            style={{ backgroundImage: `url(${mechanic})` }}>

                <img className="w-[40px] absolute right-16 top-12" src={airowSign} />
                <div className="bg-black  mt-[480px] bg-opacity-70 mx-auto flex h-[222px] justify-center">
                <div className=""> 
                    <h1 className="max-w-[620px] font-Montserrat text-white font-extrabold text-[45px]">Bring Your Car to Life with Our Expert Team!</h1>
                    <h1 className="max-w-[1070px] font-lato text-[25px] text-white">Carcruize offers a one-stop solution for all car care needs, with competitive pricing and special offers available for our customers. Trust us to take care of your vehicle, without breaking the bank.</h1>
                </div>
                </div>
                <h1 className="items-center pt-[33px] flex justify-end pr-[40px] text-end font-lato font-extrabold text-[24px] text-TextWhite ">Learn more about us <img className="ml-5 w-[20px] h-[20px]" src={airowSign}/></h1>
          </div>
          
        </div>
          
      </div>



    </div>
  );
};

export default Landing;
