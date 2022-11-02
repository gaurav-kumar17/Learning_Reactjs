import React, { useState } from "react";
import H2TagComponents from "../../Components/H2Tag";
import HeaderComponents from "../../Components/Header";
import FooterComponents from "../../Components/Footer";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeContainer = () => {
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
  return (
    <>
      <HeaderComponents />
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

      <FooterComponents />
    </>
  );
};

export default HomeContainer;
