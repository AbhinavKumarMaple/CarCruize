import React, { useState } from "react";
import Listt from "./Listt";
import Faqs from "./Faqs";
import fb from "../ContactUs//assets/fb.png";
import insta from "../ContactUs//assets/insta.png";
import ggl from "../ContactUs//assets/ggl.png";
import linkedIn from "../ContactUs//assets/linkedIn.png";
import callUs from './assets/callUs.svg'
import visitUs from './assets/visitUs.svg'
import writeToUs from './assets/writeToUs.svg'


const Contact = () => {
  const [page, setpage] = useState("left");

  const items = [
    {
      icon : writeToUs,
      title: "Write to us",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
    {
      icon : visitUs,
      title: "Visit Us",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
    {
      icon : callUs,
      title: "The Benefits of Meditation",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
  ];

  return (
    <div className="bg-[#2C2C2C] rounded-tr-lg rounded-br-lg py-8 px-[16px]">
      <div className="  2xl:flex justify-between ">
        <div className="   w-[1155px] lg:border lg:flex sm:border-white rounded-xl">
        
          <div className="flex flex-col  sm:px-4 ">
            <h1 className="text-[30px]  font-Montserrat sm:pt-8 font-bold text-white ">Contact Us</h1>
            <div className="max-w-[568px]">

            {items.map((e, index) => (
              <Listt key={index} logo={e.icon} title={e.title} para={e.para1} link={e.link} />
            ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="items-center ">
                <h1 className="text-TextWhite">Get in touch with us on:</h1>
                <div className="sm:flex space-x-[16px] pt-2">
                  <img src={fb} className="w-7 cursor-pointer"></img>
                  <img src={insta} className="w-7 cursor-pointer"></img>
                  <img src={ggl} className="w-7 cursor-pointer"></img>
                  <img src={linkedIn} className="w-7 cursor-pointer"></img>
                </div>
              </div>
              <div className="text-pila underline-offset-4 underline text-center flex flex-col">
                <a href="" className="cursor-pointer">
                  Terms & Condition
                </a>
                <a className="cursor-pointer">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="bg-white mx-3 my-8 w-[2px] " />
          <div className="  sm: text-white  m-6 max-w-[405px] text-left ">
            <div className="">
              <h1 className="text-[30px] font-Montserrat font-bold ">
                Looks Like You've Got Something We Can Help With
              </h1>
            </div>
            <p className="text-[24px] font-Montserrat font-bold text-left ">Tell Us About It Here</p>
            <form className="max-w-[407px] space-y-[20px] font-lato font-extrabold text-[16px] ">
              <input
                type="text"
                placeholder="Full name"
                className="w-full h-[43px]  rounded-[10px] pl-5 bg-[#2C2C2C] border"
              ></input>
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[43px] rounded-[10px] pl-5 bg-[#2C2C2C] border"
              ></input>
              <input
                type="text"
                placeholder="Phone"
                className="w-full h-[43px] rounded-[10px] pl-5 bg-[#2C2C2C] border"
              ></input>
              <input
                type="text"
                placeholder="Type your massage here"
                className="w-full h-[78px] rounded-[10px] pl-5 bg-[#2C2C2C] border "
              ></input>
              <h1 className="font-lato text-[20px] font-regular">Please Choose a niche below:</h1>
              <div className="">
                <div >
                  <input
                    type="checkbox"
                    id="typing"
                    name="typing"
                    value={"Service related query"}
                    placeholder=""
                    className="bg-black"
                  ></input>
                  <label className="font-lato text-[20px] font-regular pl-[15px]" htmlFor="flexCheckDefault">
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
                  <label className="font-lato text-[20px] font-regular pl-[15px]" htmlFor="flexCheckDefault" >
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
                  <label className="font-lato text-[20px] font-regular pl-[15px]" htmlFor="flexCheckDefault">
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
                  <label className="font-lato text-[20px] font-regular pl-[15px]" htmlFor="flexCheckDefault">
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
                  <label className="font-lato text-[20px] font-regular pl-[15px]" htmlFor="flexCheckDefault">
                    Franchise Related Query
                  </label>
                </div>
              </div>
              <button className="bg-pila sm:h-[55px] font-lato font-bold text-[20px]  lg:w-[195px] rounded-[10px] text-[#242424]">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="w-[553px] h-[789px] rounded-xl  border-2 ">
        <div >
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
    </div>
  );
};

export default Contact;
