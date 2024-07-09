import React from 'react';
import Logo from '../assets/logo.svg';
import socials from "../assets/socials.svg";

const Footer = () => {
  return (
    <div className='bg-brown px-10 py-3' style={{ backgroundColor: '#5C2C06' }}>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        
        <div className='mt-4 lg:mt-20'>
          <img src={Logo} alt="woody logo" className="mt-1 ml-4" />
          <p className='text-white text-l font-medium'>&copy; 2024 All Rights Reserved</p>
        </div>

        <div className='text-white text-l font-medium mt-4 lg:mt-8 text-center space-y-4'>
          <a href="#" className='block'>FAQ</a>
          <a href="#" className='block'>Help And Support</a>
          <a href="#" className='block'>Location</a>
          <a href="#" className='block'>Blog</a>
          <a href="#" className='block'>Contact Us</a>
        </div>

        <div className='mt-4 lg:mt-8'>
          <p className='text-white text-l font-medium'>Input Email To Subscribe to our News Letter</p>
          <input type="text" className='block w-full mt-2 py-1 rounded-md' />
          <button className='text-white font-medium bg-brown py-1 px-12 rounded-sm block mt-4 mx-auto lg:mx-0' style={{ backgroundColor: '#D27C2C' }}>Subscribe</button>
          <img src={socials} alt="social-icons" className='mt-4 mx-auto lg:mx-0' />
        </div>

      </div>
    </div>
  );
}

export default Footer;
