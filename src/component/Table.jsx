import React from 'react'
import Task from './Task'

export default function Table({data, tasksTable, deleteTask}) {
  return (
    <div className="table p-2 m-3 rounded">
        <p>{data.title}</p>
        {tasksTable.map((task, index)=>{
            return <Task key={index} task={task} deleteTask={deleteTask}/>
        })}
    </div>
  )
}
