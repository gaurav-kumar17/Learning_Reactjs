import React, { useState } from "react";

const UseRefComp = () => {
  
  const [value,setValue]=useState("Enter any text");
  console.log("my component rerender");
  return (
    <>
      <div className="wrapSection">
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" />
        <br />
        {value}
        <br />
        <button>Click to bottom.</button>
      </div>
    </>
  );
};

export default UseRefComp;
