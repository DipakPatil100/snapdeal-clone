import React, { useEffect } from "react";

export const Filter = ({
  handleCategory,
  apiData,
  setItems,
  APICategory,
  items,
  setSearch,
}) => {
  const handleSort = (sortOrder) => {
    const sortedItems = [...items];
    if (sortOrder === "") {
      setItems(apiData);
      return;
    }

    if (sortOrder === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }

    setItems(sortedItems);
  };

  useEffect(() => {
    setItems(apiData);
  }, [apiData]);

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h4>Sort by Price:</h4>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By: </option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <h4>Sort by Category: </h4>
      {APICategory.map((item) => {
        return <button onClick={() => handleCategory(item)}>{item}</button>;
      })}
    </div>
  );
};
