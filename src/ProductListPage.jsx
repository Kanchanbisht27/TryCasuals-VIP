import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  // => axos sa dummyjson sa data magane ka liya
  useEffect(function () {
    const promes = getProductList();

    const abc = promes.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });
  if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "High to Low") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "Low to High") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16   ">
      <div className="flex justify-between">
        <span></span>
        <div>
          <input
            value={query}
            placeholder=" Search"
            className="mb-2 border border-gray-700 rounded-md"
            onChange={handleQueryChange}
          />
          <select
            onChange={handleSortChange}
            className="mb-2 ml-2 border border-gray-700 rounded-md"
            value={sort}
          >
            <option value="default">Default Sorting</option>
            <option value="name">Short by Name</option>
            <option value="price">Short by Price</option>
            <option value="High to Low">Short by price High to Low </option>
            <option value="Low to High">Short by price Low to High </option>
          </select>
        </div>
      </div>
      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && <NoMatching>No Matching Product...</NoMatching>}
    </div>
  );
}
export default ProductListPage;

// is prkakr sa b kr saktha ha but iss m data sotre krna padtha h

//const [data, setData] = useState(allData);

//function handleChange(event) {
// const newQuery = event.target.value;

// const newData = allData.filter(function(item){
// const lowerCaseTitle = item.title.toLowerCase();
//  const lowerCaseQuery = newQuery.toLowerCase();

//  return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
// })
//console.log("new data is ", data)

// setQuery(newQuery);
//setData(newData);
