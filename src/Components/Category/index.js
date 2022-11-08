import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryComponent = ({productDataCat,setCurrentCat,currentCat}) => {
  return (
    <>
      <h4>Category:-</h4>

      <ListGroup>
        {productDataCat && productDataCat.length > 0
          ? productDataCat.map((item) => {
              return (
                <ListGroup.Item
                  key={item}
                  onClick={() => {
                    setCurrentCat(item);
                  }}
                  className={item === currentCat ? "active" : ""}
                >
                  {item}
                </ListGroup.Item>
              );
            })
          : ""}
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
    </>
  );
};

export default CategoryComponent;
