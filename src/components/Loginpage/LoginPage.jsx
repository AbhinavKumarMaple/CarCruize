import React from "react";
import man from "../assets/man.png";
import google from "../assets/google.svg";
import facebook from "../assets/facebook icon.svg";

import ReactSwitch from "react-switch";
const LoginPage = () => {
  return (
    <div className="bg-black py-10 flex">
      <div className="relative ">
        <img src={man} className="max-w-[110vh]"></img>
        <div className="text- absolute top-24 right-10 ">
          <h1 className="text-5xl p-5 font-bold">Why Carcruize</h1>
          <p className="max-w-sm p-5">
            Carcruize offers a one-stop solution for all car care needs, with
            competitive pricing and special offers available for our customers.
            Trust us totake care of your vehicle, without breaking the bank.
          </p>
          <p className="max-w-sm p-5">
            Carcruize offers a one-stop solution for all car care needs, with
            competitive pricing and special offers available for our customers.
            Trust us totake care of your vehicle, without breaking the bank.
          </p>
        </div>
      </div>

      <div className="relative  m-16">
        <div className="text-white absolute -top-9  w-full flex justify-center ">
          <div className="bg-pila border text-center py-3   rounded-2xl text-black font-minbold text-xl px-5">
            <h1 className="py-3 font-bold">Sign In</h1>
            <div className="inline-block">
              <div className="flex">
                <img
                  src={google}
                  className="h-9 -1 rounded-tl-md rounded-bl-md"
                ></img>
                <button className="rounded-tr-md rounded-br-md bg-gray-600 text-sm text-white px-16">
                  Login with google
                </button>
                <img src={facebook} className="h-9 pl-1"></img>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded-2xl  text-center bg-white 4 max-w-[24rem]">
          <div>


            <div className="pt-24   justify-center ">
              <div className=" flex ">
                <div className="w-full self-center bg-zinc-600 h-[0.5px] mx-2" />
                <h1>Or</h1>
                <div className="w-full self-center bg-zinc-600 h-[0.5px] mx-2" />
              </div>
            </div>

            <input
              type="text"
              placeholder="Email / Phone Number"
              className="my-5  border-2 border-pila rounded-xl  px-14 py-2"
            />
            <button className="px-28 py-2 rounded-2xl  mt-7 bg-pila font-bold">
              SEND OTP
            </button>

            <h4 className="py-5">Remember me</h4>
            <ReactSwitch className="text-black" />
            <div className="text-center">
              <h1>Don't have an account?</h1>
              <h1 className="font-bold py-3">Sign Up</h1>
              <hr />
            </div>
            <button className="px-24 py-2 rounded-2xl  my-4 bg-pila font-bold">
              Book as a guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
