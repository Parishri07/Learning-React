import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState( 
        {
            topText: "",
            bottomText: "",
            randomImage:  "https://i.imgflip.com/30b1gx.jpg"
        });
    
    const [allMemes, setAllMemes] = React.useState([])
        
    React.useEffect(function (){
        // const res = await fetch("https://api.imgflip.com/get_memes")
        // const data = await res.json()
        // setAllMemes(data.data.memes)
        //Using async await is not preffered 
        
        fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(res => setAllMemes(res.data.memes)
      )
    }, [])
    
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    
    return (
        <main>
           <div className="form" >
           <input type="text" className="form-input" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}/>
           <input type="text" className="form-input" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
           <button className="form-button" onClick={getMemeImage} >Get a new meme image</button>
           </div> 
           <div className="meme"> 
           <img src={meme.randomImage} className="meme-image" />
           <h2 className="meme-text-top">{meme.topText}</h2>
           <h2 className="meme-text-bottom">{meme.bottomText}</h2>                    
           </div>
        </main>
    )
}

 // There are two ways to change the state of the variable, one way to directly pass the new value of the state to the setMeme function
// When we need to refer to the previous value of the state, we pass a callback where we take the previous value and return the updated value.

//There are two ways of conditional rendering:
 //1. Use {condition && (item to display)} - this is used in cases where to have to choose to display something or not based to the condition
 //2. Use ternary operator - this is used when you have to choose between displaying one thing or other like you have two options to display based on the condition. If there are more than two options use if..else if
//Only the && and ternary operator can be used directly in JSX, for if..else if and switch you need to create an object outside return()
 
 
 
 

