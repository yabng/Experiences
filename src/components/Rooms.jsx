import React from "react";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold" >Fine Interior Rooms</h3>
        <p className="-4pt ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          eveniet temporibus, ut nostrum beatae modi, ipsum voluptatum ipsam
          dolorem veritatis maiores? Sunt aspernatur perferendis magni
          voluptatum culpa error nemo exercitationem?
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={r1} alt="" />
        <img className=" row-span-2  object-cover w-full h-full" src={r2} alt="" />
        <img className="object-cover w-full h-full" src={r3} alt="" />
      </div>
    </div>
  );
};

export default Rooms;
