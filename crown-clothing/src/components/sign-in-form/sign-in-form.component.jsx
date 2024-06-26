import { useState } from "react";
import { 
    signInWithGooglePopUp,
    SignInAuthUserWithEmailAndPassword

} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import {ButtonsContainer,SignUpContainer} from './sign-in-form.styles.jsx'
import Button, {BUTTON_TYPE_CLASSES}from "../button/button.component";


const defaultFormFeilds = {
    email:'',
    password:'',
}

const SignInForm = () => {

    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds);
    const {email,password} = formFeilds;

    const handleChange = (event) => { 
        const {name,value} = event.target;
        setFormFeilds({...formFeilds,[name]:value})
    }

    const resetFormFields = () => {
        setFormFeilds(defaultFormFeilds);
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopUp();

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await SignInAuthUserWithEmailAndPassword(email,password);

            resetFormFields();
        }catch(err){
            if (err.code === 'auth/invalid-credential' ) alert('Incorrect Email or Password, please try again.')
        }
       
    }

    return (
        <SignUpContainer>
            <h2> Don't have an account? </h2>
            <span>
                Sign up with your Email and Password
            </span>

            <form onSubmit={handleSubmit}>
                <FormInput label='Email' required type="email" onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' required type="password" onChange={handleChange} name="password" value={password}/>
                
            </form>

            <ButtonsContainer>
            <Button type='submit' onClick={handleSubmit}>Sign In</Button>

            <Button buttonType={BUTTON_TYPE_CLASSES.google}type='button' onClick={logGoogleUser} > Google Sign In </Button>
            </ButtonsContainer>
               
        </SignUpContainer>
    )
}

export default SignInForm;