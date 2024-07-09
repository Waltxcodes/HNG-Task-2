import React, { useState } from 'react';
import backgroundImage from '../assets/7725237f-c064-4c85-b9bb-2be11dfeae40.jpg';
import Logo from '../assets/logo.svg'; 
import '../App.css';

const NavSec = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='relative'>
      <div
        className="bg-cover bg-center h-full w-full flex flex-col md:flex-row justify-between items-start px-4"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '700px' }}
      >
        <div>
          <img src={Logo} alt="woody logo" className="mt-4 ml-4 md:mt-1" />
        </div>
        <div className="md:hidden absolute top-4 right-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className={`hidden md:flex text-white flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-20 mt-8 md:mr-11 text-lg font-semibold`}>
          <a href="" className='mt-1'>Home</a>
          <a href="" className='mt-1 underline'>Products</a>
          <a href="/cart" className='mt-1 hover:underline'>Cart</a>
          <a href="" className='mt-1'>Blog</a>
          <a href="" className='mt-1'>Contact Us</a>
          <a href="" className='bg-brown-500 rounded-md px-6 md:px-9 py-2' style={{ backgroundColor: '#8B4513' }}>Shop Now</a>
        </nav>
      </div>
      <nav className={`md:hidden absolute top-20 left-0 w-full bg-black bg-opacity-75 text-white flex flex-col space-y-4 p-4 text-lg font-semibold ${menuOpen ? 'block' : 'hidden'}`}>
        <a href="" className='mt-1'>Home</a>
        <a href="" className='mt-1 underline'>Products</a>
        <a href="/cart" className='mt-1 hover:underline'>Cart</a>
        <a href="" className='mt-1'>Blog</a>
        <a href="" className='mt-1'>Contact Us</a>
        <a href="" className='bg-brown-500 rounded-md px-6 py-2' style={{ backgroundColor: '#8B4513' }}>Shop Now</a>
      </nav>
      <div className={`text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 ${menuOpen ? 'mt-48 md:mt-0' : ''}`}>
        <h2 className="font-bold text-2xl md:text-4xl mt-4">Quality, Comfortable And Affordable Furniture Delivered To Your Doorstep.</h2>
        <p className='mt-4 md:mt-8'>Select and Purchase A Preferred Furniture of Your Choice Without Any Hassle.</p>
        <br />
        <a href="" className='font-bold mt-4 md:mt-11 bg-brown-500 rounded-md px-6 md:px-9 py-2 hidden md:block' style={{ backgroundColor: '#8B4513' }}>Shop Now</a>
      </div>
    </div>
  );
}

export default NavSec;