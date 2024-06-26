import { Outlet, Link } from "react-router-dom";

import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { NavigationContainer,NavLink,NavLinksContainer,LogoContainer } from "./navigation.styles";

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
        <NavigationContainer>
            <LogoContainer to="/">
                <CrownLogo className="logo"/>
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to="shop">
                    SHOP
                </NavLink>
                {currentUser ? 
                (<span className="sign-in-link" to="auth" onClick={signOutUser}>
                    SIGN OUT
                </span>) : 
                (<Link className="sign-in-link" to="auth">
                    SIGN IN
                </Link>)}

                <Link className="cart-link">
                    <CartIcon/>
                </Link>

            </NavLinksContainer>  
            {isCartOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;