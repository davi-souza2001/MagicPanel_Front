import Bar from '../components/Bar'
import TableGeral from '../components/TableGeral'

import styles from '../styles/Table.module.css'

interface UserProps {
    createdAt?: String,
    email?: String,
    name?: String,
    updatedAt?: String,
    __v?: number,
    _id?: String
}


export default function Table() {   

    return (
        <>
            <Bar  />
            <div className={styles.contentTableGeral}>
                <TableGeral />
            </div>
        </>
    )
}
