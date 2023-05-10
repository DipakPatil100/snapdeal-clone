import React, { useState, useEffect } from "react";
import img1 from "../images/bnr1.jpg";
import img2 from "../images/bnr2.jpg";
import img3 from "../images/bnr3.jpg";
import img4 from "../images/bnr4.jpg";
import img5 from "../images/bnr5.jpg";

const Data = [
  {
    img: img5,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img1,
  },
];
export const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === Data.length - 1) {
      setIndex(0);
    }
  }, [index]);

  const onChaneprev = () => {
    if (index === 0) {
      setIndex(Data.length - 1);
    }
    setIndex((prevValue) => prevValue - 1);
  };
  const onChanenext = () => {
    setIndex((prevValue) => prevValue + 1);
  };
  return (
    <div className="slider">
      <button className="leftArrow" onClick={onChaneprev}>
        <i class="fa-solid fa-less-than"></i>
      </button>
      <img src={Data[index].img} alt="" />
      <button className="rightArrow" onClick={onChanenext}>
        <i class="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
};
