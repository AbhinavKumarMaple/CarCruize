import React, { useState } from "react";
import Listt from "./Listt";
import Faqs from "./Faqs";
import fb from "../ContactUs//assets/fb.png";
import insta from "../ContactUs//assets/insta.png";
import ggl from "../ContactUs//assets/ggl.png";
import linkedIn from "../ContactUs//assets/linkedIn.png";

const Contact = () => {
  const [page, setpage] = useState("left");

  const items = [
    {
      title: "The Benefits of Meditation",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
    {
      title: "The Benefits of Meditation",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
    {
      title: "The Benefits of Meditation",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
  ];

  return (
    <div className="bg-black rounded-tr-lg rounded-br-lg py-7">
      <div className=" sm:ml-11    lg:flex flex-wrap sm:justify-start">
        <div className="  lg:w-3/5 lg:border lg:flex   sm:border-white rounded-xl">
          <div className="flex flex-col  sm:px-4 sm:w-7/12">
            <h1 className="text-5xl sm:pt-8 font-bold text-white ">Contact Us</h1>
            {items.map((e, index) => (
              <Listt key={index} title={e.title} para={e.para1} link={e.link} />
            ))}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-white">Get in touch with us on:</h1>
                <div className="sm:flex space-x-6 pt-2">
                  <img src={fb} className="w-7 cursor-pointer"></img>
                  <img src={insta} className="w-7 cursor-pointer"></img>
                  <img src={ggl} className="w-7 cursor-pointer"></img>
                  <img src={linkedIn} className="w-7 cursor-pointer"></img>
                </div>
              </div>
              <div className="text-white text-center flex flex-col">
                <a href="" className="cursor-pointer">
                  Terms & Condition
                </a>
                <a className="cursor-pointer">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="bg-white mx-3 my-8 w-[2px] " />
          <div className="  sm: text-white  m-6 sm:w-72 text-left ">
            <div className="">
              <h1 className="text-2xl font-bold ">
                Looks Like You've Got Something We Can Help With
              </h1>
            </div>
            <p className="text-sm text-left ">Tell Us About It Here</p>
            <form className="space-y-5  flex-col py-5">
              <input
                type="text"
                placeholder="Full name"
                className="sm:px-10 lg:px-10 rounded-lg bg-black border"
              ></input>
              <input
                type="text"
                placeholder="Email"
                className="sm:px-10 rounded-lg bg-black border"
              ></input>
              <input
                type="text"
                placeholder="Phone"
                className="sm:px-10 rounded-lg bg-black border"
              ></input>
              <input
                type="text"
                placeholder="Type your massage here"
                className="sm:px-10 rounded-lg bg-black py-4 border"
              ></input>
              <h1>Please Choose a niche below:</h1>
              <div className="">
                <div>
                  <input
                    type="checkbox"
                    id="typing"
                    name="typing"
                    value={"Service related query"}
                    placeholder=""
                    className="bg-black"
                  ></input>
                  <label className="p-2" htmlFor="flexCheckDefault">
                    Service Related Query
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="typing"
                    name="typing"
                    value={"Service related query"}
                    placeholder=""
                  ></input>
                  <label className="p-2" htmlFor="flexCheckDefault">
                    Other
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="typing"
                    name="typing"
                    value={"Service related query"}
                    placeholder=""
                  ></input>
                  <label className="p-2" htmlFor="flexCheckDefault">
                    Feedback
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="typing"
                    name="typing"
                    value={"Service related query"}
                    placeholder=""
                  ></input>
                  <label className="p-2" htmlFor="flexCheckDefault">
                    Wish To Partner-up
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="typing"
                    name="typing"
                    value={"Service related query"}
                    placeholder=""
                  ></input>
                  <label className="p-2" htmlFor="flexCheckDefault">
                    Franchise Related Query
                  </label>
                </div>
              </div>
              <button className="bg-pila sm:h-[55px] font-semibold text-[24px]  lg:w-[407px] rounded-[79px] text-black">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div></div>
        <div className="sm:w-4/12 rounded-xl  bg-black border-2  mx-5 ">
          <div className="text-gray-500 borde text-center flex h-14 rounded-xl">
            <div
              className={`${
                page == "left"
                  ? "cursor-pointer border font-bold rounded-tl-xl flex-auto py-3 text-black bg-pila"
                  : " bg-gray-50 border font-bold cursor-pointer rounded-tl-xl text-black flex-auto py-3"
              }`}
              onClick={() => setpage("left")}
            >
              FAQ,s
            </div>
            <div
              className={`${
                page == "right"
                  ? "cursor-pointer border rounded-tr-xl text-black font-bold flex-auto py-3 bg-pila"
                  : " bg-white border cursor-pointer text-black rounded-tr-xl font-bold flex-auto py-3"
              }`}
              onClick={() => setpage("right")}
            >
              Lat,s Chat
            </div>
          </div>
          <div className="pt-5">{page == "left" ? <Faqs /> : <right />};</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
