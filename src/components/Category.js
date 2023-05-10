import React from "react";
import men from "../images/cat/mobile.png";
import women from "../images/cat/women.png";
import home from "../images/cat/home.png";
import toys from "../images/cat/toys.png";
import health from "../images/cat/health.png";

export const Category = () => {
  return (
    <div className="catg">
      <p>TOP CATEGORIES</p>
      <ul>
        <li>
          <span>
            <img src={men} alt="" />
          </span>{" "}
          Men's Fashion
        </li>
        <li>
          <span>
            <img src={women} alt="" />
          </span>
          Women's Fashion
        </li>
        <li>
          <span>
            <img src={home} alt="" />
          </span>
          Home and Kitchen
        </li>
        <li>
          <span>
            <img src={toys} alt="" />
          </span>
          Toys, Kids'Fasion
        </li>
        <li>
          <span>
            <img src={health} alt="" />
          </span>
          Beauty, Health
        </li>
      </ul>
      <p>MORE CATEGORIES</p>
      <ul>
        <li>Automotives</li>
        <li>Mobile & Accessories</li>
        <li>Electronics</li>
        <li>Sports, Fitness & Outdoor</li>
        <li>Computer & Gaming</li>
        <li>Books, Media & Music</li>
        <li>Hoobies</li>
      </ul>
      <p>TRENDING SEARCHES</p>
      <ul>
        <li>Kitchen Product</li>
        <li>Shoe For Men</li>
        <li>Kurti Set</li>
        <li>Sandel Men</li>
        <li>Sports Shoe Men</li>
      </ul>
    </div>
  );
};
