import React from 'react';
import backgroundImage from '../assets/7725237f-c064-4c85-b9bb-2be11dfeae40.jpg';
import Logo from '../assets/logo.svg'; 
import '../App.css';

const NavSec = () => {
  return (
    <>
      <div className='relative'>
        <div
          className="bg-cover bg-center h-full w-full flex flex-col md:flex-row justify-between items-start px-4"
          style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '700px' }}
        >
          <div ><img src={Logo} alt="woody logo" className="mt-4 ml-4 md:mt-1" /></div>
          <nav className="text-white flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-20 mt-8 md:mr-11 text-lg font-semibold">
            <a href="" className='mt-1'>Home</a>
            <a href="" className='mt-1 underline'>Products</a>
            <a href="/cart" className='mt-1 hover:underline'>Cart</a>
            <a href="" className='mt-1'>Blog</a>
            <a href="" className='mt-1'>Contact Us</a>
            <a href="" className='bg-brown-500 rounded-md px-6 md:px-9 py-2' style={{ backgroundColor: '#8B4513' }}>Shop Now</a>
          </nav>
        </div>
        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4'>
          <h2 className="font-bold text-2xl md:text-4xl mt-4">Quality, Comfortable And Affordable Furniture Delivered To Your Doorstep.</h2>
          <p className='mt-4 md:mt-8'>Select and Purchase A Preferred Furniture of Your Choice Without Any Hassle.</p>
          <br />
          <a href="" className='font-bold mt-4 md:mt-11 bg-brown-500 rounded-md px-6 md:px-9 py-2' style={{ backgroundColor: '#8B4513' }}>Shop Now</a>
        </div>
      </div>
    </>
  );
}

export default NavSec;
