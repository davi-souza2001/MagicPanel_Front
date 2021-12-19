import route from "next/router";

import styles from '../styles/Bar.module.css'

interface Bar {

}

export default function Bar(props: Bar) {
    
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
                <p className={styles.option}>Bem vindo Davi</p>
            </div>
        </div>
    )
}
