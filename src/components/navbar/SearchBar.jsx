import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import { useState } from "react";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
const SearchBar = () => {
  const Recent = ["Insurance Claims", "Body Parts"];
  const types = [
    "Periodic Services",
    "AC Service and Repair",
    "Tyres and Wheel Care",
    "Batteries",
    "Denting and Painting",
    "Detailing Services",
    "Car Spa and Cleaning",
    "Car Inspections",
    "Windshields and Lights",
    "Suspension and Fitments",
    "Clutch and Body Parts",
    "Insurance Claims",
  ];
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };
  const onChange = () => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <div className="">
      <div className="flex sm:items-center   text-white">
        <div
          className={`flex ${
            focus ? "bg-white bg-opacity-90 rounded-t-[10px]" : ""
          } sm:items-center relative  text-white`}
        >
          <input
            type="text"
            value={value}
            onChange={onChange}
            // onClick={(e) => setFocus(!focus)}
            onFocus={(e) => setFocus(true)}
            onBlur={(e) => setFocus(false)}  
            placeholder="  Search"
            className={`bg-prime focus:m-[9px] pl-2 focus:w-[337px] focus:bg-TextWhite focus-within:bg-opacity-90 md:w-[261px] focus:text-black border-2 h-[42px] text-[18px] font-lato font-bold  rounded-[10px]  mr-3`}
          />
          <FiSearch
            onClick={() => onSearch(value)}
            className={`sm:h-[15px] sm:absolute ${
              focus ? "text-black" : ""
            } right-6 cursor-pointer`}
          />
        </div>
      </div>
      <div className="text-bg rounded-b-[10px] max-h-[512px] overflow-scroll scrollbar-hide font-lato text-[18px] font-bold pl-[20px] bg-white bg-opacity-90">
        {focus ? (
          <div>
            <h1 className="text-[16px]">Recent Searches</h1>
            <div className="flex gap-2 py-[10px] overflow-x-scroll scrollbar-hide">
              {Recent.map((item, i) => (
                <div
                  key={i}
                  className="flex text-black  bg-[#B2B2B2] items-center rounded-[10px] py-1 px-2"
                >
                  <h1 className="">{item}</h1>
                  <GrFormClose className="ml-2" />
                </div>
              ))}
            </div>
            <div className="flex justify-end text-[12px] px-5 cursor-pointer">
              +see more
            </div>
            <h1 className="text-[16px]">Searche Results</h1>
          </div>
        ) : undefined}

        {types
          .filter((item) => {
            const searchTearm = value.toLocaleLowerCase();
            const data = item.toLocaleLowerCase();
            return (
              searchTearm &&
              data.startsWith(searchTearm) &&
              data !== searchTearm
            );
          })
          .map((item, i) => (
            <h1
              key={i}
              className="p-[14px] cursor-pointer "
              onClick={() => onSearch(item)}
            >
              {item}
            </h1>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
