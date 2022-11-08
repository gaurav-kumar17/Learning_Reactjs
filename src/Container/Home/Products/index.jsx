import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../../../Components/Card";

import axios from "axios";
// axios basically provides function to call API.

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ListGroup from "react-bootstrap/ListGroup";

const ProductContainer = () => {
  const [productData, setProductData] = useState([]);
  const [productDataCat, setProductDataCat] = useState([]);
  const [currentCat,setCurrentCat]=useState('smartphones');

  // const API_URL = "https://dummyjson.com/products?limit=10";

  const fetchData = async () => {
    const data = await axios(`https://dummyjson.com/products/category/${currentCat}`);
    // console.log("data", data);
    const myData = data.data.products;
    setProductData(myData);
  };

  console.log("datas",currentCat);

  const fetchDataCate = async () => {
    const data = await axios("https://dummyjson.com/products/categories");
    setProductDataCat(data.data);
    // console.log("datacat", data);
  };

  // yaha par useEffect tab run hoga jab app/total components load ho jayega.
  useEffect(() => {
    fetchData();
    fetchDataCate();
  }, []);

  useEffect(()=>{

    fetchData();
  },[currentCat]);

  return (
    <>
      <h1>My Product Page.</h1>

      <Container>
        <Row>
          <Col sm={2}>
            <h4>Category:-</h4>

            <ListGroup>
              {productDataCat && productDataCat.length > 0
                ? productDataCat.map((item) => {
                    return (<ListGroup.Item key={item} onClick={()=>{setCurrentCat(item)}}>

                    {item}

                    </ListGroup.Item>)
                  })
                : ""
              }
              {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
          </Col>

          <Col sm={10}>
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
