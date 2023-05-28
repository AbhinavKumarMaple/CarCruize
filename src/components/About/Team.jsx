import React from "react";
const Team = ({ picture, role, name, description, index }) => {
  return (


            <div className=" flex flex-col items-center "  >
                
              <div
                className="w-60 h-60 bg-cover rounded-2xl"  
                style={{ backgroundImage: `url(${picture})` }}
              ></div>
              <h1 className="text-center text-white text-2xl font-bold">{name}</h1>
              <h1 className="text-center text-white text-lg font-semibold">
                {role}
              </h1>
              <div className="text-center max-w-xs text-white  text-xs">

              <p >{description}</p>
              </div>
              
            </div>
         


  );
};
export default Team;
