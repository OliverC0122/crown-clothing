import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss'
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.reducer";
import api from '../../api/axios/axiosConfig';
import { useTranslation } from "react-i18next";

const defaultFormFeilds = {
    username:'',
    password:'',
}

const SignInForm = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds);
    const {username,password} = formFeilds;
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
    
        try {
            const res = await api.post('/login',{username,password});
            dispatch(setCurrentUser(res.data.user));
            navigate(-1);
            resetFormFields();
    
    
        } catch (err) {

            if (err.response) {
                if (err.response.status === 401) {
                    alert('Incorrect Email or Password, please try again.');
                } else if (err.response.status === 404) {
                    console.error('Endpoint not found:', err.response.config.url);
                    alert('Login endpoint not found. Please check the URL.');
                } else {
                    console.error('Error during login:', err);
                    alert('An error occurred. Please try again.');
                }
            } else {
                console.error('Error during login:', err);
                alert('An error occurred. Please try again.');
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2> {t("Sign in header")} </h2>
            <span>
                {t("Sign In Prompt")}
            </span>

            <form onSubmit={handleSubmit}>
                <FormInput label={t("Username")} required type="text" onChange={handleChange} name="username" value={username}/>
                <FormInput label={t("Password")} required type="password" onChange={handleChange} name="password" value={password}/>
            </form>

            <div className="signin-button-container">
            <Button type='submit' onClick={handleSubmit}>Sign In</Button>
            </div>
               
        </div>
    )
}

export default SignInForm;