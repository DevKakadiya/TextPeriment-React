import "./App.css";

import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import About from "./componets/About";

import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [labltxt, setlabltxt] = useState({ color: "black" });
  const [btncolor, setbtncolor] = useState("btn btn-primary mx-1");
  const [alert_s, setalert_s] = useState({ display: "none" });
  const [alerttxt, setalerttxt] = useState("");

  const toggle = () => {
    if (mode == "light") {
      setmode("dark");
      setlabltxt({ color: "white" });

      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setbtncolor("btn btn-secondary mx-1");
      setalert_s({ display: "" });
      setalerttxt("Enabeled Dark Mode!");
      setTimeout(() => {
        setalert_s({ display: "none" });
      }, 2000);
      // setInterval(()=>{
      //   setalert_s({display:""});
      //   setalerttxt("Virus Attack!");
      //   setTimeout(
      //     ()=>{
      //       setalert_s({display:"none"});
      //     },2000
      //   );
      // },5000);
    } else {
      setmode("light");
      setlabltxt({ color: "black" });
      document.body.style.backgroundColor = "White";
      document.body.style.color = "black";
      setbtncolor("btn btn-primary mx-1");
      setalert_s({ display: "" });
      setalerttxt("Disabled Dark Mode!");
      setTimeout(() => {
        setalert_s({ display: "none" });
      }, 2000);
    }
  }
  return (
    <>
{/* 
    <Router>
      <Routes> */}

        {/* <Route path="/" element={ */}
               <Navbar mode={mode} toggle={toggle} ltxt={labltxt} /> 
        <Textform heading="Enter The Text to Start" btn={btncolor} alert={alert_s} alerttxt={alerttxt} />


        {/* }/>
  
        <Route path="/about" element={ */}

      <About btn={btncolor} mode={mode} toggle={toggle} ltxt={labltxt}/>
        {/* }/>

        
        </Routes>
    </Router> */}

         
          
            {/* <Textform heading="Enter The Text to Start" btn={btncolor} alert={alert_s} alerttxt={alerttxt}/> */}
          
            
      
    </>
  );
}

export default App;
