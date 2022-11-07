import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetails = () => {

    let {productid} = useParams();
    const[productDetails,setProductDetails]=useState({});
    console.log("params",productid);

    const getProductsData=async()=>{

        let req=await axios(`https://dummyjson.com/products/${productid}`);
        // console.log('req',req.data);
        setProductDetails(req.data);
    }

    useEffect(()=>{

        getProductsData();
    },[])

    return (
        <>
            <h3>Product Name:- {productDetails.title}</h3>
            <h3>Product Brand:- {productDetails.brand}</h3>
            <h3>Product Category:- {productDetails.category}</h3>
            <h3>Product Rating:- {productDetails.rating}</h3>

            <h3>Product Price:- {productDetails.price}</h3>
            <h3>Product discountPercentage:- {productDetails.discountPercentage}</h3>

            <h3>Product description:- {productDetails.description}</h3>

            <img src={productDetails.thumbnail} alt={productDetails.thumbnail}/>

            
        </>
    )
}

export default ProductDetails;