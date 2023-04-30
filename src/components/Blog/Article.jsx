import ad2 from "./asset/2.png";
import ad3 from "./asset/3.png";

export default function Article({ img }) {
  const recent = {
    img: ad2,
    date: "27 March 2023",
    views: 23,
    title: `Maintaining Your Car's Appearance: What You Need to Know About Car Denting and Painting`,
    desc: `Maintaining the appearance and structural integrity of a vehicle is essential to its longevity and...`,
    href: "Link",
  };
  return (
    <div className="max-h-[269px] flex group">
      <div className="group-hover:mr-[50px] group-hover:h-auto group-hover:w-[5px] group-hover:border-2 group-hover:bg-pila group-hover:rounded-full group-hover:border-pila duration-500 ease-in-out "></div>
      <div className="border-b-2 py-[45px] flex w-full ">
        <div className="  ">
          <img
            className="rounded-s-[10px]  max-w-[295px] max-h-[179px]"
            src={img ? img : ad2}
            style={{ width: "295px", height: "269px" }}
          />
        </div>
        <div className="gap-[10px] col-span-1 w-full ml-[44px]">
          <div className="flex gap-[40px] text-TextWhite font-lato font-semibold text-[16px]">
            <h1>{recent.date}</h1>
            <ul className="list-disc">
              <li>
                <h1>0 Views {recent.views}</h1>
              </li>
            </ul>
          </div>
          <div className="text-TextWhite">
            <h1 className="font-Montserrat font-bold text-[30px]">
              {recent.title}
            </h1>
            <h1 className="font-lato font-semibold text-[20px]">
              {recent.desc}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
