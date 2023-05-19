
import pd1 from "../../assets/chat/ProfilePic2.svg";

export const MessageClient = () => {
  return (
    <div className=" text-TextWhite flex gap-[30px]">
   
      <div className="bg-bg border-[1px] p-[16px]  rounded-[10px] flex flex-col gap-4 ">
        <div className="flex justify-between items-center ">
          <div className="font-lato font-bold text-[20px]">Akshat Gruta</div>
          <div className="font-lato font-semibold text-[14px]"> 12:10</div>
        </div>
        <div>
          I don’t know what’s wrong with my car. How can I get it checked?
        </div>
      </div>
      <img src={pd1} className="rounded-full max-h-[71px] max-w-[71px]" />
    </div>
  );
};
