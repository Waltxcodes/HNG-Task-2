import React, { useState } from 'react';
import Logo from '../assets/logo.svg'; 
import ward from '../assets/ward.png';
import fan from '../assets/fancy.png';
import com from '../assets/comfy.png';
import close from '../assets/close.png';
import count from '../assets/count.png';
import cards from '../assets/cards.png';


const Cart = () => {

  const[menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
    <div className='relative'>

    <div className='bg-brown py-4 flex flex-col md:flex-row items-start justify-between 'style={{ backgroundColor: '#5C2C06' }}>
      <div><img src={Logo} alt="woody logo" className=" mt-1 ml-4 " /> </div>

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

      <nav className="text-white flex-col md:flex-row space-x-20 mt-8 mr-11 text-lg font-semibold hidden">
      <a href="" className='mt-1'>Home</a>
      <a href="" className='mt-1'>Products</a>
      <a href="" className='mt-1 underline'>Cart</a>
      <a href="" className='mt-1'>Blog</a>
      <a href="" className='mt-1'>Contact Us</a>
      <a href="" className='bg-brown-500 rounded-md px-9 py-2'style={{ backgroundColor: '#D27C2C' }}>Back</a>
      </nav>

    </div>

    <nav className={`text-white absolute top-20 left-0 w-full bg-black bg-opacity-75 flex space-x-20 mt-8 mr-11 text-lg font-semibold md:hidden flex-col ${menuOpen ? 'block' : 'hidden'}`}>
      <a href="" className='mt-1'>Home</a>
      <a href="" className='mt-1'>Products</a>
      <a href="" className='mt-1 underline'>Cart</a>
      <a href="" className='mt-1'>Blog</a>
      <a href="" className='mt-1'>Contact Us</a>
      <a href="" className='bg-brown-500 rounded-md px-9 py-2'style={{ backgroundColor: '#D27C2C' }}>Back</a>
      </nav>
    </div>

    <div className='flex justify-between body bg-white'style={{ backgroundColor: "#FAF9F6" }}>
      <div className='bg-white w-2/3 pt-4 px-7'>
        <div className='flex justify-between '>
        <p className='text-3xl font-bold'>Shopping Cart</p>  
        <p className='text-2xl'>3 Items</p>
        </div>
        <hr className='mt-1' />

        <div className='flex justify-between space-x-10 mt-2 text-lg'>
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
          </div>

          <div className='flex justify-between mt-6'>
            <div>
              <div className='flex space-x-5 text-center text-l font-bold'>
                <img src={fan} alt="" className='w-48' />
                <div className='space-y-8'>
                  <p>Fancy Chair</p>
                  <p>XL</p>
                  <img src={close} alt="" className='ml-8 w-5' />
                </div>

              </div>

            </div>

            <div>
              <img src={count} alt="" className='w-16 mt-2'/>
            </div>

            <div>
              <p className='text-l font-bold'>$130</p>
            </div>
          
          </div>
          <hr className='mt-2' />


          <div className='flex justify-between mt-8'>
            <div>
              <div className='flex space-x-5 text-center text-l font-bold'>
                <img src={ward} alt="" className='w-48' />
                <div className='space-y-11'>
                  <p>Wardrobe</p>
                  <p>6 Foot</p>
                  <div><img src={close} alt=""className='ml-8 w-5 ' /></div>
                </div>

              </div>

            </div>

            <div>
              <img src={count} alt="" className='w-16 mt-2'/>
            </div>

            <div>
              <p className='text-l font-bold'>$90</p>
            </div>
          
          </div>
          <hr  className='mt-2'/>


          <div className='flex justify-between mt-8'>
            <div>
              <div className='flex space-x-5 text-center text-l font-bold'>
                <img src={com} alt="" className='w-48'/>
                <div className='space-y-11'>
                  <p>Comfy Chair</p>
                  <p>XL</p>
                  <img src={close} alt=""className='ml-8 w-5' />
                </div>

              </div>

            </div>

            <div>
              <img src={count} alt=""className='w-16 mt-2' />
            </div>

            <div>
              <p className='text-l font-bold'>$100</p>
            </div>
          
          </div>

          
      
      </div>

      <div className='bg-red-100 w-1/3 p-5'style={{ backgroundColor: "#f4e6d8" }}>
        <p className='text-3xl font-bold text-center'>Order Summary</p>
        <hr className='border ' />
        <div className='flex justify-between mt-3'>
          <div className='space-y-6'>
            <p>ITEMS 3</p>
            <p>DELIVERY</p>
            <p>TAX</p>
            </div>

            <div className='font-bold space-y-6'>
              <p>$320</p>
              <p>$100</p>
              <p>$0</p>
            </div>

        </div>

        <p className='mt-5'>PAYMENT WITH CARD</p>
        <img src={cards} alt="card-image" />

        <div className='ml-2 '>
        <p className='mt-28'>Promo Code</p>
        <input type="text" placeholder='......' className='py-2 rounded-md w-full p-3'/>
        </div>
        <hr />

        <div className='flex justify-between mt-9'>
          <p>TOTAL PRICE</p>
          <p className='font-bold'>$420</p>
        </div>

        <hr className='mt-2' />

        <div className='flex items-center justify-center mt-20'>
        <a href="/checkout" className='bg-brown-500 rounded-md px-9 py-2 text-white font-semibold w-60 text-center'style={{ backgroundColor: '#D27C2C' }}>Checkout</a>

        </div>
      </div>


    </div>

    </>
    
  )
}

export default Cart