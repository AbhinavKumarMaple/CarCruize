import * as Popover from '@radix-ui/react-popover';
import go from "../../assets/ServiceHistory/go.svg";
import Action from "../../assets/ServiceHistory/Action.svg";
import * as Separator from '@radix-ui/react-separator';
const ServiceHistory = () => {
  const ServiceHistory = [
    {
      Date: "10 Dec, 2022",
      CarName: "Honda City",
      Number: "Dl 2222",
      ServiceDetail: "Standard ServiceInsurance Claim",
      Status: "Completed",
      Total: 4999,
    },
    {
      Date: "10 Dec, 2022",
      CarName: "Honda City",
      Number: "Dl 2222",
      ServiceDetail: "Ac Repair",
      Status: "Completed",
      Total: 4999,
    },
    {
      Date: "10 Dec, 2022",
      CarName: "Honda City",
      Number: "Dl 2222",
      ServiceDetail: "Doorstep Accidental Inspection",
      Status: "Completed",
      Total: 4999,
    },
    {
      Date: "10 Dec, 2022",
      CarName: "Honda City",
      Number: "Dl 2222",
      ServiceDetail: "Routine CheckUp ",
      Status: "Completed",
      Total: 4999,
    },
  ];
  return (
    <div className="bg-second p-[54px] h-screen ml-3">
      <div className="flex items-center mb-[48px]">
        <img src={go} alt="" className="w-[39px] h-[39px] rotate-180" />
        <h1 className=" pl-[26px]  font-lato text-TextWhite font-extrabold text-[48px]">
          Service History
        </h1>
      </div>
      <span className="flex gap-[18px] font-lato font-bold text-[20px] mb-[24px]">
        <div className="bg-pila w-[168px] text-center rounded-[20px] px-[44px]">
          Date
        </div>
        <div className="  bg-pila w-[244px] text-center rounded-[20px]">
          Car Name Or Number
        </div>
        <h1 className="bg-pila w-[597px] text-center rounded-[20px] px-[44px]">
          Service Detail
        </h1>
        <div className="bg-pila w-[192px] text-center rounded-[20px] px-[44px]">
          Status
        </div>
        <h1 className="bg-pila w-[192px] text-center rounded-[20px] px-[44px]">
          Total
        </h1>
        <h1 className="bg-pila w-[168px] text-center rounded-[20px] px-[44px]">
          Action
        </h1>
      </span>
      <div>
        {ServiceHistory.map(
          ({ Date, CarName, Number, ServiceDetail, Status, Total }, index) => (
            <div>
              <div className="gap-[18px]  justify-center items-center text-TextWhite font-lato font-bold text-[20px] flex">
                <h1 className="w-[168px]  rounded-[20px] border items-center flex justify-center">
                  {Date}
                </h1>
                <div className="w-[244px] font-lato font-light  rounded-[20px] px-[44px] border">
                  <h1>{CarName}</h1>
                  <h1>{Number}</h1>
                </div>
                <h1 className=" w-[597px] items-center flex justify-center rounded-[20px] px-[44px] border">
                  {ServiceDetail}
                </h1>
                <h1 className="w-[192px]   items-center flex justify-center rounded-[20px] px-[44px] border">
                  {Status}
                </h1>
                <h1 className="w-[192px]   items-center flex justify-center rounded-[20px] px-[44px] border">
                  {Total}
                </h1>
                <div className="w-[168px] rounded-[20px] items-center flex justify-center">
                <Popover.Root>
    <Popover.Trigger asChild>
      <button  aria-label="Update dimensions">
      <div className='flex rotate-90 text-[45px] justify-center items-center ml-6'>...</div>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="" sideOffset={0}>
        <div className=' w-[260px] text-prime bg-[#888888] rounded-[10px] font-lato font-semibold text-[25.58px]  '>
          <p className="   hover:bg-pila hover:rounded-[10px]   px-[20px]" >
            invoice
          </p>
          <Separator.Root className="bg-[#4C4C4C] h-[1px] mx-2 "
        decorative
        orientation="vertical"/>
        <p className="hover:bg-pila hover:rounded-[10px]   px-[20px]" >
            job Card
          </p>
          <Separator.Root className="bg-[#4C4C4C] h-[1px] px-2"
        decorative
        orientation="vertical"/>
          <p className=" hover:bg-pila hover:rounded-[10px] flex self-center pl-[20px]" >
            Car's Health Report
          </p>
          <Separator.Root className="bg-[#4C4C4C] h-[1px] px-2" 
        decorative
        orientation="vertical"/>
          <p className=" hover:bg-pila hover:rounded-[10px] px-[20px]" >
            Repeat Service
          </p>
        </div>
        
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
                  </div>
              </div>
              <div
                className={`w-full h-[2px] bg-bg my-[24px] ${
                  index === ServiceHistory.length - 1 ? "hidden" : ""
                }`}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceHistory;
