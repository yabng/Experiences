import React from "react";
import back from "../assets/hback.jpg";
export const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={back}
        alt=""
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 ">
        <p>All Inclusive</p>
        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches & Getways</h1>
        <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          consectetur voluptatibus rerum eveniet distinctio quam odit. Aliquam
          quae sed illo nisi dolorum rerum, doloremque, fugiat nostrum, velit
          accusantium exercitationem dolore!
        </p>
        <button className="bg-white text-black">Reserv Now</button>
        </div>
      </div>
    </div>
  );
};
