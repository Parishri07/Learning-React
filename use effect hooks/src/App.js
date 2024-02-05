import React from "react"

export default function App(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    //side effects
    React.useEffect(function () {
        fetch(`https://swapi.dev/api/people/${count}`)
          .then(res => res.json())
          .then(data => setStarWarsData(data))
    }, [count])
    //This function runs only after the User interface is printed on the screen
    //The second parameter is the dependencies array. It checks the new value of array to the previous value of array anf if it is different, it will run the callback in useEffect
    // If we keep it as empty it implies that the function will run only after first render
    
    return(
        <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>        
        <p>{count}</p>
        </div>
    )}