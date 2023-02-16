import React, { useState } from "react";
import "../App.css";
import "../index.css";
import Navbar from "./Navbar";
export default function Textform(props) {
  const [text, setText] = useState("This is text");
  const UpperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
 const LowerCase =()=>{
  let newtext =text.toLowerCase();
  setText(newtext);
 }
  const fun_onchange = (event) => {
    setText(event.target.value);
  };
const cleartext =()=>{
  setText("");
}
  return (
    <>
    

    <div className="alert alert-primary" role="alert" style={props.alert} id="alrt">
{props.alerttxt}
</div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={fun_onchange}
          ></textarea>
          <br />{" "}
          <button className={props.btn} onClick={UpperCase}>
            Convert to Upper Case
          </button>
          <button className={props.btn} onClick={LowerCase}> Convert to Lower Case</button>
          <button className={props.btn} onClick={cleartext}>Clear Text</button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Miniutes to Read</p>
      </div>
    </>
  );
}
