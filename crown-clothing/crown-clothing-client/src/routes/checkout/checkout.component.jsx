
import './checkout.style.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
    const { t } = useTranslation();

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>{t("Product")}</span>
                </div>

                <div className='header-block'>
                    <span>{t("Description")}</span>
                </div>

                <div className='header-block'>
                    <span>{t("Quantity")}</span>
                </div>

                <div className='header-block'>
                    <span>{t("Price")}</span>
                </div>

                <div className='header-block'>
                    <span>{t("Remove")}</span>
                </div>
            </div>
            {cartItems.map((cartItem) => <CheckoutItem key={cartItem._id} cartItem={cartItem}/>)}

            <span className='total'>{t("Total")}: ${cartTotal}.00 </span>
            <PaymentForm/>
            </div>

    )
}

export default Checkout;