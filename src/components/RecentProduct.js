import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../Data";
import { Link } from "react-router-dom";
import { Star } from "./Star";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const RecentProduct = ({ title, handleAddProucts }) => {
  const { pro1 } = data;
  return (
    <div className="recentPro">
      <div className="rec">
        <h4>{title}</h4>
        <Carousel responsive={responsive}>
          {pro1.map((item) => {
            return (
              <div className="pro">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/detail/${parseInt(item.id)}`}
                >
                  <img src={item.image} alt="" />

                  <div className="detail">
                    <h4>{item.title.slice(0, 20)}</h4>
                    <Star stars={item.rating.rate} />
                    <h6>Rs {item.price}</h6>
                  </div>
                </Link>
                <button
                  className="product-cart"
                  onClick={() => handleAddProucts(item)}
                >
                  <i class="fa-solid fa-bag-shopping fa-bounce"></i>
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
