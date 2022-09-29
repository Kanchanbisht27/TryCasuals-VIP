import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import ProductInfo from "./ProductInfo";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  const handleAddToCart = (productId, count) => {
    let oldCount = cart[productId] || 0; //cart.product

    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  };

  const totalCount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200">
      <NavBar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route
            path="/products/:id/"
            element={<ProductInfo onAddToCart={handleAddToCart} />}
          />
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

//Note
//-1
//Routes or Route ek hi page m dusra page m element dikhata h jis m path NHI Diya tho wo home page dikhata h exp. <Route index element={<ProductListPage/>}></Route>
