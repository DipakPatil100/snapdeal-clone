import React from "react";

export const Star = ({ stars }) => {
  // const ratingStar = Array.from({ length: 5 }, (ele, index) => {
  //   let number = index + 0.5;
  //   return (
  //     <span>
  //       {stars >= index + 1 ? (
  //         <i className="fa-solid fa-star"></i>
  //       ) : stars >= number ? (
  //         <i class="fa-solid fa-star-half"></i>
  //       ) : (
  //         <i className="fa-regular fa-star"></i>
  //       )}
  //     </span>
  //   );
  // });

  function getStarRating(rating) {
    const starRating = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starRating.push(
          <span key={i} className="star filled">
            <i class="fa-solid fa-star"></i>
          </span>
        );
      } else if (i === fullStars + 1 && halfStar) {
        starRating.push(
          <span key={i} className="star half-filled">
            <i class="fa-solid fa-star-half"></i>
          </span>
        );
      } else {
        starRating.push(
          <span key={i} className="star empty">
            <i class="fa-regular fa-star"></i>
          </span>
        );
      }
    }
    return starRating;
  }

  return (
    <div>
      <span className="star">{getStarRating(stars)}</span>
    </div>
  );
};
