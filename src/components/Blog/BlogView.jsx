import { useLocation, useParams } from "react-router-dom";
import ad1 from "./asset/1.png";
import ad2 from "./asset/2.png";
import ad3 from "./asset/3.png";
import share from "./asset/share.svg";

export default function BlogView() {
  const { id } = useParams();
  const featured = [
    {
      img: ad1,
      date: "27 March 2023",
      views: 23,
      title: `5 Critical Considerations When Buying a Used Car in India/5
        Essential Tips for Buying a Used Car`,
      desc: `Buying a used car can be an excellent way to save money while
        still getting a reliable vehicle...`,

      href: "Link",
    },
    {
      img: ad2,
      date: "27 March 2023",
      views: 23,
      title: `5 Critical Considerations When Buying a Used Car in India/5
          Essential Tips for Buying a Used Car`,
      desc: `Buying a used car can be an excellent way to save money while
          still getting a reliable vehicle...`,
      href: "Link",
    },
    {
      img: ad3,
      date: "27 March 2023",
      views: 23,
      title: `5 Critical Considerations When Buying a Used Car in India/5
          Essential Tips for Buying a Used Car`,
      desc: `Buying a used car can be an excellent way to save money while
          still getting a reliable vehicle...`,
      href: "Link",
    },
  ];
  return (
    <div className="bg-second p-[20px] mx-2">
      <div className="flex flex-col gap-[32px]">
        <div className="flex gap-[40px] text-TextWhite font-Montserrat font-regular text-[22px]">
          <h1>{featured[id - 1].date}</h1>
          <ul className="list-disc">
            <li>
              <h1>0 Views {featured[id - 1].views}</h1>
            </li>
          </ul>
        </div>
        <div className="font-lato font-bold text-[36px] text-TextWhite pb-[19px] flex justify-between">
          <h1 className="">{featured[id - 1].title}</h1>
        </div>

        <div className="border-white hover:border-pila rounded-[10px] p-[35px] border-2">
          <div className="flex flex-col gap-[10px]">
            <img src={featured[id - 1].img} />

            <div className=" flex flex-col font-Montserrat text-TextWhite font-regular text-[24px] gap-[24px]">
              <h1>
                Buying a used car can be an excellent way to save money while
                still getting a reliable vehicle. However, it is important to
                approach the process with caution and diligence. In this
                article, we will discuss some of the most critical things to
                consider when buying a used car in India.
              </h1>
              <h1>
                <span className="font-semibold">Check the car's condition</span>
                : The first and most important thing to do when buying a used
                car is to thoroughly check its condition. This can be
                challenging if you do not have experience with cars, so it is
                advisable to bring a trusted mechanic along with you for the
                inspection. Here are some of the things to look out for when
                inspecting a used car's condition:
              </h1>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">Interior </span>: Check the
                  upholstery on the front and back seats for any signs of wear
                  or tear, stains, or other damage. If the car has electronic
                  equipment, such as a music system or a monitor, try them out
                  to ensure they are in good working order.
                </li>
                <li>
                  <span className="font-semibold">Exterior</span> : Take a close
                  look at the car's exterior from all angles, paying particular
                  attention to any rust or paint damage. Even small scratches or
                  dents can indicate that the car has been involved in a
                  collision.
                </li>
                <li>
                  <span className="font-semibold">Framing</span> : Check the
                  car's framing to ensure that it is level and that there is
                  nothing loose around the undercarriage.
                </li>
                <li>
                  <span className="font-semibold">Tires</span> : Examine the
                  tires for signs of uneven wear and tear, which can lead to
                  alignment issues and cause the car to drift while driving.
                </li>
                <li>
                  <span className="font-semibold">Engine</span> : Inspect the
                  engine carefully for any leaks, corrosion, or cracked tubes.
                  Use a dipstick to check the oil and transmission fluid levels.
                </li>
                <li>
                  <span className="font-semibold">Mileage</span> : Discuss the
                  car's mileage with the seller in detail, as this can indicate
                  deeper problems with the car.
                </li>
                <li>
                  <span className="font-semibold">Test Drive</span> : Take the
                  car for a test drive, paying particular attention to the
                  brakes, acceleration, suspension, and maneuverability.
                </li>
              </ul>
              <h1>
                <span className="font-semibold">Maintenance Records </span>: It
                is important to ask the seller for the car's maintenance
                records. Some owners keep meticulous records of servicing and
                repairs, while others may not have any records at all. If you
                receive detailed maintenance records, you can use them to inform
                your own maintenance schedule. If you only receive verbal
                history, you can assess the extent to which the car needs
                servicing.
              </h1>
              <h1>
                <span className="font-semibold">
                  Check Registration Certificate{" "}
                </span>
                : The registration certificate provides important information
                about the car, such as the owner's name, engine number, chassis
                number, and other details. Verify that the certificate is
                original and not a duplicate (marked DRC). If the car was
                previously registered in another state, it will need to be
                registered with the new state's Regional Transport Office (RTO)
                after purchase.
              </h1>
              <h1>
                Other documents that need to be checked include the original
                purchase invoice, insurance policy, road tax receipt, and
                pollution certificate. If the car was financed, you will need to
                obtain form 35 and a NOC from the financing company. Any
                modifications to the engine displacement or colour of the car
                must be specified in the registration certificate.
              </h1>
              <h1>
                <span className="font-semibold">Car Insurance </span>: When
                buying a used car, ensure that the seller transfers the existing
                car insurance policy to your name. If the seller does not do
                this, it becomes your responsibility to transfer the policy.
                Failing to transfer the policy can lead to legal issues if the
                caR is involved in an accident or other incidents. Additionally,
                check the extent of the insurance coverage, whether it is a
                third-party liability policy or a comprehensive one. If you wish
                to enhance the insurance coverage, consider purchasing
                appropriate car insurance add-ons while renewing.
              </h1>
              <h1>
                <span className="font-semibold">
                  Buy From A Reliable Source{" "}
                </span>
                : It is important to buy a used car from a reliable source to
                ensure that you are getting a good deal. You can buy from
                individual sellers, brokers, or companies. However, make sure to
                do your research and check the reputation of the seller before
                making a purchase.
              </h1>
            </div>
            <div className="flex justify-between text-TextWhite">
              <div className="flex gap-[65px] font-Montserrat font-medium text-[24px]">
                <div>{featured[id - 1].views} Views</div>
                <div>0 Comments </div>
              </div>
              <div>asdasd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
