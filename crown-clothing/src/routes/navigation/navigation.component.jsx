import { Outlet, Link } from "react-router-dom";

import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.style.scss';

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";


const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-link" to="/">
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">

                <Link className="nav-link" to="/">
                    Home
                </Link>

                <Link className="nav-link" to="products">
                    Products
                </Link>

                <Link className="nav-link" to="support">
                    Support 
                </Link>

                <Link className="nav-link" to="contactus">
                    Contact Us
                </Link>

                {currentUser ? 
                (<span className="sign-in-link" to="auth" onClick={signOutUser}>
                    Sign Out
                </span>) : 
                (<Link className="sign-in-link" to="auth">
                    Sign In
                </Link>)}

                <Link className="cart-link">
                    <CartIcon/>
                </Link>

            </div>  
            {isCartOpen && <CartDropdown/> }
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;