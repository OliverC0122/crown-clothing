
import './button.style.scss'
import Spinner from '../spinner/spinner.component';

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted : 'inverted'
}


const Button = ({children, buttonType, isLoading,...otherProps}) => {
    return (
        <button disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}>
            {isLoading? <Spinner/> : children}
        </button>
    )
}

export default Button;