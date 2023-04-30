import { MeetOurTeam } from "./MeetOurTeam";
import { WhtWeDo } from "./WhtWeDo";
import ReviewCard from "./reviewCard";

const CardInfo = [
  {
    picture:
      "https://images.pexels.com/photos/15697747/pexels-photo-15697747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Canyon",
    paragraph:
      "The Grand Canyon is one of the most breathtaking natural wonders in the world...",
    location: "Dhanbad",
    date: "July 15th, 2022",
    rating: 1.5,
  },
  {
    picture:
      "https://images.pexels.com/photos/7402646/pexels-photo-7402646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Hiking",
    paragraph:
      "Yosemite National Park is a breathtakingly beautiful park located in California... ",
    location: "Dhanbad",
    date: "September 1st, 2022",
    rating: 4.8,
  },
  {
    picture:
      "https://images.pexels.com/photos/12758953/pexels-photo-12758953.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Snorkeling",
    paragraph:
      "The Great Barrier Reef is the world's largest coral reef system, located off the...",
    location: "Dhanbad",
    date: "December 12th, 2022",
    rating: 4.7,
  },
];

export const About = () => {
  return (
    <div className="bg-slate-500">
      <div className=" bg-black ">
        <div className="">
          <div className="text-center">
            <h1 className="lg:text-5xl text-white text-6xl font-bold py-7">
              ABOUT US
            </h1>
          </div>
          <div className="text-center  md:mx-16 mx-3 ">
            <div className=" flex justify-center">
              <p className="font-semibold   text-white max-w-6xl">
                Lorem ipsum, Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Even dolor sit amet consectetur adipisicing elit. Eveniet
                alias corrupti autem minima nulla sed nobis? Fuga voluptatum
                odio aliquid unde non, quo aut nihil adipisci modi ea velit
                corrupti nesciunt numquam, id, excepturi ad? Sint, quod
                expedita, itaque esse reiciendis asperiores eius error et rem
                aliquam quisquam dolore qui?
              </p>
            </div>
            <div className="xl:flex  justify-between py-36 px-20">
              {CardInfo.map(
                (
                  { picture, title, paragraph, location, date, rating },
                  index
                ) => (
                  <ReviewCard
                    picture={picture}
                    title={title}
                    paragraph={paragraph}
                    location={location}
                    date={date}
                    rating={rating}
                  />
                )
              )}
            </div>
            <WhtWeDo />
            <MeetOurTeam/>
          </div>
        </div>
      </div>
    </div>
  );
};
