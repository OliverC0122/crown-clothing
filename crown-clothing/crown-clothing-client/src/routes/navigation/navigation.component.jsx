import { Outlet, Link } from "react-router-dom";

import { Fragment,useEffect } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.style.scss';
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { setCurrentUser } from "../../store/user/user.reducer";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();

    const dispatch  = useDispatch();
    
    const currentUser = useSelector(selectCurrentUser); 

    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutCurrentUser = () => {

        dispatch(setCurrentUser(null));
    }


    // Use useEffect to perform side effects
    useEffect(() => {

    }, [currentUser]); // effect runs when currentUser changes

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-link" to="/">
                <CrownLogo className="logo"/>
            </Link>

            <div className="nav-links-container">

                <Link className="nav-link" to="products">
                    {t("Products")}
                </Link>

                <Link className="nav-link" to="support">
                    {t("Support")}
                </Link>

                <Link className="nav-link" to="contactus">
                    {t("Contact Us")}
                </Link>

                {currentUser ? 
                (<div className="admin-links-container">
                <Link className="nav-link" to="new">
                    {t("New Product")}
                </Link>

                <span className="nav-link" onClick={signOutCurrentUser}>
                    {t("Sign Out")}
                </span>
                </div>
                
                ) : 
                (<Link className="nav-link" to="auth">
                    {t("Sign In")}
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