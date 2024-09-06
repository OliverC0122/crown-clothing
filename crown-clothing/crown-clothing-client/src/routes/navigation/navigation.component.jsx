import { Outlet, Link } from "react-router-dom";

import { Fragment,useEffect } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.style.scss';

import { useSelector, useDispatch } from "react-redux";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {

    const dispatch  = useDispatch();
    
    const currentUser = useSelector(selectCurrentUser); 

    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutCurrentUser = () => {

        dispatch(signOutStart());
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
                    Products
                </Link>

                <Link className="nav-link" to="support">
                    Support 
                </Link>

                <Link className="nav-link" to="contactus">
                    Contact Us
                </Link>

                {currentUser ? 
                (<div className="admin-links-container">
                <Link className="nav-link" to="new">
                    Add New Products
                </Link>

                <span className="nav-link" onClick={signOutCurrentUser}>
                    Sign Out
                </span>
                </div>
                
                ) : 
                (<Link className="nav-link" to="auth">
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