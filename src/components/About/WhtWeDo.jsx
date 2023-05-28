import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MeetOurTeam } from "./MeetOurTeam";
import WhatWeDo from '../About/Assets/WhatWeDo.png'

export const WhtWeDo = () => {
  return (
    <div className="bg-opacity-70 " style={{backgroundImage: `url(${WhatWeDo})`}}>
      <div className="text-white text-center py-7 text-5xl font-extrabold">
        WHAT WE DO?
      </div>
      <div className="flex justify-center">
        <p className="font-semibold  text-white max-w-6xl">
        At Carcruize, we aspire to simplify the maintenance process for all car
        owners. With our expert team of technicians, state-of-the-art equipment,
        and cutting-edge techniques, we provide comprehensive servicing,
        repairs, and detailing services that leave your car looking and
        performing its best. Our commitment to excellence ensures that every car
        we work on receives the utmost care and attention, giving you peace of
        mind and confidence on the road.

        </p>
      </div>
      <div className="text-white  text-center py-7 text-5xl font-extrabold">USP</div>
      <div className=" justify-center text-pila flex align-bottom">
        <AiFillStar />
        <AiFillStar className="text-xl  " />
        <AiFillStar className="text-2xl  " />
        <AiFillStar className="text-xl  " />
        <AiFillStar />
      </div>
      <div className="text-white py-7 flex justify-center font-semibold">
        <p className="max-w-6xl">
        If you're looking for an automotive service provider that checks all the
        boxes and exceeds expectations, look no further. Carcruize featuring a
        unique USP of free car pickup and drop on service demand, guaranteed
        on-time delivery, and 100% genuine parts with a warranty on services,
        this business ensures your car stays in top condition while being
        ultra-convenient. This can't be beat!

        </p>
      </div>
      <div className="text-white text-center py-7 text-5xl font-extrabold">
        OUR MOTTO
      </div>
      <div className="text-white flex justify-center py-7 text- font-semibold">
        <p className="max-w-6xl">

        At CARCRUIZE, we believe that car maintenance should never be a source
        of stress or anxiety, which is why we've made it our mission to provide
        a care-free cruising experience for all individuals. Our empowering
        approach is designed to let you cruise through life with ease, knowing
        that your car is in the best possible hands. We offer a dependable and
        convenient solution for all your car needs, so you can focus on enjoying
        the ride, rather than worrying about the details.
        </p>
      </div>
      
      
    </div>
  );
};
