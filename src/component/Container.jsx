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
    const [formAddTableVisible, setFormAddTableVisible] = useState(false)
    const [formDropTableVisible, setFormDropTableVisible] = useState(false)
    const [formAddTaskVisible, setFormAddTaskVisible] = useState(false)

    useEffect(()=>{
        setTables([
            {
                id: '1',
                title: 'Projet ressource'
            },
            {
                id: '2',
                title: 'Sujet de la prochaine réunion'
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
        let newTasks = [...tasks].filter((t) => t.idTable !== id.toString())
        setTasks(newTasks)
    }

    function addTask(task, idTable){
        setTasks([...tasks, {id: uuidv4(), content: task, idTable: idTable}])
    }

    function deleteTask(id_task){
        let newTasks = [...tasks].filter((t)=> t.id.toString() !== id_task.toString())
        setTasks(newTasks)
    }

    function closeFormAddTable(){
        setFormAddTableVisible(false)
    }

    function closeFormDropTable(){
        setFormDropTableVisible(false)
    }

    function closeFormAddTask(){
        setFormAddTaskVisible(false)
    }

    function moveTask(id_task, id_table_drop){
        let newTasks = [...tasks]
        let index = newTasks.findIndex(t => t.id === id_task)
        newTasks[index].idTable = id_table_drop
        setTasks(newTasks)
    }

  return (
    <div className="container">
        <Link to={"/"} className="btn fs-5 border mt-4 mb-4">{'< Page d\'accueil'}</Link>  
        <div>
            <button className="btn btn-success" onClick={()=>{
                setFormAddTableVisible(true)
            }}>Ajouter un tableau</button>
            <button className="btn btn-danger" onClick={()=>{
                setFormDropTableVisible(true)
            }}>Supprimer un tableau</button>
            <button className="btn btn-success" onClick={()=>{
                setFormAddTaskVisible(true)
            }}>Ajouter une tâche</button>
        </div>
        <div className="d-flex">
            {formAddTableVisible && <FormAddTable addTable={addTable} closeFormAddTable={closeFormAddTable} />}
            {formDropTableVisible && <FormSupTable tables={tables} deleteTable={deleteTable} closeFormDropTable={closeFormDropTable} />}
            {formAddTaskVisible && <FormAddTask tables={tables} addTask={addTask} closeFormAddTask={closeFormAddTask} />}
        </div>
        <div className="d-flex align-items-start">
            {tables.map((table, index)=>{
                let tasksTable = [...tasks].filter((t) => t.idTable.toString() === table.id.toString())
                return <Table key={index} data={table} tasksTable={tasksTable} deleteTask={deleteTask} moveTask={moveTask} />
            })}
        </div>
    </div>
  )
}
