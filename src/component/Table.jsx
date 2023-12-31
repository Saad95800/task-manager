import React from 'react'
import Task from './Task'
import { displayFormTable, moveTable } from '../redux/table/TableSlice'
import { useDispatch } from 'react-redux'
import { moveTask } from '../redux/task/TaskSlice'

export default function Table({data, tasksTable}) {

  const dispatch = useDispatch()

  return (
    <div className="table p-2 m-3 rounded"
    style={{minWidth: '250px',maxWidth: '250px', minHeight: '500px'}}
    draggable="true"
    onDragStart={(e)=>{
      e.stopPropagation()
      e.dataTransfer.setData('id_table_drag', data.id)
      e.dataTransfer.setData('order_table_drag', data.order)
    }}
    onDrop={(e)=>{
      e.preventDefault()
      e.stopPropagation()
      let id_table_drop = data.id
      if(e.dataTransfer.getData('id_task') !== undefined && e.dataTransfer.getData('id_task') !== null && e.dataTransfer.getData('id_task') !== ''){
        let id_task = e.dataTransfer.getData('id_task')
        dispatch(moveTask({id_task, id_table_drop}))
      }

      if(e.dataTransfer.getData('id_table_drag') !== undefined && e.dataTransfer.getData('id_table_drag') !== null && e.dataTransfer.getData('id_table_drag') !== ''){
       let id_table_drag = e.dataTransfer.getData('id_table_drag')
        let order_table_drag = e.dataTransfer.getData('order_table_drag')
        dispatch(moveTable({id_table_drag: id_table_drag, order_table_drag: order_table_drag, id_table_drop: id_table_drop, order_table_drop: data.order}))
      }
    }}
    onDragOver={(e)=>{
      e.preventDefault()
    }}
    >
        <p
          onClick={()=>{
            dispatch(displayFormTable({id_table: data.id, title_table: data.title, order: data.order, spaceId: data.spaceId}))
          }}
        >{data.title}</p>
        {tasksTable.map((task, index)=>{
            return <div key={index} style={{position:'relative'}}><Task key={index} task={task}/></div>
        })}
    </div>
  )
}
