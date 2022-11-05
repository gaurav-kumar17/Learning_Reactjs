import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// axios basically provides function to call API.

const ProductContainer = () => {

    const[postData,setPostData]=useState([]);

    const API_URL='https://dummyjson.com/posts?limit=10';
    const fetchData = async()=>{

        const data = await axios(API_URL);
        console.log('data',data.data.posts);
        const myData=data.data.posts;
        setPostData(myData);
    }

    // yaha par useEffect tab run hoga jab app/total components load ho jayega.
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
      My Product Page.
      {
        postData && postData.length>0 ? postData.map((item)=>{
            return(
                <h2 key={item.id}>{item.title}</h2>
            )
        }) : "Data Not Found"
      }
    </>
  );
};

export default ProductContainer;
