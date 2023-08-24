import React from 'react'

export default function Task({task, deleteTask}) {
  return (
    <div className="mb-1 p-2 rounded bg-white d-flex justify-content-between" style={{cursor: 'pointer'}}>
      {task.content}
      <button  type="button" className="btn-close" aria-label="close" onClick={(e)=>{
        e.stopPropagation()
        deleteTask(task.id)
      }}>

      </button>
    </div>
  )
}
