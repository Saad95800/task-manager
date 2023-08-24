import React from 'react'
import Task from './Task'

export default function Table({data, tasksTable, deleteTask, moveTask}) {
  return (
    <div className="table p-2 m-3 rounded"
    onDrop={(e)=>{
      e.preventDefault()
      let id_task = e.dataTransfer.getData('id_task')
      let id_table_drop = data.id
      moveTask(id_task, id_table_drop)
    }}
    onDragOver={(e)=>{
      e.preventDefault()
    }}
    >
        <p>{data.title}</p>
        {tasksTable.map((task, index)=>{
            return <Task key={index} task={task} deleteTask={deleteTask}/>
        })}
    </div>
  )
}
