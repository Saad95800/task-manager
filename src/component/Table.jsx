import React from 'react'
import Task from './Task'

export default function Table({data, tasksTable, deleteTask, moveTask, displayFormUpdateTask, displayFormTable, moveTable}) {
  return (
    <div className="table p-2 m-3 rounded"
    draggable="true"
    onDragStart={(e)=>{
      e.stopPropagation()
      e.dataTransfer.setData('id_table_drag', data.id)
      e.dataTransfer.setData('order_table_drag', data.order)
    }}
    onDrop={(e)=>{
      e.preventDefault()
      let id_table_drop = data.id
      if(e.dataTransfer.getData('id_task') !== undefined && e.dataTransfer.getData('id_task') !== null && e.dataTransfer.getData('id_task') !== ''){
        console.log('move task')
        let id_task = e.dataTransfer.getData('id_task')
        
        moveTask(id_task, id_table_drop)        
      }

      if(e.dataTransfer.getData('id_table_drag') !== undefined && e.dataTransfer.getData('id_table_drag') !== null && e.dataTransfer.getData('id_table_drag') !== ''){
        console.log('move array')
       let id_table_drag = e.dataTransfer.getData('id_table_drag')
        let order_table_drag = e.dataTransfer.getData('order_table_drag')
        moveTable(id_table_drag, order_table_drag, id_table_drop, data.order)
      }
    }}
    onDragOver={(e)=>{
      e.preventDefault()
    }}
    >
        <p
          onClick={()=>{
            displayFormTable(data.id, data.title)
          }}
        >{data.title}</p>
        {tasksTable.map((task, index)=>{
            return <Task key={index} task={task} deleteTask={deleteTask} displayFormUpdateTask={displayFormUpdateTask}/>
        })}
    </div>
  )
}
