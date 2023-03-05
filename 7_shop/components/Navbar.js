import React from 'react'
import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill, BsFillBagDashFill } from 'react-icons/bs';
import {MdAccountCircle} from 'react-icons/md';



const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()
  return (

    <div className='flex  flex-col justify-center items-center md:justify-start md:flex-row py-2 shadow-md sticky top-0 z-10 bg-white'>
      <div className='logo mx-5'>
        <Link href={'/'}> <Image src="/amazon.png" height={40} width={40} alt="logo" /></Link>
      </div>
      <div className='nav font-bold'>
        <ul className="flex items-center space-x-6 md:text-md">
          <Link legacyBehavior href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link legacyBehavior href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link legacyBehavior href={'/snickers'}><a><li>Snickers</li></a></Link>
          <Link legacyBehavior href={'/mugs'}><a><li>Mug</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-4 cursor-pointer ">
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>
      <div ref={ref} className={`w-96 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform ${Object.keys(cart).length !==0 ? `translate-x-0` : `translate-x-full`}  `}>
        <h2 className='font-bold text-xl text-center'>This is my shopping cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 text-2xl cursor-pointer text-pink-500'><AiOutlineCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='my-4 text-base font-semibold'>Your cart is empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3  font-semibold'>{cart[k].name}</div>
                <div className='flex items-center justify-center w-1/3  font-semibold '>  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-pink-500 cursor-pointer' /> <span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-pink-500 cursor-pointer' /></div>
              </div>
            </li>
          })}
        </ol>
        <div className='font-semibold my-2'>
          Subtotal : ₹{subTotal}
        </div>
        <div className="flex flex-row space-x-3">
          <Link href={'/checkout'}>
            <button class="flex mx-auto  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagCheckFill className='m-1' />Checkout</button>
          </Link>
          <button onClick={clearCart} class="flex mx-auto  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagDashFill className='m-1' />Clear Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar