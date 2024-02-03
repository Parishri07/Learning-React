import React from "react"

export default function App(){
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        joinNewsletter: false
       }
   )
    
    function handleChange(click){
        const {name, value, type, checked} = event.target;
        
        setFormData(prevData => {
            return {
                 ...prevData,
                 [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event){
      event.preventDefault();   
      if(formData.password === formData.confirmPassword) { 
          console.log("Successfully signed up")
      }
      else { 
          console.log("Passwords do not match")
          return
      }
      if(formData.type === "checked"){
          console.log("Thanks for signing up for our newsletter")
      }
    }
    
    return (
       <form onSubmit={handleSubmit}>
           <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} />
           <input type="password" placeholder="Password" onChange={handleChange} name="password" value={formData.password}/>
           <input type="password" placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={formData.confirmPassword}/>
           
           <input type="checkbox" id="newsletter" checked={formData.joinNewsletter} name="joinNewsletter" onChange={handleChange} />
           <label htmlFor="newsletter">I want to join the newsletter</label>
           <br />
           <br />
           
           <button>Signup</button>
     </form>
    )
}