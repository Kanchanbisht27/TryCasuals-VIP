import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./api";
import Loading from "./Loading";
import { HiArrowLeft, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import NotFound from "./NotFound";

function ProductInfo({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);

      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NotFound></NotFound>;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto grow">
        <Link className="flex items-center text-indigo-500 " to="/">
          <HiArrowLeft className="pl-5 m-2 text-5xl text-bold "></HiArrowLeft>
          <h1 className="m-2 text-2xl">Back</h1>
        </Link>

        <div className="flex justify-start bg-white ">
          <div>
            <img className="max-w-2xl p-4 ml-4" src={product.thumbnail} />
          </div>
          <div className="p-4 m">
            <h1 className="mb-5 text-4xl font-bold text-gray-600">
              {product.title}
            </h1>
            <h1 className="mb-5 text-4xl font-bold text-gray-600 current">
              {" "}
              Rs. {product.price}
            </h1>
            <p className="mb-5 font-medium text-gray-500">
              {product.description}
            </p>

            <div className="flex gap-2">
              <input
                className="w-12 pl-2 border border-black rounded-md"
                value={count}
                onChange={handleCountChange}
                type="number"
              />
              <button
                onClick={handleButtonClick}
                className="px-5 text-center text-white bg-red-500 rounded-lg"
              >
                ADD TO CART
              </button>
            </div>
            <div className="flex gap-2 pt-5">
              <h1 className="text-2xl">Category:</h1>
              <span className="text-2xl text-red-500 ">
                {product.category}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div>
            {id > 1 && (
              <Link
                className="flex items-center text-indigo-500 "
                to={"/products/" + (id - 1)}
              >
                <HiArrowSmLeft className="pl-5 m-2 text-5xl text-bold " />{" "}
                Previous
              </Link>
            )}
          </div>
          <div>
            <Link
              className="flex items-center text-indigo-500 "
              to={"/products/" + (id + 1)}
            >
              <HiArrowSmRight className="pl-5 m-2 text-5xl text-bold" /> Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductInfo;
//const { id } = useParams(); iss thrha b likh sktha h
//const params = useParams();
//const sku = params.sku;

// console.log("Sku is", sku, params)

//let product;
//for (let i=0; i<allData.length; i++){
// const p = allData[i];
//  if (sku == p.sku){
//    product = p
//    break;
//   }
//  }
//console.log("product found", product)
//ya lagana sa vew Detail alg alg dihaki dethi h
