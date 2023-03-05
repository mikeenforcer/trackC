import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill, BsFillBagDashFill } from 'react-icons/bs';
import Link from 'next/link';


const checkout = ({ cart, subTotal, clearCart, addToCart, removeFromCart }) => {
  return (
    <div className='container sm:m-auto px-2'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
        <div class=" mb-4">
          <label for="address" class="leading-7 text-sm text-gray-600">Adress</label>
          <textarea name="address" id="address" cols="30" rows="2" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label for="state" class="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label for="pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="text" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>

      <div className=" sideCart  bg-pink-100 m-2 p-6  ">

        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='my-4 text-base font-semibold'>Your cart is empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className='  font-semibold'>{cart[k].name}</div>
                <div className='flex items-center justify-center w-1/3  font-semibold '>  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-pink-500 cursor-pointer' /> <span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-pink-500 cursor-pointer' /></div>
              </div>
            </li>
          })}
        </ol>
        <span className="total font-semibold">SubTotal: {subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={'/checkout'}>
          <button class="flex   text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagCheckFill className='m-1' />Pay ₹{subTotal}</button>
        </Link>
      </div>
    </div>
  )
}

export default checkout