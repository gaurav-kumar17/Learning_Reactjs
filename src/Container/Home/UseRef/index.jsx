import React, { useRef } from "react";
import { CloseButton } from "react-bootstrap";

const UseRefComp = () => {
  // const [value,setValue]=useState("Enter any text");
  // useState mein hum Value ko update karte hain.


  let texts = useRef(null);
  // useRef mein pure element ko accesss kar lete hai like uske Style,color ko change kar sakte hai.
  console.log("My component Re-render", texts);


  const handleChange = () => {
    console.log("texts.current", texts.current.value);
    // console.log("ref", texts.current.value);
    // console.log("My component rerender",texts);
    // texts.current=texts.current.current.target.value;
    // alert(texts.current.value);
    if (texts.current.value === "react") {
      texts.current.style.backgroundColor = "red";
      texts.current.style.padding = "10px";
      texts.current.style.fontSize = "35px";

    } else if (texts.current.value === "js") {
      texts.current.style.backgroundColor = "green";
      texts.current.style.padding = "10px";
      texts.current.style.fontSize = "25px";
    }
    else{
      texts.current.style.backgroundColor = "yellow";
      texts.current.style.padding = "10px";
      texts.current.style.fontSize = "18px";
    }
  };
  return (
    <>
      <div className="wrapSection">
        {/* <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" /> */}

        <input defaultValue="React JS" ref={texts} type="text" />

        <br />
        {/* {texts.current} */}
        <br />
        <button onClick={handleChange}>Click to bottom.</button>
      </div>
    </>
  );
};

export default UseRefComp;
