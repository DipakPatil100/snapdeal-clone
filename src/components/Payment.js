import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  var LocalData = JSON.parse(localStorage.getItem("cartItem")) || [];
  const history = useNavigate();
  const { user } = useAuth0();
  const handleCartCheckout = (e) => {
    e.preventDefault();
    localStorage.clear();
    alert("Order Placed");

    history("/");
  };
  return (
    <div className="payment">
      <div
        style={{ height: "90px", zIndex: "0", position: "static" }}
        className="navbar"
      >
        <span className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </span>
        <div className="searchField">
          <p
            style={{
              fontSize: "14px",
              fontWeight: "300",
              marginRight: "40px",
            }}
          >
            100% Payment Protection, Easy Returns Policy
          </p>
        </div>
      </div>
      <div className="payment-wrap">
        <div className="paymentLeft">
          <div className="paymentLogin">
            <h1>1. Login</h1>
            <p>
              We will send order details to this email address or mobile number
            </p>
            <h5>
              {isAuthenticated ? (
                <span>
                  Logged in as <b>{user.email}</b>
                </span>
              ) : (
                <button id="continue" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              )}
            </h5>
            {/* <a href="#address">
              <button id="continue">CONTINUE</button>
            </a> */}
          </div>
          <div className="paymentAddress paymentLogin">
            <h1>2. Delivery Address</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Address Saved!");
                e.target.reset();
              }}
            >
              <label htmlFor="">
                <span>Pincode</span>
                <input type="number" placeholder="6 digit pincode" required />
              </label>
              <label htmlFor="">
                <span>Name</span>
                <input type="text" placeholder="Full Name" required />
              </label>
              <label htmlFor="">
                <span>Address</span>
                <input
                  type="text"
                  placeholder="Flat/House No.Colony/Street No."
                  required
                />
              </label>
              <label htmlFor="">
                <span>Locality/Landmark</span>
                <input
                  type="text"
                  placeholder="Eg. Near Apollo Hospital"
                  required
                />
              </label>
              <label htmlFor="">
                <span>City</span>
                <input type="text" placeholder="City" required />
              </label>
              <label htmlFor="">
                <span>State</span>
                <input type="text" placeholder="State" required />
              </label>
              <label htmlFor="">
                <span>Mobile Number</span>
                <input
                  className="inputNumber"
                  type="number"
                  maxlength="10"
                  placeholder="10 digit mobile number"
                  required
                />
              </label>
              <a href="#pay">
                <button type="submit" id="address">
                  SAVE AND CONTINUE
                </button>
              </a>
            </form>
          </div>
          <div className="makepayment paymentLogin">
            <h1>3. Make Payment</h1>
            <div className="paymentOption">
              <div className="paymentOptionLeft">
                <li>Credit Card</li>
                <li>Debit Card</li>
                <li>Cash On Delivery</li>
              </div>
              <div className="paymentOptionRight">
                <h2>Pay using Credit Card</h2>
                <form onSubmit={handleCartCheckout}>
                  <label htmlFor="">
                    <span>Card Number</span>
                    <input
                      className="payment-card-number inputNumber"
                      type="number"
                      placeholder="Card Number"
                      required
                    />
                  </label>
                  <label htmlFor="">
                    <span>Expiry Date</span>
                    <select name="" id="" required>
                      <option value="">MM</option>
                      <option value="">01</option>
                      <option value="">02</option>
                      <option value="">03</option>
                      <option value="">04</option>
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                      <option value="">09</option>
                      <option value="">10</option>
                      <option value="">11</option>
                      <option value="">12</option>
                    </select>
                    <span>/</span>
                    <select name="" id="" required>
                      <option value="">YY</option>
                      <option value="">23</option>
                      <option value="">24</option>
                      <option value="">25</option>
                      <option value="">26</option>
                      <option value="">27</option>
                      <option value="">28</option>
                    </select>

                    <span>CVV</span>
                    <input
                      className="payment-cvv"
                      type="number"
                      placeholder="CVV"
                      maxlength="3"
                      required
                    />
                  </label>
                  {isAuthenticated && (
                    <button id="pay" type="submit">
                      PAY RS. {localStorage.getItem("subTotal")}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="paymentRight">
          <h4>SUMMARY ({LocalData.length} Item)</h4>
          <div className="paymnt-detail">
            {LocalData.map((item, idx) => {
              return (
                <div key={idx} className="cardCheckout">
                  <h6>{item.title}</h6>
                  <p>
                    Quantity: 1 <span> Rs. {item.price}</span>
                  </p>
                </div>
              );
            })}
            <div className="paymentTotal">
              Total: <span> Rs. {localStorage.getItem("subTotal")}</span>
            </div>
            <div className="paymentDelivery">
              Delivery Charges: <span>Free</span>
            </div>
            <div className="payment-finalTotal">
              You Pay: <span>Rs. {localStorage.getItem("subTotal")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
