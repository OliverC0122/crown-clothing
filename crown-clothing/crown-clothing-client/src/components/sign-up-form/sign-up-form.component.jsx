import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import api from '../../api/axios/axiosConfig'

import FormInput from "../form-input/form-input.component";
import './sign-up-form.style.scss'
import Button from "../button/button.component";



const defaultFormFeilds = {
    username: '',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () => {

    const {currentUser,setCurrentUser} = useContext(UserContext);


    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds);
    const {username,email,password,confirmPassword} = formFeilds;
    const navigate = useNavigate();

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
            
            const res = await api.post('/register', {
                username,
                email,
                password
            });
            
            // set the currentUser
            console.log(res);
            setCurrentUser(res.data);
            if (currentUser){
                navigate(-1);
            }

            resetFormFields();

        }catch(err){
            
            console.log(err);
        }
    }

    return (
        <div className="sign-up-container">
            <h2> Don't have an account? </h2>
            <span>
                Sign up with your Email and Password
            </span>

            <form onSubmit={handleSubmit}>

                <FormInput label='Username' required type="text" onChange={handleChange} name="username" value={username}/>

                <FormInput label='Email' required type="email" onChange={handleChange} name="email" value={email}/>

                <FormInput label='Password' required type="password" onChange={handleChange} name="password" value={password}/>

                <FormInput label='Confirm Password' required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <div className="sign-up-button-container"><Button type='submit'>Sign Up</Button></div>

            </form>
        </div>
    )
}

export default SignUpForm;