import React from "react";
import Featured from "./Featured";
import Recent from "./Recent";
import Article from "./Article";

import ad2 from "./asset/2.png";
import ad3 from "./asset/3.png";

export default function Blog() {
  return (
    <div className="bg-second p-[45px] flex flex-col gap-4">
      <div className="flex gap-[45px]">
        <div className="w-[852px]">
          <Featured />
        </div>
        <div className="max-w-[776px] ">
          <h1 className="font-Montserrat font-bold text-[30px] text-TextWhite pb-[19px]">
            Recent
          </h1>
          <div className="flex flex-col gap-[30px]">
            <Recent img={ad3} />
            <Recent img={ad2} />
          </div>
        </div>
      </div>

      <div className="pt-[57px]">
        <div className="font-Montserrat font-bold text-[30px] text-TextWhite pb-[20px] flex justify-between">
          <h1>Article</h1>
        </div>
        <Article img={ad2} />
        <Article img={ad3} />
        <Article img={ad2} />
        <Article img={ad3} />
      </div>
    </div>
  );
}
