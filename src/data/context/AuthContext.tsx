import { createContext, useState } from "react";

interface AuthContextProps {
    alo?: any;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any){

    const [alo, setAlo] = useState('PEGGGGGGGGGGGGGGGGGGOUY');

    return(
        <AuthContext.Provider value={{alo}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;