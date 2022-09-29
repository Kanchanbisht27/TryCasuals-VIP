import React from "react";
import Product from "./Product";


function ProductList({ products }) {
  return (
    <div className ="md:grid grid-cols-3 gap-4 space-y-2 md:space-y-0">
      {products.map(function(item){
      return(
        <Product 
          key={item.title}
          {...item}
          />
      );
                                  
    })}
      
    </div>
  )
};
export default ProductList;

//title={item.title} 
//category={item.category} 
//imgUrl/thumbnail={item.imgUrl} 
//price={item.price}/>
// is ki jagha hu esa b bhi likha saktha h {...item}