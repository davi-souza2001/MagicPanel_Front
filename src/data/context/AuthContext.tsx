import client from '../../service/client'

import { createContext, useState } from "react";
import route from "next/router";

interface AuthContextProps {
    register: (user: User) => Promise<void>;
    login: (user: User) => Promise<void>
}

interface User {
    name?: String
    email: String
    password: String
    confirmpassword?: String
}

// @ts-ignore
const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
    const [authenticated, setAuthenticated] = useState(false)

    async function authUserSet(data: any) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))

        route.push('/')
    }

    async function register(user: User) {
        try {
            const data = await client.post('/users/register', user).then((res) => {
                return res.data
            })
            await authUserSet(data)
        } catch (err) {
            console.log("Errou" + err)
        }
    }

    async function login(user: User){
        console.log(login)
    }

    return (
        <AuthContext.Provider value={{ register, login }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;