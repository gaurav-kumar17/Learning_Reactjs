import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../../../Components/Card";

import axios from "axios";
// axios basically provides function to call API.

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CategoryComponent from "../../../Components/Category";

const ProductContainer = () => {
  const [productData, setProductData] = useState([]);
  const [productDataCat, setProductDataCat] = useState([]);
  const [currentCat, setCurrentCat] = useState();

  const [inputValue,setInputValue]=useState(currentCat);

  // const API_URL = "https://dummyjson.com/products?limit=10";

  const fetchData = async () => {

    let apiUrl="";
    if(currentCat && currentCat!=="")
    {
      apiUrl=`https://dummyjson.com/products/category/${currentCat}`;
    }
    else{
      apiUrl=`https://dummyjson.com/products`;
    }


    const data = await axios(apiUrl);
    const myData = data.data.products;
    setProductData(myData);
    // console.log("data", data);
  };

  // console.log("datas",currentCat);

  const fetchDataCate = async () => {
    const data = await axios("https://dummyjson.com/products/categories");
    setProductDataCat(data.data);
    console.log("datacat", productDataCat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let catValue=inputValue;
    if(productDataCat.indexOf(catValue)===-1)
    {
      alert("This text is not fount in category.")
    }
    else{
      setCurrentCat(catValue);
    }
    console.log("Form Submit");
  };

  const showAllProducts=()=>{

    setCurrentCat('');
  }


  // yaha par useEffect tab run hoga jab app/total components load ho jayega.
  useEffect(() => {
    fetchData();
    fetchDataCate();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentCat]);

  return (
    <>
      <h1>My Product Page.</h1>

      <Container>
        <Row>
          <Col sm={2}>
            <CategoryComponent
              productDataCat={productDataCat}
              setCurrentCat={setCurrentCat}
              currentCat={currentCat}
            />
          </Col>

          <Col sm={10}>
            <select
              value={currentCat}
              onChange={(e) => {
                setCurrentCat(e.target.value);
              }}
            >
              {productDataCat && productDataCat.length > 0 ? (
                productDataCat.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })
              ) : (
                <option>Data Not Found!</option>
              )}
            </select>

            <div className="">
              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value.toLowerCase());
                  }}
                ></input>

                <button type="submit">Search Item</button>
              </form>

              <button type="button" onClick={showAllProducts}>All Products</button>
            </div>

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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductContainer;
