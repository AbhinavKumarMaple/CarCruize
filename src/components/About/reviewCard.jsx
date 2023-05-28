import { AiFillStar } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ picture, title, paragraph, location, date, rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div>
      <div className="relative text-TextWhite">
        <div className="absolute  -top-[77px] w-full flex justify-center">
          <div
            className="bg-white w-[240px] flex bg-cover bg-center   rounded-xl  h-[149px]"
            style={{ backgroundImage: `url(${picture})` }}
          ></div>
        </div>
        <div className="bg-TextWhite mt-[15px] bg-opacity-40 w-[340px]  rounded-xl h-[340px] ">
          <div className="flex justify-center gap-3 pt-[98px]">
            {Array.from({ length: 5 }).map((_, index) => {
              const isFilled = index < roundedRating;
              return isFilled ? (
                <FaStar
                  key={index}
                  color="yellow"
                  className="stroke-1 w-[20px] "
                />
              ) : (
                <FaRegStar key={index} color="gray" />
              );
            })}
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="font-bold font-Montserrat text-[24px] pt-[18px]">
              {title}
            </div>
            <div className="text-center font-lato font-semibold text-[14px] pt-[12px]">
              <h1>{paragraph}</h1>
            </div>
            <div className="flex flex-row justify-between px-3 w-full mt-[26px] ">
              <div className="text-[8px] font-lato">{location}</div>
              <div className="text-[8px] font-lato">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
