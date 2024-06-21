import { useState,useContext } from "react";
import { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    SignInAuthUserWithEmailAndPassword

} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss'
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFeilds = {
    email:'',
    password:'',
}

const SignInForm = () => {

    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds);
    const {email,password} = formFeilds;
    const {setCurrentUser} = useContext(UserContext);

    const handleChange = (event) => { 
        const {name,value} = event.target;
        setFormFeilds({...formFeilds,[name]:value})
    }

    const resetFormFields = () => {
        setFormFeilds(defaultFormFeilds);
    }

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await SignInAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            resetFormFields();
        }catch(err){
            if (err.code === 'auth/invalid-credential' ) alert('Incorrect Email or Password, please try again.')
        }
       
    }

    return (
        <div className="sign-up-container">
            <h2> Don't have an account? </h2>
            <span>
                Sign up with your Email and Password
            </span>

            <form onSubmit={handleSubmit}>
                <FormInput label='Email' required type="email" onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' required type="password" onChange={handleChange} name="password" value={password}/>
                
            </form>

            <div className="buttons-container">
            <Button type='submit' onClick={handleSubmit}>Sign In</Button>

            <Button type='button' onClick={logGoogleUser} buttonType='google'> Google Sign In </Button>
            </div>
               
        </div>
    )
}

export default SignInForm;