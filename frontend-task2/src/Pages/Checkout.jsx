import React from 'react';
import Logo from '../assets/logo.svg';
import check from '../assets/check.png'; 

const Checkout = () => {
  return (
    <>
    <div className='bg-brown py-4 flex items-start justify-between 'style={{ backgroundColor: '#5C2C06' }}>
      <div><img src={Logo} alt="woody logo" className=" mt-1 ml-4 " /> </div>

      <nav className="text-white flex space-x-20 mt-8 mr-11 text-lg font-semibold">
      <a href="" className='mt-1'>Home</a>
      <a href="" className='mt-1'>Products</a>
      <a href="" className='mt-1 underline'>Cart</a>
      <a href="" className='mt-1'>Blog</a>
      <a href="" className='mt-1'>Contact Us</a>
      <a href="" className='bg-brown-500 rounded-md px-9 py-2'style={{ backgroundColor: '#D27C2C' }}>Back</a>
      </nav>

    </div>

    <p className='text-2xl font-semibold text-center mt-6'>Checkout</p>
    <p className='text-center font-medium mt-5'>Please fill in the boxes below</p>


    <div className='flex justify-center mt-12 space-x-11 '>
      <div>
      <p>First Name</p>
      <input type="text" className='border border-black py-6 px-7 rounded-md' />
      </div>

    <div>
    <p>Last Name</p>
    <input type="text" className='border border-black py-6 px-7 rounded-md'/>
    </div>
    </div>

    <div className='flex justify-center mt-14'>
      <div>
      <p>Country</p>
      <input type="text" className='border border-black py-6 px-44 rounded-md' />
      </div>

    </div>

    <div className='flex justify-center mt-14'>
      <div>
      <p>City</p>
      <input type="text" className='border border-black py-6 px-44 rounded-md' />
      </div>

    </div>

    <div className='flex justify-center mt-14'>
      <div>
      <p>Address</p>
      <input type="text" className='border border-black py-6 px-44 rounded-md' />
      </div>

    </div>

    <div className='flex justify-center mt-14'>
      <div>
      <p>E-mail</p>
      <input type="text" className='border border-black py-6 px-44 rounded-md' />
      <div className='flex space-x-1'>
      <img src={check} alt=""  className='w-11 mt-4'/>
      <p className='text-lg font-medium mt-5'>Save details</p>
      </div>
      </div>

    </div>
    

    
      
    

    <div className='flex items-center justify-center mt-9 mb-11'>
      <a href="/payment" className='bg-brown-500 rounded-md px-16 py-3 text-white font-semibold'style={{ backgroundColor: '#D27C2C' }}>Proceed</a>
    </div>


    
    </>
  )
}

export default Checkout