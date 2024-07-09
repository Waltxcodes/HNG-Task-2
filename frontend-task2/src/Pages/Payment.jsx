import React from 'react';
import Logo from '../assets/logo.svg';
import check from '../assets/check.png'; 


const Payment = () => {
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

    <div className="body bg-white mt-0 pt-7" style={{ backgroundColor: "#FAF9F6" }}>

    <p className='text-2xl font-bold text-center'>Make Payment</p>

<div className='flex justify-center mt-14'>
  <div>
  <p>Card Number</p>
  <input type="text" className='border border-black py-6 px-44 rounded-md' />
  </div>

</div>

<div className='flex justify-center mt-12 space-x-11 '>
  <div>
  <p>CVV</p>
  <input type="text" className='border border-black py-6 px-7 rounded-md' />
  <div className='flex space-x-1 mt-2'>
  <img src={check} alt=""  className='w-11 mt-4'/>
  <p className='text-lg font-medium mt-5'>Save details</p>
  </div>
  </div>

<div>
<p>Date</p>
<input type="text" className='border border-black py-6 px-7 rounded-md'/>
</div>
</div>

<div className='flex items-center justify-center mt-9 mb-11'>
  <button className='bg-brown-500 rounded-md px-32 py-3 text-white font-semibold'style={{ backgroundColor: '#D27C2C' }}>Pay $420</button>
</div>

<div className='flex justify-center'>
  <button className='bg-white text-black py-3 px-4 rounded-md'style={{ backgroundColor: '#CEC6C6' }}>Change payment Method</button>
</div>

<div className='flex justify-center'>
  <button className='bg-white text-black py-3 px-4 rounded-md mt-4'style={{ backgroundColor: '#CEC6C6' }}>Cancel Payment</button>
</div>

<div  className='flex justify-center mt-3 mb-8'>
  <p>Secured by <span className='text-lg font-bold'>paystack</span></p>

</div>

    </div>
    </>
  )
}

export default Payment