import React from "react";
import img from '../../assets/get-blood.png'

const GetBloodProcedure = () => {
  return (
    <div className="bg-white py-2 px-6 lg:px-20">
      <h2 className="text-center text-2xl lg:text-4xl font-bold">
        How to get Blood?
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-14 lg:space-y-0 lg:space-x-10">
      <div className=" flex justify-center -mt-8 w-full lg:hidden">
       <img src={img} alt="" />
      </div>
        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white rounded-full border-2 border-black flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
            <span className="text-black font-bold text-lg">1</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 w-56 h-56 flex items-center justify-center">
            <img
              src="/path/to/icon.svg" // Replace with your icon
              alt="Step Icon"
              className="w-16 h-16"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col gap-12">
                {/* Heartline */}
      <div className="hidden lg:flex lg:justify-center lg:w-full">
       <img className="w-full" src={img} alt="" />
      </div>
      
        {/* Step 2 */}
        <div className="relative flex flex-col items-center text-center">       
          <div className="w-20 h-20 bg-white rounded-full border-2 border-black flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
            <span className="text-black font-bold text-lg">2</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 w-56 h-56 flex items-center justify-center">
            <img
              src="/path/to/icon.svg" // Replace with your icon
              alt="Step Icon"
              className="w-16 h-16"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        </div>
        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white rounded-full border-2 border-black flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
            <span className="text-black font-bold text-lg">3</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 w-56 h-56 flex items-center justify-center">
            <img
              src="/path/to/icon.svg" // Replace with your icon
              alt="Step Icon"
              className="w-16 h-16"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
   
    </div>
  );
};

export default GetBloodProcedure;
