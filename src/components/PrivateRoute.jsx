
import { Navigate } from "react-router-dom";

function PrivateRoute({children, user}) {

    if(!user){
        return <Navigate to="/"/>
    }

  
       return(
        <div>
            {children}
        </div>
       )
    
  
}

export default PrivateRoute