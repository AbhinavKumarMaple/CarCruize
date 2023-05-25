import pd1 from "../../assets/chat/ProfilePic1.svg";
import pd2 from "../../assets/chat/ProfilePic2.svg";

export const Message = ({ Msg, name, time }) => {
  return (
    <div className="text-TextWhite flex gap-[30px] items-center " style={{ overflowWrap: 'break-word' }}>
      <img src={pd1} className="rounded-full max-h-[71px] max-w-[71px] bg-pila" />
      <div className="bg-bg border-[1px] p-[16px] rounded-[10px] flex flex-col gap-4 w-full  " >
        <div className="flex justify-between items-center">
          <div className="font-lato font-bold text-[20px]">{name}</div>
          <div className="font-lato font-semibold text-[14px]">{time}</div>
        </div>
        <div >
          {Msg}
        </div>
      </div>
    </div>
  );
};
