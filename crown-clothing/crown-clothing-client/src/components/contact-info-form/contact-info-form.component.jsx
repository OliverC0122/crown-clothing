import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./contact-info-form.styles.scss"
import Button from "../button/button.component";
import { useTranslation } from "react-i18next";


const defaultFormFeilds = {
    name: '',
    email:'',
    phone: '',
    message: '',
}

const ContactInfoForm = () => {

    const {t} = useTranslation();

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
            <h2> {t("Contact Us")} </h2>
            <span>
                {t("Welcome")}
            </span>

            <form onSubmit={handleSubmit}>

                <FormInput label={t("name")} type="text" onChange={handleChange} name="name" value={name}/>

                <FormInput label={t("email")} required type="email" onChange={handleChange} name="email" value={email}/>

                <FormInput label={t('Phone')}  type="text" onChange={handleChange} name="phone" value={phone}/>

                <FormInput label={t('Message')} type="text" onChange={handleChange} name="message" value={message}/>
                
                <div className="submit-button-container">
                    <Button  onClick={handleSubmit}>{t("Submit")}</Button>
                </div>

            </form>
        </div>
    )
    
}

export default ContactInfoForm;