import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);

  const APICALL = async () => {
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    const Data = await res.json();
    setApiData(Data);
  };
  useEffect(() => {
    APICALL();
  }, []);

  const handleAddProucts = (product) => {
    let prev = cartItems.find((item) => item.id === product.id);
    if (prev) {
      alert("Item already in cart !");
      return;
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);

      var cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartData.push({ ...product, quantity: 1 });
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...cartItems, ...cartData])
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                handleAddProucts={handleAddProucts}
                search={search}
                setSearch={setSearch}
                apiData={apiData}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}
          />
          <Route exact path="/payment" element={<Payment />} />
          <Route
            exact
            path="/detail/:id"
            element={<ProductDetail handleAddProucts={handleAddProucts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
