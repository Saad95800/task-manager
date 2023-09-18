import React, {useState} from 'react'

export default function FormEditTable({table, closeFromEditTable, updateTable}) {

    const [titleTable, setTitleTable] = useState(table.title)

  return (
    <div className="popup-overlay" onClick={()=>{
        closeFromEditTable()
    }}>
        <form className="forms d-flex flex-column bg-white p-3 rounded-3" onSubmit={(e)=>{
            e.preventDefault()
            if(titleTable.length === 0){
                // displayMessage("Veuillez saisir un Texte pour le tableau", "error")
                return
            }
            updateTable(table.id, titleTable)
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
