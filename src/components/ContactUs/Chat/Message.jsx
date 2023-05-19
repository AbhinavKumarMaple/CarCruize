import pd1 from "../../assets/chat/ProfilePic1.svg";
import pd2 from "../../assets/chat/ProfilePic2.svg";

export const Message = () => {
  return (
    <div className=" text-TextWhite flex gap-[30px]">
      <img src={pd1} className="rounded-full max-h-[71px] max-w-[71px]" />
      {/* <img src={pd2}/> */}
      <div className="bg-bg border-[1px] p-[16px]  rounded-[10px] flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <div className="font-lato font-bold text-[20px]">ChatBot</div>
          <div className="font-lato font-semibold text-[14px]"> 12:05</div>
        </div>
        <div>
        How may I help You today?
        </div>
      </div>
    </div>
  );
};
