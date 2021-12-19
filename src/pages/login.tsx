import { useState } from 'react'
import useAuth from '../data/hook/useAuth'
import styles from '../styles/Login.module.css'

interface Login {
    
}

interface User{
    name: String
    email: String
    password: String
    confirmPassword: String
}


export default function Login(props: Login){
    const [registerLook, setRegisterLook] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const user: User = {name, email, password, confirmPassword}

    const { register } = useAuth()

    function handleSubmit(e: any){
        e.preventDefault()
        if(registerLook){
            console.log(user)
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
                    {registerLook && <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Digite sua confirmação de senha" onChange={(e) => setConfirmPassword(e.target.value)}/>}
                    <input type="submit" value={registerLook ? 'Registrar' : 'Logar'}  />
                </form>
                <p onClick={() => setRegisterLook(true)}>Não tem uma conta ? Clique aqui</p>
            </div>
        </div>
    )
}
