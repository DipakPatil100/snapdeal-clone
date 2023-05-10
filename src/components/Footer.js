import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import c1 from "../images/card1.png";
import c2 from "../images/card2.png";
import c3 from "../images/card3.png";
import c4 from "../images/card4.png";
import s1 from "../images/social/facebook.png";
import s2 from "../images/social/twitter.png";
import s3 from "../images/social/instagram.png";
import s4 from "../images/social/linkedin.png";
import s5 from "../images/social/youtube.png";
import s6 from "../images/social/telegram.png";
import s7 from "../images/social/whatsapp.png";

export const Footer = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <div className="foot-wrap">
        <div className="row">
          <div className="col">
            <h6>POLICY INFO</h6>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Terms of Use</a>
            <a href="#">Report Abuse & Takedown Policy</a>
            <a href="#">FAQ</a>
          </div>
          <div className="col">
            <h6>COMPANY</h6>
            <a href="#">Impact@SnapDeal</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Sitemap</a>
          </div>
          {/* <div className="col">
            <h6>SNAPDEAL BUSINESS</h6>
            <a href="#">Shopping App</a>
            <a href="#">Sell on Snapdeal</a>
            <Link to="/cart">Media Enquirys</Link>
          </div> */}
          <div className="col">
            <h6>POPULAR LINKS</h6>
            {isAuthenticated ? (
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "grey",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Logout
              </button>
            ) : (
              <a href="#">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "grey",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </a>
            )}
            <Link to="/cart">Cart</Link>
          </div>
          <div className="col">
            <h6>SUBSCRIBE</h6>
            <div className="email-input">
              <input type="text" placeholder="Your email address" />
              <button>SUBSCRIBE</button>
            </div>
            <p>
              Register now to get updates on promotions and <br />
              coupons. <a href="#">Or Download App</a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="cards">
          <p>PAYMENT</p>
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
        </div>
        <div className="socialMedia">
          <p>CONNECT</p>
          <div>
            <img src={s1} alt="" />
            <img src={s2} alt="" />
            <img src={s3} alt="" />
            <img src={s4} alt="" />
            <img src={s5} alt="" />
            <img src={s6} alt="" />
            <img src={s7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
