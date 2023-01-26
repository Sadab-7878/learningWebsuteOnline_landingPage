import React from "react";
import I1 from "../assets/keyp1/icon1.png";
import I2 from "../assets/keyp1/icon2.png";


const keyp = () => {

    const elements = [
        {
            photo1: "keyp/p1.png",
            name: "Christian Howard",
            photo2: "keyp/s1.svg",
            category: "Italian teacher"
        },
    
        {
            photo1: "keyp/p2.png",
            name: "Sandra Wilson",
            photo2: "keyp/s2.svg",
            category: "Spanish teacher"
        },
    
        {
            photo1: "keyp/p3.png",
            name: "Jimmy Cooper",
            photo2: "keyp/s3.svg",
            category: "English teacher"
        },
    ]

    
  return (
    <div className="max-w-[1240px] mx-auto">
     
        <div>
          <p className="text-xs text-slate-400 font-bold">KEY PERSONS</p>

          <div className="flex justify-between">
            <div>
              <p className="text-3xl">Meet our teachers</p>
            </div>

            <div className="flex gap-5">
              <img src={I1} alt="" className="h-8" />
              <img src={I2} alt="" className="h-8" />
            </div>
          
        </div>
      </div>
      <div className="mt-14 flex justify-between">

        {elements.map((element, i) => {
            return(
                <div key={i} className=" h-[400px] w-[300px] flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={element.photo1} alt="" className="h-[300px] rounded-3xl" />
          </div>

          <div className="px-4 mt-4">
            <p className="font-semibold">{element.name}</p>

            <div className="flex flex-row pt-2">
                <img src={element.photo2} alt="" className="h-5"/>

                    <div className="flex flex-row items-end">

                <p className="text-xs text-slate-400 font-semibold">{element.category}</p>
                    </div>
            </div>
          </div>
        </div>
            );
        })}
        
      </div>
    </div>
  );
};

export default keyp;
