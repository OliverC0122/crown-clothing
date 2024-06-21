import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.style.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {

    const {setCurrentUser,currentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-link" to="/">
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="shop">
                    SHOP
                </Link>
                {currentUser ? 
                (<span className="sign-in-link" to="auth" onClick={signOutHandler}>
                    SIGN OUT
                </span>) : 
                (<Link className="sign-in-link" to="auth">
                    SIGN IN
                </Link>)}

            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;