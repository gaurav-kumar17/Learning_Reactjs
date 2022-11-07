import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../../../Components/Card";


// axios basically provides function to call API.

const ProductContainer = () => {
  const [productData, setProductData] = useState([]);

  const API_URL = "https://dummyjson.com/products?limit=10";

  const fetchData = async () => {
    const data = await axios(API_URL);
    console.log("data", data);
    const myData = data.data.products;
    setProductData(myData);
  };

  // yaha par useEffect tab run hoga jab app/total components load ho jayega.
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>My Product Page.</h1>
      {productData && productData.length > 0
        ? productData.map((item) => {
            {
              /* <h2 key={item.id}>{item.title}</h2> */
            }
            return (
              <>
                <SingleCard
                  // key={item.id}
                  data={item}
                />

                
              </>
            );
          })
        : "Data Not Found"}
    </>
  );
};

export default ProductContainer;
