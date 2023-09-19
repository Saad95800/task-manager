import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeFormEditTask, updateTask } from '../redux/task/TaskSlice'

export default function FormEditTask({task}) {

    const dispatch = useDispatch()
    const [contentTask, setContentTask] = useState(task.content)

  return (
    <div className="popup-overlay" onClick={()=>{
        dispatch(closeFormEditTask())
    }}>
        <form className="forms d-flex flex-column p-3 rounded-3" style={{backgroundColor: '#ffffffd6'}}
            onSubmit={(e)=>{
                e.preventDefault()
                if(contentTask.length === 0){
                    // displayMessage("Veuillez saisir un Texte pour la tâche", "error")
                    return
                }
                dispatch(updateTask({id_task: task.id, content: contentTask}))
            }}
            onClick={(e)=>{
                e.stopPropagation()
            }}
        >
            <div className="form-group">
                <label>Modifier une tâche</label>
                <input type="text" className="form-control" value={contentTask} onChange={(e)=>{
                    setContentTask(e.target.value) 
                }} />
            </div>
            <div className="form-group mt-3">
                <input type="submit" className="btn btn-primary" value="Modifier"/>
            </div>
        </form> 
    </div>
  )
}
