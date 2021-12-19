import useAuth from '../data/hook/useAuth'
import styles from '../styles/Login.module.css'

interface Login {
    
}


export default function Login(props: Login){
    const { alo } = useAuth()

    console.log(alo)

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentBox}>
                <h2>Login</h2>
                <form action="">
                    <input type="text" name="email" id="email" placeholder="Digite seu email" />
                    <input type="text" name="password" id="password" placeholder="Digite sua senha" />
                    <input type="submit" value="Logar"  />
                </form>
                <p>Não tem uma conta ? Clique aqui</p>
            </div>
        </div>
    )
}
