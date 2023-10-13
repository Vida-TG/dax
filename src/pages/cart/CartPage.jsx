import React, { useContext } from "react";

import "./cart.css";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";

export const Cart = () => {
  const CartState = useContext(CartContext);
  const state = CartState.state;
  const dispatch = CartState.dispatch;


  const total = state.reduce((total, course) => {
    return total + course.price;
  }, 0);

  return (
    <div className="lodge-cart">
      <Link to="/" className="cancel">X</Link>
      <div className="title">CART</div>

      {state.length > 0 && (
          <div className="course-header">
            <div className="buttons">
            </div>
            <div className="image-box">
            </div>
            <div className="total-price">Price</div>
          </div>
      )}
      {state.map((course, index) => {

        return (
        <div>
          <div className="course" key={index}>
            <div className="buttons">
              <span onClick={() => dispatch({ type: "REMOVE", payload: course })} className="delete-btn"></span>
            </div>

            <div className="image-box">
              <img src={course.courseImage} alt={course.courseType} className="image" />
            </div>

            <div className="total-price">N{course.price}</div>
          </div>
        </div>
        );
      })}

      {state.length > 0 ? (
        <div className="padding-btm">
          <div>TOTAL: N{total}</div>
          <Link
            to={`/checkout?total=${total}`}
            className="checkout-btn"
          >
            CHECKOUT
          </Link>
          <br/><br/>
          <button onClick={() => dispatch({ type: "CLEAR" })}>CLEAR CART</button>
        </div>
      ) : (
        <h3 className="cart-empty">Your Cart is empty <Link className="empty-link" style={{ textAlign: "center" }} to="/">GET A COURSE</Link></h3>
      )}
    </div>
  );
};
