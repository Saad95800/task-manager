import React, {useState} from 'react'
import { displayMessage } from '../redux/message/MessageSlice'
import { store } from '../redux/store'
import { closeFormAddTable, addTable, setFormAddTableVisible } from '../redux/table/TableSlice'
import { useDispatch } from 'react-redux'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styleModal } from '../utils/styles'
import { useParams } from 'react-router-dom'

export default function FormAddTable() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const { spaceId } = useParams()
  return (
    <Modal
        open={true}
        onClose={()=>{ dispatch(closeFormAddTable()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
            <Box className="m-3 border p-3 rounded-3 bg-forms" style={{...styleModal, backgroundColor: '#ffffffd6'}}>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    if(title.length > 0){
                        dispatch(addTable({title: title, spaceId: spaceId}))
                        dispatch(displayMessage({texte: "Tableau ajouté avec succès !", typeMessage: "success"}))
                        dispatch(closeFormAddTable())
                    }else{
                        // displayMessage("Veuillez saisir un titre au tableau !", "error")
                    }
                }}>
                    <Typography>Ajouter un tableau</Typography>
                    <div className="form-group">
                        <input type="text" className="form-control" value={title} onChange={(e)=>{
                            setTitle(e.target.value)
                        }} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary mt-3" value="Ajouter"/>
                    </div>
                </form>        
            </Box>            
    </Modal>
    



  )
}
