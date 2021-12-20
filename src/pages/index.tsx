import { useEffect, useState } from 'react'
import client from '../service/client'

import Bar from '../components/Bar'
import TableGeral from '../components/TableGeral'

import styles from '../styles/Table.module.css'

interface UserProps{
    createdAt?: String,
    email?: String,
    name?: String,
    updatedAt?: String,
    __v?: number,
    _id?: String
}


export default function Table() {
    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState<UserProps>({})

    useEffect(() => {
        client.get('/users/checkUser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((res) => {setUser(res.data)})
    }, [token])

    console.log(user)
    return (
        <>
            <Bar name={user?.name}/>
            <div className={styles.contentTableGeral}>
                <TableGeral />
            </div>
        </>
    )
}
