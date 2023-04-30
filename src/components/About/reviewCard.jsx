import { AiFillStar } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ picture, title, paragraph, location, date, rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div>
      <div className="relative">
        <div className="absolute  -top-14 w-full flex justify-center">
          <div
            className="bg-white w-40 flex bg-cover bg-center   rounded-xl  h-28"
            style={{ backgroundImage: `url(${picture})` }}
          ></div>
        </div>
        <div className="bg-stone-400 bg-opacity-30 w-72 pt-16 rounded-xl h-80 ">
          <div className="flex justify-center gap-3 ">
            {Array.from({ length: 5 }).map((_, index) => {
              const isFilled = index < roundedRating;
              return isFilled ? (
                <FaStar key={index} color="yellow" className="stroke-1 " />
              ) : (
                <FaRegStar key={index} color="gray" />
              );
            })}
          </div>
          <div className="flex flex-col gap-12 items-center">
            <div className="font-bold text-xl py-">{title}</div>
            <div className="text-center ">
              <h1>{paragraph}</h1>
            </div>
            <div className="flex flex-row justify-around w-full">
              <div className="text-xs">{location}</div>
              <div className="text-xs">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
