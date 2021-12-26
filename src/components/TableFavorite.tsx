import { useEffect, useState } from 'react'
import client from '../service/client'
import useAuth from '../data/hook/useAuth';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from '../styles/TableGeral.module.css'

interface Note{
    note: String,
    title: String,
    favorite: Boolean
}


export default function TableGeral() {
    const [notes, setNotes] = useState([])
    const { user } = useAuth()
    const [open, setOpen] = useState({ open: false })

    const [note, setNote] = useState('')
    const [title, setTitle] = useState('')
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        client.get('/notes/getAllNotes').then((notes: any) => {
            setNotes(notes.data)
        }).catch((err) => console.log(err))
    }, [])

    async function editNote(id: String) {
        const noteAll: Note = {note, title, favorite}
        const token = localStorage.getItem('token')

        if (token) {
            client.patch(`/notes/edit/${id}`, noteAll).then((note: any) => {
                console.log(note.data)
                window.location.reload()
            }).catch((err) => {console.log(err)})
        }
    }

    async function removeNote(id: String) {
        if (user?.email != '') {
            client.delete(`/notes/delete/${id}`).then((res) => {
                console.log('Apagado' + res.data)
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    function renderNotes() {
        return notes?.map((data: any, key: any) => {
            if (data.email == user?.email && data.favorite == true) {
                return (
                    <Card className={styles.tableGeral} raised key={key}>
                        <CardActionArea >
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
                            <Button size="small" color="secondary" onClick={() => removeNote(data._id)}>
                                Delete
                            </Button>
                            <Button size="small" color="primary" onClick={() => {
                                setNote(data.note)
                                setTitle(data.title)
                                setOpen({ open: true })}
                            }>
                                Edit
                            </Button>
                        </CardActions>

                        <Dialog
                            open={open.open}
                            onClose={() => setOpen({ open: false })}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Edit Your Note</DialogTitle>
                            <DialogContent >
                                <DialogContentText>
                                    Make a note you need to remember.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="note"
                                    label="Your Title for note"
                                    type="text"
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <TextField
                                    margin="dense"
                                    id="note"
                                    label="Your note"
                                    type="text"
                                    fullWidth
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                                <TextField
                                    margin="dense"
                                    id="favorite"
                                    label="Bookmark it?"
                                    type="checkbox"
                                    fullWidth
                                    onChange={() => setFavorite(true)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpen({ open: false })} color="secondary">
                                    Cancel
                                </Button>
                                <Button onClick={() => {
                                    editNote(data._id)
                                    setOpen({ open: false })
                                }} color="primary">
                                    Edit
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                )
            }
        })
    }
    return (
        <>
            {renderNotes()}
        </>
    )
}
