import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setColor,addSpace, setViewFormEditSpace, updateSpace } from '../redux/space/SpaceSlice'
import CloseIcon from '@mui/icons-material/Close'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styleModal } from '../utils/styles'
import { displayMessage } from '../redux/message/MessageSlice';

export default function FormEditSpace() {

    const dispatch = useDispatch()
    const title = useSelector(state => state.space.title)
    const color = useSelector(state => state.space.color)
    const context = useSelector(state => state.space.context)
    const spaceToEdit = useSelector(state => state.space.spaceToEdit)

    useEffect(() => {

        if(context === 'edit') {
            dispatch(setTitle(spaceToEdit.title))
        }

        return ()=>{
            // Ce code s'éxécute lorsque le composant disparait
            dispatch(setTitle(''))
            dispatch(setColor('#fff'))
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.length === 0){
            dispatch(displayMessage({
                texte: "Veuillez saisir un titre",
                typeMessage: "error"
            }))
            return
        }

        let message = "Espace ajouté avec succès !"
        if(context === 'edit'){
            dispatch(updateSpace({
                id: spaceToEdit.id,
                title: title,
                color: color
            })) 
            message = "Espace modifié avec succès !"
        }else{
            dispatch(addSpace({
                title: title,
                color: color
            }))            
        }


        dispatch(displayMessage({
            texte: message,
            typeMessage: "success"
        }))

    }

  return (
    <>
        <div>
            <Modal
                open={true}
                onClose={()=>{dispatch(setViewFormEditSpace(false))}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <CloseIcon onClick={()=>{
                        dispatch(setViewFormEditSpace(false))
                    }} style={{position: 'absolute', top: '10px', right: '10px', width: '35px', height: '35px'}}/>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {context === 'edit' ? 'Editer un espace' : 'Ajouter un espace'}
                </Typography>
                
                <div>
                    <form className="forms" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="text" value={title} onChange={(e)=>{
                                    dispatch(setTitle(e.target.value))
                                }}/>
                            </div>
                            <label htmlFor="color" className="form-label">Couleur</label>
                            <input type="color" className="form-control form-control-color" id="color" value={color} title="Choississez la couleur"
                                onChange={(e)=>{
                                    dispatch(setColor(e.target.value))
                                }} />
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">
                                    {context === 'edit' ? 'Modifier' : 'Ajouter'}
                                </button>
                            </div>
                        </form>
                </div>
                </Box>
            </Modal>
        </div>

    </>
  )
}
