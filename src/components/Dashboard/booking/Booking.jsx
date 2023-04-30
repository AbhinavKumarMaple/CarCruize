import RightArrow from "../../assets/asset/RightArrow.svg"

const Booking = () => {
  return (
    <div className="flex flex-col gap-[16px] h-[862px] w-[325px] border-2 bg-prime p-[12px] rounded-[10px]">
      <div className="bg-[#E63E70] text-[20px] flex items-center justify-center text-TextWhite text-center h-[52px] rounded-[10px] font-lato font-extrabold">
        Choose a Date
      </div>
      <div className="flex flex-col gap-[27px] font-lato font-regular">
        <div className="h-[273px] bg-white rounded-[10px]"></div>
        <div className=" bg-[#D9D9D9] h-[50px] flex flex-row justify-between rounded-[10px] overflow-hidden">
            <input className="bg-[#D9D9D9] pl-[11px]  focus:outline-none text-[20px] w-full" placeholder="Select Pick-up Address"></input>
            <div className="flex  items-center justify-center border-prime border-[1px] bg-pila w-[48px] rounded-[10px] m-[4px]">
                <img src={RightArrow} />
            </div>
        </div>
        <div className=" bg-[#D9D9D9] h-[50px] flex flex-row justify-between rounded-[10px] overflow-hidden">
            <input className="bg-[#D9D9D9] pl-[11px]  focus:outline-none text-[20px] w-full" placeholder="Select car for service"></input>
            <div className="flex  items-center justify-center border-prime border-[1px] bg-pila w-[48px] rounded-[10px] m-[4px]">
                <img src={RightArrow} />
            </div>
        </div>
        <div className=" bg-[#D9D9D9] h-[50px] flex flex-row justify-between rounded-[10px] overflow-hidden">
            <input className="bg-[#D9D9D9] pl-[11px]  focus:outline-none text-[20px] w-full" placeholder="Add services to cart"></input>
            <div className="flex  items-center justify-center border-prime border-[1px] bg-pila w-[48px] rounded-[10px] m-[4px]">
                <img src={RightArrow} />
            </div>
        </div>
      </div>
      <div className="mt-[147px] ">
        <div className="bg-pila uppercase text-center flex items-center justify-center h-[50px] rounded-[10px] text-[20px] font-lato font-bold">submit</div>
      </div>
    </div>
  );
};

export default Booking;
