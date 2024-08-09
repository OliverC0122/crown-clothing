
import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//userContext store the data to share across the components
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
}
)

//Context provider is a funcitonal component to wrap around other components.
export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    useEffect(
        () => {
            const unsubscribe =  onAuthStateChangedListener((user) => {

                if (user) {
                    createUserDocumentFromAuth(user);
                }
                setCurrentUser(user);

            })
            return unsubscribe;
        }
        ,[]
    );
    
    return ( 
    <UserContext.Provider value={value}> 
        {children} 
    </UserContext.Provider> 
    )
}