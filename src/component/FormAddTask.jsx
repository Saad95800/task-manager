import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, closeFormAddTask } from '../redux/task/TaskSlice'

export default function FormAddTask({tables}) {

    const dispatch = useDispatch()
    const [idTable, setIdTable] = useState(0)
    const [task, setTask] = useState('')

  return (
    <div className="popup-overlay" onClick={()=>{dispatch(closeFormAddTask())}}>
        <div className="m-3 border p-3 rounded-3" style={{backgroundColor: '#ffffffd6'}} onClick={(e)=>{e.stopPropagation()}}>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(idTable !== 0){

                    if(task.length === 0){
                        // displayMessage("Veuillez saisir un Texte pour la tâche", "error")
                        return
                    }

                    dispatch(addTask({task: task, idTable: idTable}))
                    setTask('')
                    setIdTable(0)                
                }
            }}>
                    <div className="form-group">
                        <select className="form-control" value={idTable} onChange={(e)=>{
                            setIdTable(e.target.value)
                        }}>
                            <option value={0}>Choisir un tableau</option>
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
