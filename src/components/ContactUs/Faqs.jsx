import React from "react";

const Faqs = () => {
  const Faqs = [
    "How to book a car service with CarCruize?",
    "Do I have to pay before the service?",
    "Where can I book a car service with CarCruize?",
    "What if I am not available to drop my car?",
    "What is CarCruize?",
    "How can you offer upto 40% savings on services?",
    "Why should I choose CarCruize?",
    "How is CarCruizedifferent from other service platforms out there?",
    "What if my car requires parts?",
    "What are OEM or OES spare parts?",
  ];

  return (
    <div>
      {Faqs.map((item) => (
        <div className="text-white mx-5 ">
          <p className="pb-2">{item}</p>
          <hr className=" text-slate-400 py-1"></hr>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
