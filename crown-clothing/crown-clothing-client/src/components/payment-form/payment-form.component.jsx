import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './payment-form.styles.scss';
import api from '../../api/axios/axiosConfig';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import PaymentSuccess from "../payment-successful/payment-success.component";
import { clearAllCartItems } from "../../store/cart/cart.reducer";

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser =useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    const dispatch = useDispatch();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsProcessingPayment(true);

        const response = await api.post('/create-payment-intent',
            {amount: amount * 100 },
            {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const clientSecret = response.data.clientSecret; 

        const paymentResult = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.username : 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error){
            alert( paymentResult.error);

        }else{
            if(paymentResult.paymentIntent.status === 'succeeded') {
                setIsPaymentSuccessful(true);
                dispatch(clearAllCartItems());
            }
        }

    }

    return (

        <div className="payment-form-container">
            {isPaymentSuccessful ? (<PaymentSuccess/>) : 
            
            (<form className="form-container" onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement className="card-element"/>
                <div className="payment-button-container">
                    <Button disabled={amount === 0} isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
                </div>
            </form>
            )}
        </div>
    )
}


export default PaymentForm;