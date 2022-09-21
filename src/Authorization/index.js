import { Navigate } from "react-router-dom";
import { LoginContext } from "../Pages/Login";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export const Authorization = ({children}) => {
    const context = useContext(LoginContext)
    const location = useLocation()
    console.log(location);

    if(!context.value){
       return <Navigate to="/login" state={{from: location}}/>
    }
    return children
}