import React, {useState, useEffect} from 'react'
import Table from './Table'
import FormAddTable from './FormAddTable'
import FormSupTable from './FormSupTable'
import {v4 as uuidv4} from 'uuid'

export default function Container() {

    const [tables, setTables] = useState([])

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

  return (
    <div className="container">
        <div className="d-flex">
            <FormAddTable addTable={addTable} />
            <FormSupTable tables={tables} deleteTable={deleteTable} />
        </div>
        <div className="d-flex align-items-start">
            {tables.map((table, index)=>{
                return <Table key={index} data={table} />
            })}
        </div>
    </div>
  )
}
