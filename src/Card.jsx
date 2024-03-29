import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Card = () => {
  return (
    <div class=" w-max  h-max  flex bg-white border border-black m-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div  className="p-2">
        <img
          class=" ml-2 rounded-full mt-8 w-20"
          src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
          alt="product image"
        />
      </div>
      <div class="px-5 flex flex-col mt-8 ">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Swarnim Chandve
          </h5>
          <p className="pt-2">Developer</p>
        
        <div class="flex justify-around mt-4 mb-3  ">
        <CiLinkedin  size='1.8rem' />
        <FaSquareXTwitter size='1.8rem' />
        <FaInstagram size='1.8rem'/>  
        </div>
    
      </div>
    </div>
  );
};

export default Card;
