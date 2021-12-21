import route from "next/router";
import useAuth from "../data/hook/useAuth";

import styles from '../styles/Bar.module.css'



export default function Bar() {
    const { logout, user } = useAuth()

    if(user){
        console.log(user)
    }
    
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentLogo}>
                <h2>MagicPanel</h2>
            </div>
            <div className={styles.contentOption}>
                <div className={styles.option}onClick={() => route.push('/')}>
                    <p>Add Note</p>
                </div>
                <div className={styles.option}onClick={() => route.push('/')}>
                    <p>Notes</p>
                </div>
                <div className={styles.option}onClick={() => route.push('/favorites')}>
                    <p>Favorites</p>
                </div>
                     {/* @ts-ignore */}
                <div className={styles.option} onClick={logout}>
                    <p>Bem vindo {user ? user?.name : 'não logado'}</p>
                </div>
            </div>
        </div>
    )
}
