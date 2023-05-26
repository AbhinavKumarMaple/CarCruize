import React from 'react'
import Team from './Team';
import MeetTeam from '../About/Assets/MeetTeam.png'


const people = [
    {
      name: "Alice",
      role: "Software Engineer",
      description:
        "Alice is a full-stack developer with 5 years of experience building web applications using React and Node.js.",
      picture:
        "https://images.pexels.com/photos/11605351/pexels-photo-11605351.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Bob",
      role: "Product Manager",
      description:
        "Bob is responsible for defining the product vision and roadmap, and works closely with the development team to prioritize features and ensure timely delivery.",
      picture:
        "https://images.pexels.com/photos/8770928/pexels-photo-8770928.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Charlie",
      role: "UX Designer",
      description:
        "Charlie specializes in creating intuitive and visually appealing user interfaces. He has experience with wireframing, prototyping, and user testing.",
      picture:
        "https://images.pexels.com/photos/12098225/pexels-photo-12098225.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];
export const MeetOurTeam = () => {
  return (
    <div className='h-screen bg-no-repeat bg-cover justify-center flex flex-col' style={{backgroundImage: `url(${MeetTeam})`}}>
        <div className="text-white text-center py-7  text-6xl font-bold">
        MEET OUR TEAM
      </div>
      <div className="flex justify-around">
        {people.map((e, index) => (
          <Team
            picture={e.picture}
            role={e.role}
            description={e.description}
            name={e.name}
            index={index}
          />
        ))}
      </div>
        
    </div>
  )
}
