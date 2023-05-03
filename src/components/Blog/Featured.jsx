import { Link } from "react-router-dom";
import ad1 from "./asset/1.png";
import share from "./asset/share.svg";

export default function Featured({ link }) {
  const featured = {
    img: ad1,
    date: "27 March 2023",
    views: 23,
    title: `5 Critical Considerations When Buying a Used Car in India/5
    Essential Tips for Buying a Used Car`,
    desc: `Buying a used car can be an excellent way to save money while
    still getting a reliable vehicle...`,
    href: "Link",
  };

  return (
    <div>
      <div className="flex flex-col ">
        <div className="font-Montserrat font-bold text-[30px] text-TextWhite pb-[19px] flex justify-between">
          <h1 className="">Featured</h1>
          <div className="flex gap-[11px]">
            <img src={share} />
            <h1>Share</h1>
          </div>
        </div>
        <Link to={`/blog/${link}`}>
          <div className="border-white hover:border-pila rounded-[10px] p-[35px] border-2">
            <div className="flex flex-col gap-[10px]">
              <img src={featured.img} />
              <div className="flex gap-[80px] text-TextWhite font-lato font-semibold text-[16px]">
                <h1>{featured.date}</h1>
                <ul className="list-disc">
                  <li>
                    <h1>0 Views {featured.views}</h1>
                  </li>
                </ul>
              </div>
              <div className="text-TextWhite">
                <h1 className="font-Montserrat font-bold text-[24px]">
                  {featured.title}
                </h1>
                <h1 className="font-lato font-bold text-[20px]">
                  {featured.desc}
                </h1>
              </div>
              <div className="pt-[40px]">
                <button className="bg-pila max-w-[195px] h-[55px] rounded-[8px] text-black w-full font-bold ">
                  View
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
