import React,{useEffect, useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import {getProductData} from "./api";
import Loading from "./Loading";
import { HiArrowLeft, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import NotFound from "./NotFound";

function ProductInfo({ onAddToCart }) {
  
  const id = +(useParams().id);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(function () {
    const p = getProductData(id)

    p.then(function(product){
      setProduct(product);
      setLoading(false);
    }).catch(function(){
      setLoading(false);
    })
  },[id]
 );
  
  function handleCountChange(event){
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
    
  }

  
  if (loading) {
    return <Loading/>
  }
  if(!product){
    return <NotFound></NotFound>
  }
  

  return (  
    <>
      <div className="grow">
       <Link className="text-indigo-500 flex items-center " to="/">
        <HiArrowLeft className="text-5xl m-2 pl-5 text-bold "></HiArrowLeft>
         <h1 className="text-2xl m-2">Back</h1>
       </Link>

      
       <div className="flex">
       <div>
       <img className="p-4 ml-4 max-w-2xl" src={product.thumbnail}/>
        
       </div>
       <div className="p-4 m">
       <h1 className="text-4xl mb-5 text-gray-600 font-bold">{product.title}</h1>
       <h1 className="text-4xl mb-5 text-gray-600 current font-bold"> Rs. {product.price}</h1>
       <p className="mb-5 text-gray-500 font-medium">{product.description}</p>
       
    <div className="flex gap-2">
    <input className="border border-black rounded-md w-12 pl-2" 
      value={count}
      onChange={handleCountChange}
      type="number"/>
    <button onClick={handleButtonClick} className="bg-red-500 text-white rounded-lg px-5 text-center">ADD TO CART</button>
      </div>
         <div className="pt-5 gap-2 flex">
           <h1 className="text-2xl">Category:</h1>
           <span className=" text-2xl text-red-500 ">{product.category}</span>
         </div>
      </div>
        </div>
      <div className="flex justify-between px-5">
        <div>
        {id > 1 && (<Link className="text-indigo-500 flex items-center " to ={"/products/" + (id - 1)}>
         <HiArrowSmLeft className="text-5xl m-2 pl-5 text-bold "/> Previous
         
        </Link>
                   )}
       </div>
      <div>
        <Link className="text-indigo-500 flex items-center " to ={"/products/" +(id + 1)}>
         <HiArrowSmRight className="text-5xl m-2 pl-5 text-bold"/> Next
         
       </Link>
          
       </div>
      </div>
        </div>
   </>
    ) ;
  
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