import { Link } from "react-router-dom";

export default function ViewRecent({ img, link }) {
  const recent = {
    date: "27 March 2023",
    views: 23,
    title: `Maintaining Your Car's Appearance: What You Need to Know About Car Denting and Painting`,
    desc: `Maintaining the appearance and structural integrity of a vehicle is essential to its longevity and...`,
    href: "Link",
  };
  return (
    <Link to={`/blog/${link}`}>
      <div className="xl:min-w-[534px] ">
        <div className=" rounded-[10px] py-[28px] pl-[16px] flex justify-around gap-[12px]">
          <div className="">
            <img
              className="max-w-[191px] h-[115px] rounded-s-[10px]"
              src={img}
            />
          </div>
          <div className="">
            <div className="space-y-[10px]">
              <div className="text-TextWhite ">
                <h1 className="font-lato line-clamp-3 font-bold text-[16px] ">
                  {recent.title}
                </h1>
                <h1 className="font-Montserrat line-clamp-3 font-regular text-[12px]">
                  {recent.desc}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b-2"></div>
      </div>
    </Link>
  );
}
