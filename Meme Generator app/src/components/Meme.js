import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState( 
        {
            topText: "",
            bottomText: "",
            randomImage:  "https://i.imgflip.com/30b1gx.jpg"
        });
    
    const [allMemes, setAllMemes] = React.useState([])

        const count = React.useRef(0)

        
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
              
      count.current = count.current + 1
      console.log("Meme number: " + count.current)
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


 
 

