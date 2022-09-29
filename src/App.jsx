import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import ProductInfo from "./ProductInfo";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState (savedData);
  const handleAddToCart = (productId, count) => {
    let oldCount = cart[productId] || 0; //cart.product

    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  };

  const totalCount = Object.keys(cart).reduce(function(output, current) {
    return output + cart[current];
  }, 0);

  return (
    <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
      <NavBar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route
            path="/products/:id/"
            element={<ProductInfo onAddToCart={handleAddToCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;

//Note
//-1
//Routes or Route ek hi page m dusra page m element dikhata h jis m path NHI Diya tho wo home page dikhata h exp. <Route index element={<ProductListPage/>}></Route>