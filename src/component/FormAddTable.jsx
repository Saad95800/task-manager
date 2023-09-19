import React, {useState} from 'react'
import { displayMessage } from '../redux/message/MessageSlice'
import { store } from '../redux/store'
import { closeFormAddTable, addTable } from '../redux/table/TableSlice'
import { useDispatch } from 'react-redux'

export default function FormAddTable() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

  return (
    <div className="popup-overlay">
        <div className="m-3 border p-3 rounded-3 bg-forms" style={{margin: 'auto', backgroundColor: '#ffffffd6'}}>
            <button className="btn btn-danger" onClick={()=>{
                dispatch(closeFormAddTable())
            }}>Fermer</button>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(title.length > 0){
                    dispatch(addTable({title: title}))
                    dispatch(displayMessage({texte: "Tableau ajouté avec succès !", typeMessage: "success"}))
                    dispatch(closeFormAddTable())
                }else{
                    // displayMessage("Veuillez saisir un titre au tableau !", "error")
                }
            }}>
                <div className="form-group">
                    <label>Ajouter un tableau</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary mt-3" value="Ajouter"/>
                </div>
            </form>        
        </div>        
    </div>


  )
}
