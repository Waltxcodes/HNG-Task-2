import React from 'react';
import star from "../assets/star.png";
import motor from "../assets/motor.png";
import shield from "../assets/shield.png";
// import cabinet from "../assets/cabinet.svg";
// import fancy from "../assets/fancyChair.svg";
// import sofa from "../assets/sofa.svg";
// import wardrobe from "../assets/wardrobe.svg";
// import comfy from "../assets/comfyChair.svg";
// import cuddler from "../assets/cuddlerChair.svg";
import threestar from "../assets/threeStar.svg";
import fourstar from "../assets/fourStar.svg";
import fivestar from "../assets/fiveStar.svg";
import slider from "../assets/slider.svg";
import { useState, useEffect } from 'react';
const fetchData = async (setData) => {
  const organization_id = "9ac965a38dd842418c3b480dd717a271";
  const Appid = "6Q7DU3UE1K5A2RM";
  const Apikey = "d9357b345a634cc7a8fe28db0504fd5d20240713222012520738";

  const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${organization_id}&size=10&Appid=${Appid}&Apikey=${Apikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.items);
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const Body = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(setData);
  }, []);
  
  if (!data) {
    return <div>Loading...</div>;
  }

 



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
          <div className="px-0 py-1 md:px-4 md:py-2 rounded-md border border-black text-center">
            <p>New Arrivals</p>
          </div>
          <div className="px-2 py-1 md:px-4 md:py-2 rounded-md border border-black text-center">
            <p>Top Rated</p>
          </div>
          <div className="px-2 py- md:px-4 md:py-2 rounded-md border border-black text-center">
            <p>Featured</p>
          </div>
        </div>

        <div className="container mt-10">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {data?.map((item) => (
      <div className="bg-white rounded-md pb-4 shadow-md flex flex-col items-center mx-4">
        {item.photos.length > 0 ? (
          <img
          src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
          alt={item.name}
          
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        ) : (
          <p>No image available</p>
        )}
        <p className="text-center text-xl md:text-2xl font-semibold mt-4">{item.name}</p>
        <img src={fourstar} alt="four-star" className="mt-2" />
        <p className="mt-2">
          {item.current_price.length > 0 && item.current_price[0].NGN
            ? item.current_price[0].NGN[0]
            : 'Not available'}
        </p>
        <p className="bg-brown text-white py-2 px-4 rounded-md mt-4 text-center font-semibold" style={{ backgroundColor: '#8B4513' }}>
          Add To Cart
        </p>
      </div>
    ))}
  </div>
</div>
</div>
    </>
  )
}

export default Body;







































