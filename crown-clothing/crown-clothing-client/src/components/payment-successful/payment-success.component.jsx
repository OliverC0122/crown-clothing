import './payment-success.styles.scss';
import { useTranslation } from 'react-i18next';

const PaymentSuccess = () => {
    const { t } = useTranslation();
    return (
        <div className="payment-success-container">
            <h2>{t("Payment Successful!")}</h2>
            <p>{t("Thank you for your purchase.")}</p>
        </div>
    );

};

export default PaymentSuccess;