
import { createContext,useState } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import api from '../api/axios/axiosConfig';
//userContext store the data to share across the components
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    signOutUser: () => null,
}
)

//Context provider is a funcitonal component to wrap around other components.
export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);

    const signOutUser = async () => {
        try {
            await api.get('/logout');
            setCurrentUser(null);
        } catch (error) {
            console.error('Failed to sign out', error);
        }
    };

    const value = {currentUser,setCurrentUser,signOutUser};
    
    return ( 
    <UserContext.Provider value={value}> 
        {children} 
    </UserContext.Provider> 
    )
}