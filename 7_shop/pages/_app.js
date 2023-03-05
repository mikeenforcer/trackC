import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  useEffect(() => {
    // console.log("hey I am a useEffect from _app.js")
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")))
        savecart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch (error) {
      console.error(error)
      localStorage.clear()
    }

  }, [])



  const savecart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setsubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode]["qty"] = cart[itemCode].qty + qty;
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setcart(newCart);
    savecart(newCart)
  }

  const clearCart = () => {
    setcart({})
    savecart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setcart(newCart);
    savecart(newCart)
  }

  return <>
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>

}
export default App
