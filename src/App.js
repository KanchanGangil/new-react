import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import axios from 'axios';

import Header from './component/layouts/Header';
import Home from './component/Home';
import Footer from './component/layouts/Footer';
import Shop from './component/Shop';
import Detail from './component/Detail';

import Checkout from './component/Checkout';
import Contact from './component/Contact';
import ProductDetail from './component/product/ProductDetail';
import Registration from './component/Registration';
import Login from './component/Login';
import Cart from './component/cart/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/action/UserAction';
import Profile from './component/user/Profile';
import Updateprofile from './component/user/Updateprofile';
import Updatepassword from './component/user/Updatepassword';
import Shipping from './component/cart/Shipping';
import ConfirmOrder from './component/cart/ConfirmOrder';
import Payment from './component/cart/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './component/Success';
import MyOrder from './component/order/MyOrder';


function App() {
  const dispatch = useDispatch()

  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  console.log(stripeApiKey)

  useEffect(() => {
    dispatch(loadUser())
    getStripeApiKey()
  }, [dispatch])


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productDetails/:id" element={<ProductDetail />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<Updateprofile />} />
        <Route path="/updatepassword" element={<Updatepassword />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/success" element={<Success />} />
        <Route path="/orders/me" element={<MyOrder />} />
        {
          stripeApiKey && (
            <Route
              path="/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}

      </Routes>
      <Footer />
    </>
  );
}

export default App;
