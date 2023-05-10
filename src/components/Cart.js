import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Cart = ({ setCartItems, cartItems }) => {
  var LocalData = JSON.parse(localStorage.getItem("cartItem")) || [];

  const totalPrice = LocalData.reduce(
    (price, item) => price + parseInt(item.quantity) * parseFloat(item.price),
    0
  );
  localStorage.setItem("subTotal", totalPrice.toFixed(2));
  // const GST = totalPrice + totalPrice * (18 / 100);

  const handleRemoveProducts = (productID) => {
    let prev = LocalData.filter((item) => item.id !== productID);
    setCartItems(prev);
    localStorage.setItem("cartItem", JSON.stringify(prev));
  };

  const qunatityInc = (product) => {
    let updatedData = LocalData.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedData);
    localStorage.setItem("cartItem", JSON.stringify(updatedData));
  };

  const qunatityDec = (product) => {
    const productExist = LocalData.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      alert("Minimum one qunantity required");
      return;
    }
    let updatedData = LocalData.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedData);
    localStorage.setItem("cartItem", JSON.stringify(updatedData));
  };

  const CARDDATA = LocalData.map((item, idx) => {
    return (
      <div key={idx} id={item.id} className={`cart-item-list `}>
        <div className="itemDetail">
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-name">{item.title}</div>
        </div>

        <div className="cart-item-price">Rs. {item.price.toFixed(2)}</div>
        <div className="cart-items-function">
          <span className="cart-item-add" onClick={() => qunatityInc(item)}>
            +
          </span>
          <div className="cart-item-quantity">{item.quantity}</div>
          <span className="cart-item-remove" onClick={() => qunatityDec(item)}>
            -
          </span>
        </div>
        <button
          className="Remove"
          onClick={() => handleRemoveProducts(item.id)}
        >
          REMOVE
        </button>

        <div className="cart-total-price">
          Rs. {(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="navwrap">
        <Navbar />
      </div>

      <div className={`cart-con `}>
        {/* <span className="cart-item-header">Shopping Cart</span> */}

        {LocalData.length === 0 ? (
          <div className="cart-items-empty">
            <p>Shopping Cart is empty!</p>
            <Link to="/">
              <button>START SHOPPING NOW</button>
            </Link>
          </div>
        ) : (
          <div className={`cart-container`}>
            <h3>Shopping Cart ({LocalData.length} Item)</h3>
            <div>
              <tr className="cart-row">
                <th>Item Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>Subtotal</th>
              </tr>
              {CARDDATA}
            </div>
          </div>
        )}
        {LocalData.length !== 0 && (
          <div className="FinalTotla">
            <div className="cart-total-price-name">
              <span className="total-price">
                Sub Total: <span> Rs.{localStorage.getItem("subTotal")}</span>
              </span>

              <span className="dCharge">
                Delivery Charges:
                <span>FREE</span>
              </span>
            </div>

            <div className="checkout">
              {LocalData.length >= 1 && (
                <Link to="/payment">
                  <button className=" buybtn">
                    PROCEED TO PAY RS. {localStorage.getItem("subTotal")}
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
