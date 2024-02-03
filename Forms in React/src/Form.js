import React from "react"

export default function Form(){
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email:"", 
            comments: "", 
            isFriendly: true, 
            employment: "",
            favColor: ""
        }
    ) 
    
    function handleChange(click){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    
    function handleSubmit(event){
        event.preventDefault()
        //if we dont use the ablove command, on submitting the form details will get erased and the values will be added as quereis in the url like below
        // /index.html?firstName=jane&lastName=kui&email=12344%40gmail.com&comments=kiuyt&isFriendly=on&employment=full-time&favColor=black
        
        console.log(formData)
    }
    
    console.log(formData)
    
    return (
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
           <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName}/>
           <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email}/>
           <textarea placeholder="Enter text" onChange={handleChange} name="comments" value={formData.comments} />
           
           
           <input type="checkbox" id="isFriendly" checked={formData.isFriendly} name="isFriendly" onChange={handleChange}/>
           <label htmlFor="isFriendly">Are you friendly?</label>

           <fieldset>
           <legend>Employment Status</legend>
           
           <input type="radio" id="unemployed" name="employment" value="unemployed" onChange={handleChange}/>
           <label htmlFor="unemployed">Unemployed</label>
           
           <input type="radio" id="part-time" name="employment" value="part-time" onChange={handleChange}/>
           <label htmlFor="part-time">Part-time</label>
           
           <input type="radio" id="full-time" name="employment" value="full-time" onChange={handleChange}/>
           <label htmlFor="full-time">Full-time</label>
           </fieldset>
           <br />
           <label htmlFor="favColor">What is your favourite color?</label>
           <select id="favColor" value={formData.favColor} name="favColor" onChange={handleChange}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
           </select>  
           <br />   
           <br />            
           <button>Submit</button>
           </form>
    )
}
