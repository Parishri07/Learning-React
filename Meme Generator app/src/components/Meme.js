import React from "react"
import memesData from "MemesData"

export default function Meme() {
    
    const [meme, setMeme] = React.useState( 
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/lbij.jpg"
        });
    // 'meme' is a state and setMeme is a function to change the state of the variable
    
    const [allMemesImages, setAllMemesImage] = React.useState(memesData)
    
    function getMemeImage(){
        const memesArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length())
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    // There are two ways to change the state of the variable, one way to directly pass the new value of the state to the setMeme function
    // When we need to refer to the previous value of the state, we pass a callback where we take the previous value and return the updated value.
    
    return (
        <main>
           <div className="form" >
           <input type="text" className="form-input" placeholder="Top Text"/>
           <input type="text" className="form-input" placeholder="Bottom Text"/>
           <button className="form-button" onClick={getMemeImage} >Get a new meme image</button>
           </div>  
           <img src={meme.randomImage} className="meme-image" />         
        </main>
    )
}
 
 const [boxes, setBoxes] = React.useState(boxesData)
 
 const boxElements = boxes.map((box)=>{
       return (
           <div></div>
       )     
 })
