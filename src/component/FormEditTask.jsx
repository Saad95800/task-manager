import React, {useState} from 'react'

export default function FormEditTask({task, closeFormEditTask, updateTask}) {

    const [contentTask, setContentTask] = useState(task.content)

  return (
    <div className="popup-overlay" onClick={()=>{
        closeFormEditTask()
    }}>
        <form className="forms d-flex flex-column p-3 rounded-3" style={{backgroundColor: '#ffffffd6'}}
            onSubmit={(e)=>{
                e.preventDefault()
                if(contentTask.length === 0){
                    // displayMessage("Veuillez saisir un Texte pour la tâche", "error")
                    return
                }
                updateTask(task.id, contentTask)
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
