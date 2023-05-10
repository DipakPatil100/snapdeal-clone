import React from "react";
import Logo from "../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const localData = JSON.parse(localStorage.getItem("cartItem")) || [];
  // console.log("local", localData);
  return (
    <>
      <div className="navbar">
        <span className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </span>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search Products & brands"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </button>
        </div>
        <div className="userAuth">
          <Link to="/cart">
            <button className="navBTN">
              Cart <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </button>
            {localData.length !== 0 && (
              <span className="cart-length">{localData.length}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <div>
              <div className="userDetail">
                <span>{user.name}</span>
                <img src={user.picture} alt="" />
                <button
                  className="navBTN logout"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <button className="navBTN" onClick={() => loginWithRedirect()}>
              Log In
              <i className="fa-solid fa-user user"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
