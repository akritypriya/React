import { LOGO_URL } from "../utils/constants";
import {useState,useEffect} from "react";

const Header =()=>{
  const [btnNameReact,setBtnNameReact]=useState("Login");
  
  console.log("header rendered");
  
  //UseEffect is called after component renders

  //1.when no dependency array=>it will be called every time whenever header is rendered
  //2.when dependency array[] is empty=>it will be called one time  when header is rendered
  //3.when dependency array [btnNameReact]=>it will be called every time whenever btnNameReact is updated

  useEffect(()=>{
    console.log("useEffect called");
  },[btnNameReact]);


  return(
      <div className="header">
        <div className="logo-container">
          <img 
          className="logo" 
          src={LOGO_URL}
          />
        </div>      
        <div className="nav-items">
          <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className ="login"
          onClick={()=>{
            btnNameReact==="Login"
            ?setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}
          >
            {btnNameReact}
          </button>
          </ul>
        </div>    
      </div>
    );

};
  
export default Header;