import { useState } from "react";
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,

} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.style.scss'
import Button from "../button/button.component";

const defaultFormFeilds = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () => {

    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds);
    const {displayName,email,password,confirmPassword} = formFeilds;

    const handleChange = (event) => { 
        const {name,value} = event.target;
        setFormFeilds({...formFeilds,[name]:value})
    }

    const resetFormFields = () => {
        setFormFeilds(defaultFormFeilds);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword){
            alert('password do not match');
            return;
        }

        try{

            const response = await createAuthUserWithEmailAndPassword(email,password);
            const {user} = response;
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        }catch(err){
            if (err.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use');
            }else{
                console.log(err);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2> Don't have an account? </h2>
            <span>
                Sign up with your Email and Password
            </span>

            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' required type="text" onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label='Email' required type="email" onChange={handleChange} name="email" value={email}/>

                <FormInput label='Password' required type="password" onChange={handleChange} name="password" value={password}/>

                <FormInput label='Confirm Password' required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;