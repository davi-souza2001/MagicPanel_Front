import client from '../../service/client'

import { createContext, useState } from "react";
import route from "next/router";

interface AuthContextProps {
    register?: (user: UserRegister) => Promise<void> | undefined;
}

interface UserRegister {
    name: String
    email: String
    password: String
    confirmPassword: String
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any){
    const [authenticated, setAuthenticated] = useState(false)

    async function authUser(data: any) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
    
        route.push('/')
      }

    async function register(user: UserRegister){
        try {
            const data = await client.post('/users/register', user).then((res) => {
                return res.data
            })
            await authUser(data)
        } catch (err){
            console.log("Errou"+err)
        }
    }

    return(
        <AuthContext.Provider value={{register}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;