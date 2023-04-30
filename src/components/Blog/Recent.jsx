

export default function Recent({ img }) {
  const recent = {
    date: "27 March 2023",
    views: 23,
    title: `Maintaining Your Car's Appearance: What You Need to Know About Car Denting and Painting`,
    desc: `Maintaining the appearance and structural integrity of a vehicle is essential to its longevity and...`,
    href: "Link",
  };
  return (
    <div>
      <div className="border-white hover:border-pila rounded-[10px] p-[28px] border-2 grid grid-cols-3 gap-[19px]">
        <div className="col-span-2 rounded-s-[10px] ">
          <img className="w-[496px] h-[300px] " src={img} />
        </div>
        <div className="gap-[10px] col-span-1">
          <div className="space-y-[10px]">
            <div className="flex gap-[40px] text-TextWhite font-lato font-semibold text-[14px]">
              <h1>{recent.date}</h1>
              <ul className="list-disc">
                <li>
                  <h1>0 Views {recent.views}</h1>
                </li>
              </ul>
            </div>
            <div className="text-TextWhite">
              <h1 className="font-Montserrat font-bold text-[18px]">
                {recent.title}
              </h1>
              <h1 className="font-lato font-regular text-[16px]">
                {recent.desc}
              </h1>
            </div>
            <div className="pt-[11px]">
              <button className="bg-pila max-w-[135px] h-[40px] rounded-[8px] text-black w-full font-bold ">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
