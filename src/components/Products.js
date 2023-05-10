import React, { useState, useEffect } from "react";
// import { data } from "../Data";
import { Link } from "react-router-dom";
import { Filter } from "./Filter";
import Pagination from "./Pagination";
import { Star } from "./Star";

export const Products = ({ handleAddProucts, search, apiData, setSearch }) => {
  // const { pro } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(apiData);
  }, []);
  const APICategory = ["All", ...new Set(apiData.map((item) => item.category))];
  // console.log(APICategory);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const SlicedProducts = items.slice(firstPostIndex, lastPostIndex);

  const handleCategory = (category) => {
    if (category === "All") {
      setItems(apiData);
      return;
    }

    const Filter = apiData.filter((item) => {
      return item.category === category;
    });
    setItems(Filter);
  };

  return (
    <div className="pro-filter">
      <div className="pro-left-filter">
        <Filter
          handleCategory={handleCategory}
          setItems={setItems}
          apiData={apiData}
          APICategory={APICategory}
          items={items}
          setSearch={setSearch}
        />
      </div>
      <div className="pro-right-products">
        <div className="proWrap">
          {SlicedProducts.filter((val) => {
            if (search == "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((item, idx) => {
            return (
              <div key={idx} className="pro">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/detail/${parseInt(item.id)}`}
                >
                  <img src={item.image} alt="" />

                  <div className="detail">
                    <h4>{item.title.slice(0, 50)}</h4>

                    {/* Star Rating  */}
                    <Star stars={item.rating.rate} />

                    <h6>Rs{item.price}</h6>
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
        </div>
        <div className="pagination-div">
          <Pagination
            totalPost={items.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};
