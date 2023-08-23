import React, {useState } from 'react'

export default function FormAddTask({tables, addTask}) {

    const [idTable, SetIdTable] = useState(null)
    const [task, setTask] = useState('')

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            addTask(task, idTable)
            setTask('')
        }}>
                <div className="form-group">
                    <select className="form-control" onChange={(e)=>{
                        SetIdTable(e.target.value)
                    }}>
                        {tables.map((table, index)=>{
                            return <option key={index} value={table.id}>{table.title}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Tâche</label>
                    <input type="text" value={task} onChange={(e)=>{
                        setTask(e.target.value)
                    }} />
                    <input type="submit" value="Ajouter une tâche" /> 
                </div>
        </form>
    </div>
  )
}
