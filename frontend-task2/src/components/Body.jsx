import React from 'react';
import star from "../assets/star.png";
import motor from "../assets/motor.png";
import shield from "../assets/shield.png";
import cabinet from "../assets/cabinet.svg";
import fancy from "../assets/fancyChair.svg";
import sofa from "../assets/sofa.svg";
import wardrobe from "../assets/wardrobe.svg";
import comfy from "../assets/comfyChair.svg";
import cuddler from "../assets/cuddlerChair.svg";
import threestar from "../assets/threeStar.svg";
import fourstar from "../assets/fourStar.svg";
import fivestar from "../assets/fiveStar.svg";
import slider from "../assets/slider.svg";

const Body = () => {
  return (
    <>
      <div className="body bg-white" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly space-y-6 md:space-y-0 md:space-x-10 lg:space-x-40 pt-6">
          <div className="bg-white px-8 md:px-20 py-4 shadow-md font-semibold flex items-center icons">
            <img src={star} alt="star-image" className="w-6 mr-2" />
            <p>Quality</p>
          </div>
          <div className="bg-white px-8 md:px-20 py-4 shadow-md font-semibold flex items-center">
            <img src={shield} alt="shield-image" className="w-6 mr-2" />
            <p>Longevity</p>
          </div>
          <div className="bg-white px-8 md:px-16 py-4 shadow-md font-semibold flex items-center">
            <img src={motor} alt="motor-image" className="w-6 mr-2" />
            <p>Fast Delivery</p>
          </div>
        </div>

        <p className="text-2xl md:text-3xl font-bold text-center mt-8">Our Products</p>

        <div className="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-0 md:space-x-4 lg:space-x-10 mt-6">
          <div className="px-0 py-1 md:px-4 md:py-2 rounded-md border border-black text-center w-fit mx-auto">
            <p>New Arrivals</p>
          </div>
          <div className="px-2 py-1 md:px-4 md:py-2 rounded-md border border-black text-center w-fit mx-auto">
            <p>Top Rated</p>
          </div>
          <div className="px-2 py- md:px-4 md:py-2 rounded-md border border-black text-center w-fit mx-auto">
            <p>Featured</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 md:space-x-6 lg:space-x-10 mt-10 container">
          <div className="bg-white rounded-md pb-4 shadow-md flex flex-col items-center mx-4 md:mx-0">
            <img src={cabinet} alt="cabinet-pic" className="w-full h-auto" />
            <p className="text-center text-xl md:text-2xl font-semibold mt-4">Cabinet</p>
            <img src={fourstar} alt="four-star" className="mt-2" />
            <p className="mt-2">$150</p>
            <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>Add To Cart</p>
          </div>
          <div className="bg-white rounded-md shadow-md flex flex-col items-center mx-4 md:mx-0 ">
            <img src={fancy} alt="fancy-chair" className="w-full h-auto" />
            <p className="text-center text-xl md:text-2xl font-semibold mt-4">Fancy Chair</p>
            <img src={fivestar} alt="five-star" className="mt-2" />
            <p className="mt-2">$130</p>
            <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>Add To Cart</p>
          </div>
          <div className="bg-white rounded-md shadow-md flex flex-col items-center mx-4 md:mx-0 pb-9 md:pb-0">
            <img src={sofa} alt="sofa" className="w-full h-auto" />
            <p className="text-center text-xl md:text-2xl font-semibold mt-4">Sofa</p>
            <img src={threestar} alt="three-star" className="mt-2" />
            <p className="mt-2">$250</p>
            <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>Add To Cart</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 md:space-x-6 lg:space-x-10 mt-10">
          <div className="bg-white rounded-md pb-4 shadow-md flex flex-col items-center mx-4 md:mx-0   ">
            <img src={wardrobe} alt="wardrobe" className="w-full h-auto" />
            <p className="text-center text-xl md:text-2xl font-semibold mt-4">Wardrobe</p>
            <img src={fourstar} alt="four-star" className="mt-2" />
            <p className="mt-2">$90</p>
            <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>Add To Cart</p>
          </div>
          <div className="bg-white rounded-md shadow-md flex flex-col items-center mx-4 md:mx-0 pb-10 md:pb-0">
            <img src={comfy} alt="comfy-chair" className="w-full h-auto" />
            <p className="text-center text-xl md:text-2xl font-semibold mt-4">Comfy Chair</p>
            <img src={fivestar} alt="five-star" className="mt-2" />
            <p className="mt-2">$100</p>
            <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>Add To Cart</p>
          </div>
          <div className="bg-white rounded-md shadow-md flex flex-col items-center mx-4 md:mx-0 pb-9 md:pb-0 mb-7 md:mb-0">
            <img src={cuddler} alt="cuddler-chair" className="w-full h-auto " />
            <p className="text-center text-xl md:text-2xl font-semibold mt-0 md:mt-4">Cuddler Chair</p>
            <img src={fourstar} alt="four-star" className="mt-2" />
            <p className="mt-2">$200</p>
            <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>Add To Cart</p>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center mt-7">
          <img src={slider} alt="slider-pics" className="w-full md:w-auto" />
        </div>
      </div>
    </>
  )
}

export default Body;
