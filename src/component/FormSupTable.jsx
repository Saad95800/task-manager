import React, {useState} from 'react'

export default function FormSupTable({tables, deleteTable}) {
console.log(tables)
    const [idTable, setIdTable] = useState(null)

  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        if(idTable !== null)
        deleteTable(idTable)
    }}>
        <div className="form-group">
            <label>Supprimer un tableau</label>
            <select value={idTable} className="form-control" onChange={(e)=>{
                setIdTable(e.target.value)
            }}>
                {tables.map((table, index)=>{
                    return <option key={index} value={table.id}>{table.title}</option>
                })}
            </select>
            <div className="form-group">
                <input type="submit" className="btn btn-danger" value="Supprimer"/>
            </div>
        </div>
    </form>
  )
}
