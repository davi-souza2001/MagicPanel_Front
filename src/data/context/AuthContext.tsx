import client from '../../service/client'

import { createContext, useEffect, useState } from "react";
import route from "next/router";

interface AuthContextProps {
    register: (user: User) => Promise<void>;
    login: (user: User) => Promise<void>;
    logout: (user: User) => Promise<void>;
    user: any;
    authenticated?: Boolean;
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
    const [user, setUser] = useState({})

    //function get token in localstorage and search for user with same token
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            // @ts-ignore
            client.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)

            client.get('/users/checkUser', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                }
            }).then((res) => {
                setUser(res.data)
            })    
        }
    }, [])

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

    async function login(user: User) {
        try {
            const data = await client.post('/users/login', user).then((response) => {
                return response.data
            })
            await authUserSet(data)
        } catch (err) {
            console.log("Errou" + err)
        }
    }

    async function logout() {
        setAuthenticated(false)
        localStorage.removeItem('token')
            // @ts-ignore
        client.defaults.headers.Authorization = undefined
        route.push('/login')
    }

    return (
        <AuthContext.Provider value={{ register, login, authenticated, logout, user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;