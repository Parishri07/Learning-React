import React from "react"
import "../style.css"

export default function Hero(){
    return (
        <section className="hero">
           <img src="./images/hero-image.png" className="hero-photo"/>
           <h1 className="hero-header">Online Experience</h1>
           <p className="text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
        </section>
    )
}