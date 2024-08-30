import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./newProduct.styles.scss"
import api from '../../api/axios/axiosConfig';
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
    title:"",
    name:"",
    price:"",
    imageUrl:"",
}

const NewProduct = () => {
    const [formFeilds,setFormFeilds] = useState(defaultFormFields);
    const {title,name,price,imageUrl} = formFeilds;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} =  event.target;
        setFormFeilds({...formFeilds,[name]:value});
    }

    const resetFormFields = () => {
        setFormFeilds(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            api.post('/products/new',formFeilds);
            navigate('/products');

        }catch(err){
            console.log(err);
        }
        resetFormFields();
    }

    return (
        <div className="new-product-form-container">
            <h2> Create a New Product </h2>
            
            <span>

            </span>

            <form>

            <FormInput label='Category' type="text" onChange={handleChange} name="title" value={title}/>

            <FormInput label='Name' type="text" onChange={handleChange} name="name" value={name}/>

            <FormInput label='Price' type="number" onChange={handleChange} name="price" value={price}/>

            <FormInput label='ImageUrl' type="text" onChange={handleChange} name="imageUrl" value={imageUrl}/>

            <div className="submit-button-container">
                <Button  onClick={handleSubmit}>Submit</Button>
            </div>
            </form>
        </div>
    )
}

export default NewProduct;