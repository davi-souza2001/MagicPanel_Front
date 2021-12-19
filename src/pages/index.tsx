import Bar from '../components/Bar'
import TableGeral from '../components/TableGeral'

import styles from '../styles/Table.module.css'

interface Table {

}

export default function Table(props: Table) {
    
    return (
        <>
            <Bar />
            <div className={styles.contentTableGeral}>
                <TableGeral />
            </div>
        </>
    )
}
