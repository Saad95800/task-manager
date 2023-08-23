import React from 'react'
import Task from './Task'

export default function Table({data, tasksTable}) {
    // console.log(data.id)
    // console.log(tasksTable)
  return (
    <div className="table">
        <p>{data.title}</p>
        {tasksTable.map((task, index)=>{
            return <Task key={index} task={task}/>
        })}
    </div>
  )
}
