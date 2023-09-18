import React, {useState, useEffect} from 'react'
import Table from './Table'
import FormAddTable from './FormAddTable'
import FormSupTable from './FormSupTable'
import FormAddTask from './FormAddTask'
import FormEditTask from './FormEditTask'
import FormEditTable from './FormEditTable'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {produce} from 'immer'

export default function Container() {

    const [tables, setTables] = useState([])
    const [tasks, setTasks] = useState([])
    const [formAddTableVisible, setFormAddTableVisible] = useState(false)
    const [formDropTableVisible, setFormDropTableVisible] = useState(false)
    const [formAddTaskVisible, setFormAddTaskVisible] = useState(false)
    const [formEditTaskVisible, setFormEditTaskVisible] = useState(false)
    const [formEditTableVisible, setFormEditTableVisible] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null)
    const [tableToEdit, setTableToEdit] = useState(null)

    useEffect(()=>{
        setTables([
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
        ])
    }, [])

    function addTable(title){
        setTables([...tables, {id: uuidv4(), title: title, order: tables.length + 1}])
    }

    function deleteTable(id){
        let newTables = [...tables].filter((tab) => tab.id.toString() !== id.toString())
        setTables(newTables)
        let newTasks = [...tasks].filter((t) => t.idTable !== id.toString())
        setTasks(newTasks)
    }

    function addTask(task, idTable){
        setTasks(
            produce(tasks, (tasksDraft)=>{
                tasksDraft.push({id: uuidv4(), content: task, idTable: idTable})
            })
        )
    }

    function deleteTask(id_task){
        setTasks(produce(tasks, (tasksDraft)=>{
            let index = tasksDraft.findIndex(t => t.id.toString() === id_task.toString())
            tasksDraft.splice(index, 1)
        }))
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

    function displayFormUpdateTask(id_task){
        setFormEditTaskVisible(true)
        setTaskToEdit(getTaskById(id_task))
    }

    function closeFormEditTask(){
        setFormEditTaskVisible(false)
    }

    function getTaskById(id_task){
        let newTasks = [...tasks]
        let index = newTasks.findIndex(t => t.id === id_task)
        return newTasks[index]
    }

    function updateTask(id_task, content){

        setTasks(
            produce(tasks, (tasksDraft)=>{
                let index = tasksDraft.findIndex(t => t.id === id_task)
                tasksDraft[index].content = content
            })
        )
        setFormEditTaskVisible(false)
    }

    function displayFormTable(id_table, title_table){
        setTableToEdit({
          id: id_table,
          title: title_table  
        })
        setFormEditTableVisible(true)
    }

    function closeFromEditTable(){
        setFormEditTableVisible(false)
    }

    function updateTable(id_table, title_table) {

        let newTables = [...tables]
        let index = newTables.findIndex(t => t.id === id_table)
        newTables[index].title = title_table
        setTables(newTables)
        setFormEditTableVisible(false)
    }

    function moveTable(id_table_drag, order_table_drag, id_table_drop, order_table_drop){

        let newTables = [...tables]

        for(let table of newTables){
            
            // Si l'order du tableau de drop est suppérieur à l'order du tableau de drag

            if(Number(order_table_drop > Number(order_table_drag))){
                // le tableau qui a l'id id_table_drag prend le order order_table_drop
                // Les tableaux d'order inférieur à order_table_drop et supérieur à order_table_drag on leur order qui fait -1
                if(table.id.toString() === id_table_drag.toString()){
                    table.order = Number(order_table_drop)
                }else if(table.id.toString() === id_table_drop.toString()){
                    table.order = table.order - 1
                }else if(Number(table.order) < Number(order_table_drop) && Number(table.order) > Number(order_table_drag)){
                    table.order = table.order - 1
                }      
                // Si l'order du tableau de drop est inférieur à l'order du tableau de drag          
            }else if(Number(order_table_drop < Number(order_table_drag))){
                // le tableau qui a l'id id_table_drag prend le order order_table_drop
                // Les tableaux d'order suppérieur à order_table_drop et inférieur à order_table_drag on leur order qui fait -1
                if(table.id.toString() === id_table_drag.toString()){
                    table.order = Number(order_table_drop)
                }else if(table.id.toString() === id_table_drop.toString()){
                    table.order = table.order + 1
                }else if(Number(table.order) > Number(order_table_drop) && Number(table.order) < Number(order_table_drag)){
                    table.order = table.order + 1
                }  
            }

        }
        
        setTables(newTables)

    }

    let tableSorted = tables.sort((a, b)=> a.order > b.order ? 1 : -1  )
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
            {formEditTaskVisible && <FormEditTask task={taskToEdit} closeFormEditTask={closeFormEditTask} updateTask={updateTask}/>}
            {formEditTableVisible && <FormEditTable table={tableToEdit} closeFromEditTable={closeFromEditTable} updateTable={updateTable} />}
        </div>
        <div className="d-flex align-items-start">
            {tableSorted.map((table, index)=>{
                let tasksTable = [...tasks].filter((t) => t.idTable.toString() === table.id.toString())
                return <Table 
                            key={index} 
                            data={table} 
                            tasksTable={tasksTable} 
                            deleteTask={deleteTask} 
                            moveTask={moveTask} 
                            displayFormUpdateTask={displayFormUpdateTask} 
                            displayFormTable={displayFormTable}
                            moveTable={moveTable}
                        />
            })}
        </div>
    </div>
  )
}
