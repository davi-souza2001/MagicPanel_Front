import { useEffect, useState } from 'react'
import client from '../service/client'
import useAuth from '../data/hook/useAuth'

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
    const [token, setToken] = useState('')
    const [user, setUser] = useState<UserProps>({})
    const { authenticated } = useAuth()

    useEffect(() => {
        if (authenticated) {
            // @ts-ignore
            setToken(localStorage.getItem('token') )
        }
    }, [authenticated])

    useEffect(() => {
        if(authenticated){
            client.get('/users/checkUser', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                }
            }).then((res) => {setUser(res.data)})
        }
    }, [token])

    return (
        <>
            <Bar name={user?.name} />
            <div className={styles.contentTableGeral}>
                <TableGeral />
            </div>
        </>
    )
}
