import React, { useState } from "react";
import Listt from "./Listt";
import Faqs from "./Faqs";
import Test from "./Test";
import fb from "../ContactUs//assets/fb.png";
import insta from "../ContactUs//assets/insta.png";
import ggl from "../ContactUs//assets/ggl.png";
import linkedIn from "../ContactUs//assets/linkedIn.png";
import callUs from "./assets/callUs.svg";
import visitUs from "./assets/visitUs.svg";
import writeToUs from "./assets/writeToUs.svg";
import { Chat } from "./Chat";
import { MessageInput } from "./Chat/MessageInput";

const Contact = () => {
  const [page, setpage] = useState("left");

  const items = [
    {
      icon: writeToUs,
      title: "Write to us",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
    {
      icon: visitUs,
      title: "Visit Us",
      para1: "Meditation is a practice that",
      link: "Research has shown that ",
    },
    {
      icon: callUs,
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
            <h1 className="text-[30px]  font-Montserrat sm:pt-8 font-bold text-white ">
              Contact Us
            </h1>
            <div className="max-w-[568px]">
              {items.map((e, index) => (
                <Listt
                  key={index}
                  logo={e.icon}
                  title={e.title}
                  para={e.para1}
                  link={e.link}
                />
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
            <p className="text-[24px] font-Montserrat font-bold text-left ">
              Tell Us About It Here
            </p>
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
              <h1 className="font-lato text-[20px] font-regular">
                Please Choose a niche below:
              </h1>
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
                  <label
                    className="font-lato text-[20px] font-regular pl-[15px]"
                    htmlFor="flexCheckDefault"
                  >
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
                    className=" accent-pink-500 bg-black"
                    style={{ backgroundColor: '#000000' }}
                  ></input>
                  <label
                    className="font-lato text-[20px] font-regular pl-[15px]"
                    htmlFor="flexCheckDefault"
                  >
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
                  <label
                    className="font-lato text-[20px] font-regular pl-[15px]"
                    htmlFor="flexCheckDefault"
                  >
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
                  <label
                    className="font-lato text-[20px] font-regular pl-[15px]"
                    htmlFor="flexCheckDefault"
                  >
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
                  <label
                    className="font-lato text-[20px] font-regular pl-[15px]"
                    htmlFor="flexCheckDefault"
                  >
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
        <div className="w-[553px] whitespace-nowrap overflow-auto scrollbar-hide overflow-x-hidden h-[789px] rounded-xl  border-2  relative">
          <div className="">
            <div className="text-gray-500 borde text-center flex h-14 rounded-xl ">
              <div
                className={`${
                  page == "left"
                    ? "cursor-pointer  font-Montserrat leading-none text-[30px] font-bold  flex-1 py-3 text-black bg-pila"
                    : " text-TextWhite  flex-1 font-Montserrat leading-none font-bold text-[30px] cursor-pointer  py-3"
                }`}
                onClick={() => setpage("left")}
              >
                FAQ,s
              </div>
              <div
                className={`${
                  page == "right"
                    ? "cursor-pointer   font-Montserrat leading-none text-[30px] font-bold text-black flex-1 py-3 bg-pila"
                    : " text-TextWhite  cursor-pointer font-Montserrat leading-none text-[30px] font-bold  flex-1 py-3"
                }`}
                onClick={() => setpage("right")}
              >
                Lat's Chat
              </div>
            </div>
            <div className="pt-5 border-t ">
              {page == "left" ? (
                <div className=" ">
                  <Faqs
                    title="How to book a car service with CarCruize?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="Do I have to pay before the service?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="Where can I book a car service with CarCruize?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="What if I am not available to drop my car?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="What is CarCruize?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="How can you offer upto 40% savings on services?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="Why should I choose CarCruize?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="How is CarCruizedifferent from other service platforms out there?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="What if my car requires parts?"
                    desc="How to book a car service with CarCruize?"
                  />
                  <Faqs
                    title="What are OEM or OES spare parts?"
                    desc="How to book a car service with CarCruize?"
                  />
                </div>
              ) : (
                <div className=""><Chat/>  <div className="absolute left-1/2 -translate-x-1/2 w-full  bottom-[21px] px-[21px] ">
                <MessageInput />
              </div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
