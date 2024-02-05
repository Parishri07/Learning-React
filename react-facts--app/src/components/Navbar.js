import React from "react"
import reactLogo from "../images/react-logo.png"
import "../style.css"

export default function Navbar(props) {
    return (
        <nav className={`nav-bar ${props.mode}`} >
          <img src="../images/react-logo.png" className="logo"/>
          <h3 className="nav-heading">ReactFacts</h3>
          <h4 className="nav-content">React Course - Project 1</h4>
          <label className="toggle-switch" >
            <input type="checkbox" onClick={props.changeMode}/>
            <span className="slider" ></span>
         </label>
        </nav>
    )
}
