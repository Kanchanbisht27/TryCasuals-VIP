import React from "react";
import {Link} from "react-router-dom";

function Product({title,price,category,thumbnail,id}){
  return(
  <div className ="max-w-xs pt-5">
    <div className="w-full aspect-square">
      <img className ="w-full h-full object-cover" src={thumbnail}/>
    </div>
    
    <div className="text-gray-500 text-xl font-bold">{category}</div>
    <div>{title}</div>
    <div className="text-indigo-500 font-semibold"> Rs.{price}</div>
    <Link className="text-pink-700" to={"/products/" + id }>Vew Detail</Link>
  </div>
  );
}
export default Product;