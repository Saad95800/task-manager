import React, {useState, useEffect} from 'react'
import Table from './Table'
import FormAddTable from './FormAddTable'
import FormSupTable from './FormSupTable'
import FormAddTask from './FormAddTask'
import FormEditTask from './FormEditTask'
import FormEditTable from './FormEditTable'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTables, setFormAddTableVisible, setFormDropTableVisible } from '../redux/table/TableSlice'
import { setFormAddTaskVisible, setTasks } from '../redux/task/TaskSlice'
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios'
import { getTables } from '../api/TableApi'
import { getTasks } from '../api/TaskAPI'

export default function Container() {

    const dispatch = useDispatch()

    const apiKey = useSelector((state) => state.app.apiKey)
    const projectId = useSelector((state) => state.app.projectId)

    const tables = useSelector((state) => state.table.tables)
    const tasks = useSelector((state) => state.task.tasks)
    const formAddTableVisible = useSelector((state) => state.table.formAddTableVisible)
    const formDropTableVisible = useSelector((state) => state.table.formDropTableVisible)
    const formAddTaskVisible = useSelector((state) => state.task.formAddTaskVisible)
    const formEditTaskVisible = useSelector((state) => state.task.formEditTaskVisible)
    const formEditTableVisible = useSelector((state) => state.table.formEditTableVisible)
    const taskToEdit = useSelector((state) => state.task.taskToEdit)
    const tableToEdit = useSelector((state) => state.table.tableToEdit)

    const { spaceId } = useParams()

    useEffect(()=>{


        const fetchTables = async () => {
            let tables = await getTables()
            dispatch(setTables(tables))
        }
        const fetchTasks = async () => {
            let tasks = await getTasks()
            dispatch(setTasks(tasks))
        }

        fetchTables()
        fetchTasks()

    }, [])

    let tableSorted = [...tables].sort((a, b)=> Number(a.order) > Number(b.order) ? 1 : -1  )
    let tableFiltered = tableSorted.filter(t => t.spaceId.toString() === spaceId.toString())
  return (
    <div className="container">
        <h1 className="text-center my-4 text-color-website">Tableaux de tâches</h1>
        <div className="d-flex justify-content-center">
            <button className="btn m-2 text-white fs-5 fw-bold" style={{backgroundColor: '#8d91ff3b'}} onClick={()=>{
                dispatch(setFormAddTableVisible(true)) 
            }}><AddIcon className="me-2" />Ajouter un tableau</button>
            <button className="btn m-2 text-white fs-5 fw-bold" style={{backgroundColor: '#88161642'}} onClick={()=>{
                dispatch(setFormDropTableVisible(true))
            }}><DeleteOutlineIcon className="me-2" />Supprimer un tableau</button>
            <button className="btn m-2 text-white fs-5 fw-bold" style={{backgroundColor: '#70ff7047'}} onClick={()=>{
                dispatch(setFormAddTaskVisible(true))
            }}><AddCircleIcon className="me-2" />Ajouter une tâche</button>
        </div>
        <div className="d-flex">
            {formAddTableVisible && <FormAddTable />}
            {formDropTableVisible && <FormSupTable tables={tables} />}
            {formAddTaskVisible && <FormAddTask tables={tables} />}
            {formEditTaskVisible && <FormEditTask task={taskToEdit} />}
            {formEditTableVisible && <FormEditTable table={tableToEdit} />}
        </div>
        <div className="d-flex align-items-start custom-scrollbar" style={{minHeight: '500px'}}>
            {tableFiltered.map((table, index)=>{
                let tasksTable = [...tasks].filter((t) => {
                    return t.idTable.toString() === table.id.toString()
                })
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
