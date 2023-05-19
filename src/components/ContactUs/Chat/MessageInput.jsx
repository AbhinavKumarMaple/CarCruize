import ShareArrow from "../../assets/chat/ShareArrow.svg"
import Mic from "../../assets/chat/LineMic.svg"
import Clip from "../../assets/chat/Clip.svg"

export const MessageInput = () => {
  return (
    <div className='px-[27px]  max-h-[66px] h-[66px] flex border-2 rounded-[10px] overflow-hidden '>
        
    <input placeholder='How may i help you?' className='font-lato text-[20px]  w-full  text-TextWhite   flex justify-center items-center h-full bg-second focus:outline-none focus:border-transparent pr-3 '/>
    <div className='flex gap-3 justify-center items-center'>
    <div className=''><img src={ShareArrow}/></div>
    <div className=''><img src={Mic}/></div>
    <div className=''><img src={Clip}/></div>
    </div>
</div>
  )
}
