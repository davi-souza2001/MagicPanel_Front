import { useEffect, useState } from 'react'
import client from '../service/client'
import useAuth from '../data/hook/useAuth';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from '../styles/TableGeral.module.css'


interface TableFavorite {

}

export default function TableFavorite(props: TableFavorite) {
    const [notes, setNotes] = useState([])
    const { user } = useAuth()


    useEffect(() => {
        client.get('/notes/getAllNotes').then((notes: any) => {
            setNotes(notes.data)
        }).catch((err) => console.log(err))
    }, [])

    async function removeNote(id: String){
        if(user?.email != ''){
            client.delete(`/notes/delete/${id}`).then((res) => {
                console.log('Apagado'+ res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            {notes && notes.map((data: any, key: any) => {
                if(data.favorite === true){
                    return (
                        <Card className={styles.tableGeral} raised key={key}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        {data.title}
                                    </Typography>
                                    <Typography component="p">
                                        {data.note}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                                <Button size="small" color="secondary" onClick={() => removeNote(data._id)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    )
                }
            })}
        </>
    )
}
