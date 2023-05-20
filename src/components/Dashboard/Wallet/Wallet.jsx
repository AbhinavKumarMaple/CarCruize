import React from "react";
import WalletImg from "../../assets/Dashboard/WalletImg.png";
import SmallCart from "../../assets/Dashboard/SmallCart.svg";
import AD from "../../assets/asset/AD.png";
import RecomendedServices from "../../assets/Dashboard/RecomendedServices.svg";
const Wallet = () => {
  const transactions = [
    { index: 1, description: "Login bonus", amount: 1000.0 },
    { index: 2, description: "Online payment", amount: -500 },
    { index: 3, description: "Deposite", amount: 5000 },
    { index: 1, description: "Login bonus", amount: 1000.0 },
    { index: 2, description: "Online payment", amount: -500 },
    { index: 3, description: "Deposite", amount: 5000 },
  ];

  const RecomendedService = [
    {
      Service: "Deep All Round Spa",
      OriginalPrice: 1000,
      AfterDiscount: 800,
    },
    {
      Service: "Standerd Car Service",
      OriginalPrice: 1000,
      AfterDiscount: 800,
    },
  ];

  return (
    <div className="px-[36px]">
      <h1 className="text-white font-lato font-bold text-[24px] pt-[29px] pb-[12px] flex max-w-[700px] justify-end">
        Wallet transictions
      </h1>
      <div className="flex justify-between">
        <div
          className="h-[239px] w-[392px] flex flex-col justify-center text-center"
          style={{ backgroundImage: `url(${WalletImg})` }}
        >
          <div className="w-[361px] text-white">
            <h1 className="font-bold font-Poppins text-[48px]">1,000</h1>
            <h1 className="font-bold font-lato text-[32px]">Cash</h1>
            <h1 className="mt-3 cursor-pointer font-Montserrat text-[15px]">
              + Add Cash
            </h1>
          </div>
        </div>
        <div className="text-white font-lato font-bold text-[24px]">
          <div className="w-[425px] h-[239px] ">
            <div className="w-full h-full bg-black bg-fixed  whitespace-nowrap overflow-auto scrollbar-hide rounded-[10px]">
              {transactions.map(({ index, description, amount }) => (
                <div className="px-[14px]">
                  <div className="flex justify-between py-[17.5px]">
                    <h1 className="px-[14px] font-normal font-Montserrat text-[20px]">
                      {description}
                    </h1>
                    <h1
                      className={`px-[14px] font-normal ${
                        amount < 0 ? "text-red-500" : ""
                      } font-lato text-green-500 text-[20px]`}
                    >
                      {amount}
                    </h1>
                  </div>
                  <div
                    className={`h-[1px] w-full  bg-slate-300 my-[17.5px] ${
                      index === transactions.length ? "hidden" : ""
                    } `}
                  />
                  {console.log(index)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-[26px] mt-[81px] justify-center bg-TextWhite w-full h-[1px] text-center relative">
        <img src={RecomendedServices} className="absolute left-1 -top-6" />
      </div>
      {RecomendedService.map(
        ({ Service, OriginalPrice, AfterDiscount }, index) => (
          <div className="">
            <div className="flex pl-[40px] justify-between items-center ">
              <div className="font-lato font-semibold text-[20px] text-TextWhite">
                {Service}
              </div>
              <div className="flex items-center">
                {" "}
                <div className="flex w-[171px] justify-between items-center text-center ">
                  <h1 className="text-red-500  font-Montserrat text-[24px] font-semibold line-through ">
                    ${OriginalPrice}
                  </h1>
                  <h1 className="font-Montserrat text-[#41B826] text-[30px] font-semibold">
                    ${AfterDiscount}
                  </h1>
                </div>{" "}
              </div>
              <button className="flex bg-pila w-[104px] h-[28px] font-lato text-[12px] rounded-md text-center justify-center items-center">
                <img className="mx-2" src={SmallCart} alt="img" />
                Add To Cart
              </button>
            </div>
            <div className="h-[1px] w-full bg-TextWhite my-[26px]" />
          </div>
        )
      )}
      <img src={AD} alt="" className="pt-9" />
    </div>
  );
};

export default Wallet;
