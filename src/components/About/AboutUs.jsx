import ReviewCard from "./reviewCard";
import AboutUsBg from '../About/Assets/AboutUsBg.png'
const AboutUs = () => {


    
    const CardInfo = [
      {
        picture:
          "https://images.pexels.com/photos/15697747/pexels-photo-15697747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Canyon",
        paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Dhanbad",
        date: "July 15th, 2022",
        rating: 1.5,
      },
      {
        picture:
          "https://images.pexels.com/photos/7402646/pexels-photo-7402646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Hiking",
        paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Dhanbad",
        date: "September 1st, 2022",
        rating: 4.8,
      },
      {
        picture:
          "https://images.pexels.com/photos/12758953/pexels-photo-12758953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Snorkeling",
        paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Dhanbad",
        date: "December 12th, 2022",
        rating: 4.7,
      },
    ];
  return (
    <div className=" h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url(${AboutUsBg})`}}>
      <div className="">
        <div className="">
          <div className="text-center">
            <h1 className=" text-white text-[70px] font-extrabold font-Montserrat py-7">
              ABOUT US
            </h1>
          </div>
          <div className="text-center items-center flex justify-center">
            <div className="justify-center max-w-[1123px] ">
              <p className="font-bolt font-lato text-[20px]   text-white">
              CARCRUIZE is a revolutionary brand that takes car maintenance to the next level! With a commitment to providing a hassle-free and reliable approach, Carcruize offers a complete solution for all your car care needs. Founded in 2022 by the brilliant mechanical engineer, Mr. Abhishek Shubham, Carcruize is headquartered in Dhanbad, Jharkhand. Here, the team uses its expertise and passion for cars to ensure that each car is given the utmost care it needs.
              </p>
            </div>
          </div>
          <div className="xl:flex justify-between py-36 px-20">
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
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
