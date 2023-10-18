import React, {useState} from 'react'
import { closeFromEditTable, updateTable } from '../redux/table/TableSlice'
import { store } from '../redux/store'
import { useDispatch } from 'react-redux'

export default function FormEditTable({table}) {

    const dispatch = useDispatch()
    const [titleTable, setTitleTable] = useState(table.title)

  return (
    <div className="popup-overlay" onClick={()=>{
        dispatch(closeFromEditTable())
    }}>
        <form className="forms d-flex flex-column bg-white p-3 rounded-3" onSubmit={(e)=>{
            e.preventDefault()
            if(titleTable.length === 0){
                // displayMessage("Veuillez saisir un Texte pour le tableau", "error")
                return
            }
            console.log(table)
            dispatch(updateTable({id_table: table.id, title_table: titleTable, order: table.order, spaceId: table.spaceId}))
        }}
        onClick={(e)=>{
            e.stopPropagation()
        }}
        >
            <div className="form-group">
                <label>Modifier une un tableau</label>
                <input type="text" className="form-control" value={titleTable} onChange={(e)=>{
                    setTitleTable(e.target.value) 
                }} />
            </div>
            <div className="form-group mt-3">
                <input type="submit" className="btn btn-primary" value="Modifier"/>
            </div>
        </form>
    </div>
  )
}
