import React from "react";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import i5 from "../assets/5.jpg";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img className=" row-span-3 object-cover w-full h-full p-2" src={i1} alt="/" />
        <img className=" row-span-2 object-cover w-full h-full p-2" src={i2} alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src={i3} alt="/" />
        <img className=" row-span-3 object-cover w-full h-full p-2" src={i4} alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src={i5} alt="/" />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ratione reiciendis{" "}
        </p>
        <p className="pb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vero
          numquam, modi voluptas saepe optio magnam, commodi repellat ad,
          dolores quasi omnis eos beatae? Nesciunt delectus corporis excepturi
          sequi quae!
        </p>
        <div>
            <button  className="border-black mr-4 hover:shadow-xl">Lear More</button>
            <button className="bg-black text-white border-black hover:shadow-xl">Book your trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
