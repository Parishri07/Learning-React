import React from "react"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"

export default function App(){
    const [mode, setMode] = React.useState("dark") 
    
    const toggleMode = () => {
            if(mode === "light"){
               setMode("dark")
               document.body.style.backgroundColor = 'black'
            }
            else{
                setMode("light")
               document.body.style.backgroundColor = 'white'
            }
    }
         
    return (
        <div className="container">
        <Navbar mode={mode} changeMode={toggleMode}/>
        <MainContent mode={mode}/>
        </div>
    )
}
