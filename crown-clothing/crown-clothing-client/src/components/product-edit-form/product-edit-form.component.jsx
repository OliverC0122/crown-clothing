import { useParams, useNavigate } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import { useEffect,useState } from 'react';
import Button from '../../components/button/button.component';
import api from '../../api/axios/axiosConfig';
import './product-edit-form.styles.scss';

const defaultFormFields = {
    name:"",
    price:"",
    imageUrl:"",
}

const ProductEdit = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [formFeilds,setFormFeilds] = useState(defaultFormFields);
    const {name,price,imageUrl} = formFeilds;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                const {_id,__v,...data} = response.data;
                setFormFeilds(data);
            } catch (error) {
                console.error(error);
            }
        };
        getProduct();
        
    }, [id]);

    const handleChange = (event) => {
        const {name, value} =  event.target;
        setFormFeilds({...formFeilds,[name]:value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            api.put(`/products/${id}`,formFeilds);
            navigate(`/products/display/${id}`);

        }catch(err){
            console.log(err);
        }

    }

    return (
        <div className="edit-form-container">
            <h2>  Edit Product </h2>
            
            <span>

            </span>

            <form>

            <FormInput label='Name' type="text" onChange={handleChange} name="name" value={name}/>

            <FormInput label='Price' type="text" onChange={handleChange} name="price" value={price} />

            <FormInput label='ImageUrl' type="text" onChange={handleChange} name="imageUrl" value={imageUrl}/>

            <div className="submit-button-container">
                <Button  onClick={handleSubmit}>Submit</Button>
            </div>
            </form>
        </div>
    );
    }
export default ProductEdit;