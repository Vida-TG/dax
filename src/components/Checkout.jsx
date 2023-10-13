import React, { useContext, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import logo from '../assets/logo.png'
import './css/checkout.css';
import { Link, useLocation } from 'react-router-dom';

const Checkout = () => {
  const publicKey = "pk_test_f183707cace0fb2bbdb9adebc72cff32cfcacda9"
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const total = searchParams.get("total");
  
  const amount = Number(total) * 100
  
  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Checkout',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("You have not completed your transaction"),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src={logo}
            alt="product"
          />
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Amount: N{total}</label>
            </div>
            <div className="checkout-field"><Link to="/cart">Back To Cart</Link></div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;