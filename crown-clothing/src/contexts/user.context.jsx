
import { createContext,useState } from "react";


//userContext store the data to share across the components
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})


//Context provider is a funcitonal component to wrap around other components.
export const UserProvider = ({children}) => {

    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
    
    return ( 
    <UserContext.Provider value ={value}> 
        {children} 
    </UserContext.Provider> 
    )
}