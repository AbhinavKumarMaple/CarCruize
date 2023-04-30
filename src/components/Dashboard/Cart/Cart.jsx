import Wallet from "../../assets/asset/Wallet.png";
import ManCart from "../../assets/asset/ManCart.svg";
import Ad from "../../assets/asset/Ad.png";
import SAVE from "../../assets/asset/SAVE.png";
import DENTING from "../../assets/asset/DENTING.png";
const Cart = () => {
  return (
    <div className="relative  px-[29px]">
      <div className="absolute right-0 top-0  overflow-hidden">
        <img src={Wallet} className="rounded-[10px]  m-[16px]" />
      </div>
      <div className="flex  pt-[43px] justify-center">
        <div className=" ">
          <img src={ManCart} className="w-[193px] h-[165px] mx-auto" />
          <div className="font-lato pt-[12px] flex flex-wrap font-bold text-[32px] text-TextWhite">
            Your Cart is  <span className="text-pila">Empty!!</span>
          </div>
        </div>
      </div>

      <div className="pt-[54px] ">
        <img src={Ad} className="" />
      </div>

      <div className="flex justify-between items-center mt-[51px]">
        <button className="w-[174px]  h-[52px] bg-gradient-to-r font-lato font-extrabold text-TextWhite  from-[#E63E70] to-[#C01F4E] rounded-[10px] ">
          Explore Offers
        </button>
        <div className="w-[723px] h-[2px] bg-bg" />
      </div>
      <div className=" ">
        <div className="flex mx-auto pt-[29px]  max-w-[824px] justify-between">
          <img src={SAVE} />
          <img src={DENTING} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
