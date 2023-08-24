import React, {useState, useEffect} from 'react'
import Table from './Table'
import FormAddTable from './FormAddTable'
import FormSupTable from './FormSupTable'
import FormAddTask from './FormAddTask'
import {Link} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

export default function Container() {

    const [tables, setTables] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        setTables([
            {
                id: '1',
                title: 'Projet ressource'
            },
            {
                id: '2',
                title: 'Sujet de la prochaine rÃ©union'
            },
            {
                id: '3',
                title: 'A faire'
            },
            {
                id: '4',
                title: 'En cours'
            }
        ])
    }, [])

    function addTable(title){
        setTables([...tables, {id: uuidv4(), title: title}])
    }

    function deleteTable(id){
        let newTables = [...tables].filter((tab) => tab.id.toString() !== id.toString())
        setTables(newTables)
    }

    function addTask(task, idTable){
        setTasks([...tasks, {id: uuidv4(), content: task, idTable: idTable}])
    }

  return (
    <div className="container">
        <Link to={"/"} className="btn btn-primary">Page d'accueil</Link>  
        <div className="d-flex">
            <FormAddTable addTable={addTable} />
            <FormSupTable tables={tables} deleteTable={deleteTable} />
            <FormAddTask tables={tables} addTask={addTask} />
        </div>
        <div className="d-flex align-items-start">
            {tables.map((table, index)=>{
                console.log(table)
                console.log(tasks)
                let tasksTable = [...tasks].filter((t) => t.idTable.toString() === table.id.toString())
                return <Table key={index} data={table} tasksTable={tasksTable} />
            })}
        </div>
    </div>
  )
}
