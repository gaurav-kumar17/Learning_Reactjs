import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container className="headerNavLink">
          <Link to="/">Home Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/useref">UseRef Page</Link>
          <Link to="/products">Products</Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponents;
