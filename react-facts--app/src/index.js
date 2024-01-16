import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// const header = (
//     <div>
//     <h1>List of holidays: </h1>
//     <ul>
//       <li>15th August</li>
//       <li>29th Feb</li>
//       <li>26th January</li>
//     </ul>
//     </div>
// )
// document.getElementById("container").append(JSON.stringify(header));
// JSX returns plain javascript objects, header is an object here so appending it won't work
// ReactDOM.render(header, document.getElementById("container"));   -> is the correct way

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
