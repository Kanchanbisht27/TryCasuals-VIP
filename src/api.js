import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (response) {
      return response.data;
    });
}
//products/ lagana jaruri h tabhi product ki detail dikhai degi (info wala folder dikhai dega)
export function getProductList() {
  return axios.get("https://dummyjson.com/products").then(function (response) {
    return response.data.products;
  });
}

// promies are chainable
// promies fail, catch. .then laga ka krtha h
