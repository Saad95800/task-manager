import React, {useState} from 'react'
import { closeFromEditTable, updateTable } from '../redux/table/TableSlice'
import { store } from '../redux/store'
import { useDispatch } from 'react-redux'
import { updateTableAPI } from '../api/TableApi'

export default function FormEditTable({table}) {

    const dispatch = useDispatch()
    const [titleTable, setTitleTable] = useState(table.title)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(titleTable.length === 0){
            // displayMessage("Veuillez saisir un Texte pour le tableau", "error")
            return
        }

        let newTable = {
                            "fields": {
                                "id": {
                                "stringValue": table.id
                                },
                                "title": {
                                "stringValue": titleTable
                                },
                                "order": {
                                "stringValue": table.order.toString()
                                },
                                "spaceId": {
                                "stringValue": table.spaceId.toString()
                                }
                            }
                        }

        await updateTableAPI(newTable)
        dispatch(updateTable({id_table: table.id, title_table: titleTable, order: table.order, spaceId: table.spaceId}))
    }

  return (
    <div className="popup-overlay" onClick={()=>{
        dispatch(closeFromEditTable())
    }}>
        <form className="forms d-flex flex-column bg-white p-3 rounded-3" onSubmit={handleSubmit}
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
