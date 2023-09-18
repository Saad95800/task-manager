import React, {useState } from 'react'

export default function FormAddTask({tables, addTask, closeFormAddTask}) {

    const [idTable, setIdTable] = useState(0)
    const [task, setTask] = useState('')

  return (
    <div className="popup-overlay">
        <div className="m-3 border p-3 rounded-3" style={{backgroundColor: '#ffffffd6'}}>
            <button className="btn btn-danger" onClick={()=>{
                closeFormAddTask()
            }}>Fermer</button>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(idTable !== 0){

                    if(task.length === 0){
                        // displayMessage("Veuillez saisir un Texte pour la tâche", "error")
                        return
                    }

                    addTask(task, idTable)
                    setTask('')
                    setIdTable(0)                
                }
            }}>
                    <div className="form-group">
                        <select className="form-control" value={idTable} onChange={(e)=>{
                            setIdTable(e.target.value)
                        }}>
                            <option value={0}>---</option>
                            {tables.map((table, index)=>{
                                return <option key={index} value={table.id}>{table.title}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Tâche</label>
                        <input type="text" className="form-control" value={task} onChange={(e)=>{
                            setTask(e.target.value)
                        }} />
                        <input type="submit" className="btn btn-primary mt-3" value="Ajouter une tâche" /> 
                    </div>
            </form>
        </div>
    </div>

  )
}
