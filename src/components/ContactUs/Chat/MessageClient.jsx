import ProfilePic2 from "../../assets/chat/ProfilePic2.svg";

export const MessageClient = ({ Msg, name, time }) => {
  return (
    <div className=" text-TextWhite flex gap-[30px]">
      <div className="bg-bg w-full  border-[1px] p-[16px] rounded-[10px] flex flex-col gap-4 max-w-[383px]">
        <div className="flex justify-between items-center ">
          <div className="font-lato font-bold text-[20px]">{name}</div>
          <div className="font-lato font-semibold text-[14px]">{time}</div>
        </div>
        <div className="">
          <h1>{Msg}</h1>
        </div>
      </div>
      <img src={ProfilePic2} className="rounded-full w-[71px]" />
    </div>
  );
};
