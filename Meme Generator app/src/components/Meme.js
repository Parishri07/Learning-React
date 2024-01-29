import React from "react"
import memesData from "MemesData"

export default function Meme() {
    
    const [meme, setMeme] = React.useState( 
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/lbij.jpg"
        });
    
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
