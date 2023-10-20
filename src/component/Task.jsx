import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, displayFormUpdateTask } from '../redux/task/TaskSlice'

export default function Task({task}) {

  const dispatch = useDispatch()

  return (
    <div className="mb-1 p-2 rounded bg-white d-flex justify-content-between" style={{cursor: 'pointer'}}
    onDragStart={(e)=>{
      e.stopPropagation()
      e.dataTransfer.setData('id_task', task.fields.id.stringValue)
    }}
    onClick={()=>{
      dispatch(displayFormUpdateTask({id_task: task.fields.id.stringValue}))
    }}
    draggable="true"
    >
      {task.fields.content.stringValue}
      <button  type="button" className="btn-close" aria-label="close" onClick={(e)=>{
        e.stopPropagation()
        dispatch(deleteTask({id_task: task.fields.id.stringValue}))
      }}>

      </button>
    </div>
  )
}
