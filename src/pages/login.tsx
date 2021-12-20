import { useState } from 'react'
import useAuth from '../data/hook/useAuth'

import styles from '../styles/Login.module.css'

interface User {
    name: String
    email: String
    password: String
    confirmpassword: String
}


export default function Login(){
    const [registerLook, setRegisterLook] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const { register } = useAuth()

    const user: User = {name, email, password, confirmpassword}

    function handleSubmit(e: any){
        e.preventDefault()
        if(registerLook){
            console.log(user)
            register(user)
        }else{
            console.log('não tem')
        }
    }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentBox}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                {registerLook && <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>}
                    <input type="text" name="email" id="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" name="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                    {registerLook && <input type="text" name="confirmpassword" id="confirmPassword" placeholder="Digite sua confirmação de senha" onChange={(e) => setConfirmPassword(e.target.value)}/>}
                    <input type="submit" value={registerLook ? 'Registrar' : 'Logar'}  />
                </form>
                <p onClick={() => setRegisterLook(true)}>Não tem uma conta ? Clique aqui</p>
            </div>
        </div>
    )
}
