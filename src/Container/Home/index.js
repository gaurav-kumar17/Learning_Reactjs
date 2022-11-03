import React, { useState, useEffect } from "react";
import H2TagComponents from "../../Components/H2Tag";
import HeaderComponents from "../../Components/Header";
import FooterComponents from "../../Components/Footer";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeContainer = () => {

  // console.log("home page container rerender");
  const [number, setNumber] = useState(5);

  const h2tagArrayData = ["Rohit", "Abhishek", "Saurabh"];
  const handleData = () => {
    return h2tagArrayData.map((item, index) => {
      //console.log('run data', item)
      return <H2TagComponents key={index} tagValue={item} />;
    });
  };

  //   const handleClick = () => {
  //     // let updateNo=number+1;
  //     setNumber(number + 1);
  //   };

  // It will run only once.
    useEffect(function(){
      console.log("Use Effect called first time only");
    },[])

    const numberUpd=()=>{
      console.log("return func.");
    }

    // It will run when component is updated.
    useEffect(function(){
      // setNumber(number+1)  donot use this it will move infinite
      numberUpd();
      console.log("Run on update only");
    },[number])


    // It will unmount using useEffect that means when we go to another component after leaving one component then it will render.
    useEffect(function(){
      console.log("UseEffect Run remove only");
      return ()=>{
          console.log("unmount use Effect")
      }
    },[])

  return (
    <>
      {/* <HeaderComponents /> */}
      <Container>
        <Row>
          <Col>
            {h2tagArrayData && h2tagArrayData.length > 0
              ? handleData()
              : "Not data  found"}
            <br />
            <hr />
            <p>
              My updated value is :-<Badge bg="secondary"> {number}</Badge>
            </p>

            {/* <Button variant="success">i am a button.</Button> */}

            <button
              onClick={() => {
                setNumber(0);
              }}
            >
              Reset
            </button>
            <br />
            <br />

            {/* <button
              onClick={() => {
                handleClick();
              }}
            >
              click here
            </button> */}
          </Col>

          <Col>
            <button
              className="btn btn-primary"
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              Increase value<Badge bg="secondary">+</Badge>
            </button>

            <Button
              variant="warning"
              onClick={() => {
                setNumber(number - 1);
              }}
            >
              - decrease
            </Button>
          </Col>
        </Row>
      </Container>

      {/* <FooterComponents /> */}
    </>
  );
};

export default HomeContainer;
