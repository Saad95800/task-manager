import React, {useEffect, useState} from 'react'

export default function FormSupTable({tables, deleteTable, closeFormDropTable}) {

    const [idTable, setIdTable] = useState(0)

  return (
    <div className="popup-overlay">
        <div className="m-3 border p-3 rounded-3" style={{backgroundColor: '#ffffffd6'}}>
            <button className="btn btn-danger" onClick={()=>{
                closeFormDropTable()
            }}>Fermer</button>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(idTable !== 0){
                    deleteTable(idTable)
                    setIdTable(0)            
                }
            }}>
                <div className="form-group">
                    <label>Supprimer un tableau</label>
                    <select value={idTable} className="form-control" onChange={(e)=>{
                        setIdTable(e.target.value)
                    }}>
                        <option value={0}>---</option>
                        {tables.map((table, index)=>{
                            return <option key={index} value={table.id}>{table.title}</option>
                        })}
                    </select>
                    <div className="form-group">
                        <input type="submit" className="btn btn-danger mt-3" value="Supprimer"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
