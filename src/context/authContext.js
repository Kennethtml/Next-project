import { createContext ,useState,useEffect} from "react";
import { authEventListener } from "../firebase";

export const AuthContext = createContext(
    {
        user:null,
        setUser:()=>null
    }
);


export const AuthContextProvider = ({ children }) => {

 



  const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
  const value = { user, setUser };

   useEffect(() => {
    setIsLoading(true)
     const unsubscribe = authEventListener((user) =>{
       setUser(user)
       setIsLoading(false)
     })
       return unsubscribe;
     
     
    
   }, []);




  return <AuthContext.Provider value={value}>
    {!isLoading&&children}
     {/* if were not loading dont render our component */}
  
  </AuthContext.Provider>;
};
