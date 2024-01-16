import React from "react"
import reactLogo from "../images/react-logo.png"
import "../style.css"

export default function Navbar() {
    return (
        <nav className="nav-bar">
          <img src={reactLogo} className="logo"/>
          <h3 className="nav-heading">ReactFacts</h3>
          <h4 className="nav-content">React Course - Project 1</h4>
        </nav>
    )
}