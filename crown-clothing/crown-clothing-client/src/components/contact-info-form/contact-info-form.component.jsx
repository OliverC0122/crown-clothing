import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./contact-info-form.styles.scss"
import Button from "../button/button.component";

const defaultFormFeilds = {
    name: '',
    email:'',
    phone: '',
    message: '',
}

const ContactInfoForm = () => {

    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds);
    const {name,email,phone,message} = formFeilds;

    const handleChange = (event) => { 
        const {name,value} = event.target;
        setFormFeilds({...formFeilds,[name]:value})

    }

    const resetFormFields = () => {
        setFormFeilds(defaultFormFeilds);
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        
        if(!email){
            alert('Email is required');
        }else{
            resetFormFields();
        }
    }

    return (
        <div className="contact-info-container">
            <h2> Contact Us </h2>
            <span>
                Welcome. We are here to help.
            </span>

            <form onSubmit={handleSubmit}>

                <FormInput label='Name' type="text" onChange={handleChange} name="name" value={name}/>

                <FormInput label='Email' required type="email" onChange={handleChange} name="email" value={email}/>

                <FormInput label='Phone'  type="text" onChange={handleChange} name="phone" value={phone}/>

                <FormInput label='Message' type="text" onChange={handleChange} name="message" value={message}/>
                
                <div className="submit-button-container">
                    <Button  onClick={handleSubmit}>Submit</Button>
                </div>

            </form>
        </div>
    )
    
}

export default ContactInfoForm;