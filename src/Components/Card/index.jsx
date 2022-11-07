import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  // console.log("hi",data,'pi');
  return (
    <>
      <div className="blog">
        <h2>
          Product Name:-
          <Link to={`/products-details/${data.id}`}>{data.title}</Link>
        </h2>
        <h3>
          <img src={data.thumbnail} alt={data.thumbnail} />
        </h3>
        {data.images.map((item) => {
          return (
            <span key={item}>
              <img src={item} alt={item} />
            </span>
          );
        })}

        <p>Product Price:-{data.price}</p>
        <p>Product brand:-{data.brand}</p>
        <p>Product Description:-{data.description}</p>
      </div>
    </>
  );
};

export default SingleCard;
