import { useState } from "react";
import route from "next/router";
import useAuth from "../data/hook/useAuth";
import client from '../service/client'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from '../styles/Bar.module.css'

interface Note{
    note: String,
    title: String,
    favorite: Boolean
}

export default function Bar() {
    const { logout, user } = useAuth()
    const [open, setOpen] = useState({ open: false })

    const [note, setNote] = useState('')
    const [title, setTitle] = useState('')
    const [favorite, setFavorite] = useState(false)

    async function registerNote(note: Note){
        const token = localStorage.getItem('token')
        if(token){
            const data = await client.post(
                '/notes/postNewNote', note
            ).then((res) => {
                console.log(res.data)
                window.location.reload()
                return res.data
            }).catch((err) => {
                console.log(err)
                return err.response.data
            })
        }
    }

    async function setNoteData(){
        const noteAll: Note = {note, title, favorite}
        if(user){
            console.log(noteAll)
            registerNote(noteAll)
        }
    }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentLogo}>
                <h2>MagicPanel</h2>
            </div>
            <div className={styles.contentOption}>
                <div className={styles.option} onClick={() => setOpen({ open: true })}>
                    <p>Add Note</p>
                </div>
                <div className={styles.option} onClick={() => route.push('/')}>
                    <p>Notes</p>
                </div>
                <div className={styles.option} onClick={() => route.push('/favorites')}>
                    <p>Favorites</p>
                </div>
                {/* @ts-ignore */}
                <div className={styles.option} onClick={logout}>
                    {user?.email ? (
                        <p>Bem vindo {user ? user?.name : 'não logado'}</p>
                    ): <p>Sem autenticação</p>}
                </div>
                <Dialog
                    open={open.open}
                    onClose={() => setOpen({ open: false })}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Your Note</DialogTitle>
                    <DialogContent onSubmit={setNoteData}>
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
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="note"
                            label="Your note"
                            type="text"
                            fullWidth
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
                            setNoteData()
                            setOpen({ open: false })
                        }} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
