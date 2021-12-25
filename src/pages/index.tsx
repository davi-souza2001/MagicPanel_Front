import route from "next/router";
import Bar from '../components/Bar'
import TableGeral from '../components/TableGeral'
import useAuth from '../data/hook/useAuth'


import styles from '../styles/Table.module.css'

export default function Table() {

    const { user } = useAuth()

    return (
        <>
            {user?.email != undefined ?(
                <>
                    <Bar />
                    <div className={styles.contentTableGeral}>
                        <TableGeral />
                    </div>
                </>
            ): (
                <div style={{
                    height: '100vh',
                     width: '100vw', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center'}}>
                    <h2 style={{cursor: 'pointer'}}
                    onClick={() => route.push('/login')}
                    >Fazer login</h2>
                </div>
            )}
        </>
    )
}
