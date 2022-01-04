import Bar from '../components/Bar'
import TableGeral from '../components/TableGeral'
import useAuth from '../data/hook/useAuth'
import ForceAuthentication from '../components/ForceAuthenticated'


import styles from '../styles/Table.module.css'

export default function Table() {

    const { user } = useAuth()

    return (
        <>
            <Bar />
            <div className={styles.contentTableGeral}>
                <TableGeral />
            </div>
        </>
    )
}
