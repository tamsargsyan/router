import { createContext, useContext, useState } from "react"
import { useLocation, Navigate, useNavigate } from "react-router-dom"

export const LoginContext = createContext()
export const Login = () =>{
    const location = useLocation()
    const nav = useNavigate()
    console.log(typeof location.state.from.pathname);

    const context = useContext(LoginContext)
    console.log(context)

    const validate = (value) =>{
        if(value.length > 3){
            context.setValue(true)
            nav(location.state.from.pathname)
            // return <Navigate to={location.state.from.pathname} replace/>
        } else {
            context.setValue(false)
        }
    }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={(e) =>{
            e.preventDefault();
            validate(e.target[0].value)
        }}>
            <input type="text" placeholder="email" />
            <input type="submit" value = "enter"/>
        </form>
        </>
    )
}

export const LoginProvider = ({children}) => {
    const [value , setValue] = useState(false);
    const obj = {value, setValue}
    return (
        <LoginContext.Provider value={obj}>
            {children}
        </LoginContext.Provider>
    )
}
