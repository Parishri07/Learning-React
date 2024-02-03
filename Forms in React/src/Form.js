import React from "react"

export default function Form(){
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email:"", comments: "", isFriendly: true}) 
    
    function handleChange(click){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    
    console.log(formData)
    
    return (
        <form>
           <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
           <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName}/>
           <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email}/>
           <textArea placeholder="Enter text" onChange={handleChange} name="comments" value={formData.comments}/>
           <input type="checkbox" id="isFriendly" checked={formData.isFriendly} name="isFriendly" onChange={handleChange}/>
           <label htmlFor="isFriendly">Are you friendly?</label>
           </form>
    )
}
