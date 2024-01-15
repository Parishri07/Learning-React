// import React from "react"
// import ReactDOM from "react-dom"

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

function Navbar() {
    return (
        <nav className="nav-bar">
          <img src="./react-logo.png" className="logo"/>
          <ul className="nav-items">
             <li>Pricing</li>
             <li>About</li>
             <li>Contact</li>                                       
          </ul>
        </nav>
    )
}

function MainContent() {
   return (
       <div>
         <h1>Fun Facts about React</h1>
         <ul>
           <li>Was first released in 2013</li>
           <li>Was originally created by Jordan Walke</li>
           <li>Has well over 100k on Github</li>
           <li>Is maintained by Facebook</li>
           <li>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
       </div>       
   )    
}

function Page(){
    return (
        <>
        <Navbar />
        <MainContent />
        </>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById("container")
)
