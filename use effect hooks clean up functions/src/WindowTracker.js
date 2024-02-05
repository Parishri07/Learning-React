import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect( () => {
        function watchWidth() {
        setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        //Cleanup function, it runs when the WindowTracker component is dismounted i.e. when we toggle Window Tracker to hide the content
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}