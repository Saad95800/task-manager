import React, {useState, useEffect} from 'react'
import Table from './Table'
import FormAddTable from './FormAddTable'
import FormSupTable from './FormSupTable'
import FormAddTask from './FormAddTask'
import FormEditTask from './FormEditTask'
import FormEditTable from './FormEditTable'
import {Link} from 'react-router-dom'
import {produce} from 'immer'
import {store} from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTables, setFormAddTableVisible, setFormDropTableVisible } from '../redux/table/TableSlice'
import { setFormAddTaskVisible } from '../redux/task/TaskSlice'

export default function Container() {

    const dispatch = useDispatch()
    const tables = useSelector((state) => state.table.tables)
    const tasks = useSelector((state) => state.task.tasks)
    const formAddTableVisible = useSelector((state) => state.table.formAddTableVisible)
    const formDropTableVisible = useSelector((state) => state.table.formDropTableVisible)
    const formAddTaskVisible = useSelector((state) => state.task.formAddTaskVisible)
    const formEditTaskVisible = useSelector((state) => state.task.formEditTaskVisible)
    const formEditTableVisible = useSelector((state) => state.table.formEditTableVisible)
    const taskToEdit = useSelector((state) => state.task.taskToEdit)
    const tableToEdit = useSelector((state) => state.table.tableToEdit)

    useEffect(()=>{
        dispatch(setTables([
            {
                id: '1',
                title: 'Projet ressource',
                order: 4
            },
            {
                id: '2',
                title: 'Sujet de la prochaine réunion',
                order: 3
            },
            {
                id: '3',
                title: 'A faire',
                order: 2
            },
            {
                id: '4',
                title: 'En cours',
                order: 1
            }
        ]))
    }, [])

    // function addTask(task, idTable){
    //     setTasks(
    //         produce(tasks, (tasksDraft)=>{
    //             tasksDraft.push({id: uuidv4(), content: task, idTable: idTable})
    //         })
    //     )
    // }

    // function deleteTask(id_task){
    //     setTasks(produce(tasks, (tasksDraft)=>{
    //         let index = tasksDraft.findIndex(t => t.id.toString() === id_task.toString())
    //         tasksDraft.splice(index, 1)
    //     }))
    // }

    // function closeFormAddTask(){
    //     setFormAddTaskVisible(false)
    // }

    // function moveTask(id_task, id_table_drop){
    //     let newTasks = [...tasks]
    //     let index = newTasks.findIndex(t => t.id === id_task)
    //     newTasks[index].idTable = id_table_drop
    //     setTasks(newTasks)
    // }

    // function displayFormUpdateTask(id_task){
    //     setFormEditTaskVisible(true)
    //     setTaskToEdit(getTaskById(id_task))
    // }

    // function closeFormEditTask(){
    //     setFormEditTaskVisible(false)
    // }

    // function getTaskById(id_task){
    //     let newTasks = [...tasks]
    //     let index = newTasks.findIndex(t => t.id === id_task)
    //     return newTasks[index]
    // }

    // function updateTask(id_task, content){

    //     setTasks(
    //         produce(tasks, (tasksDraft)=>{
    //             let index = tasksDraft.findIndex(t => t.id === id_task)
    //             tasksDraft[index].content = content
    //         })
    //     )
    //     setFormEditTaskVisible(false)
    // }

    let tableSorted = [...tables].sort((a, b)=> a.order > b.order ? 1 : -1  )
  return (
    <div className="container">
        <Link to={"/"} className="btn fs-5 border mt-4 mb-4">{'< Page d\'accueil'}</Link>  
        <div>
            <button className="btn btn-success" onClick={()=>{
                dispatch(setFormAddTableVisible(true)) 
            }}>Ajouter un tableau</button>
            <button className="btn btn-danger" onClick={()=>{
                dispatch(setFormDropTableVisible(true))
            }}>Supprimer un tableau</button>
            <button className="btn btn-success" onClick={()=>{
                dispatch(setFormAddTaskVisible(true))
            }}>Ajouter une tâche</button>
        </div>
        <div className="d-flex">
            {formAddTableVisible && <FormAddTable />}
            {formDropTableVisible && <FormSupTable tables={tables} />}
            {formAddTaskVisible && <FormAddTask tables={tables} />}
            {formEditTaskVisible && <FormEditTask task={taskToEdit} />}
            {formEditTableVisible && <FormEditTable table={tableToEdit} />}
        </div>
        <div className="d-flex align-items-start" style={{overflowX: 'scroll', minHeight: '500px'}}>
            {tableSorted.map((table, index)=>{
                let tasksTable = [...tasks].filter((t) => t.idTable.toString() === table.id.toString())
                return <Table 
                            key={index} 
                            data={table} 
                            tasksTable={tasksTable}
                        />
            })}
        </div>
    </div>
  )
}
