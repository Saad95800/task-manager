import React, {useState, useEffect} from 'react'
import Table from './Table'
import FormAddTable from './FormAddTable'
import {v4 as uuidv4} from 'uuid'

export default function Container() {

    const [tables, setTables] = useState([])

    useEffect(()=>{
        setTables([
            {
                id: 1,
                title: 'Projet ressource'
            },
            {
                id: 2,
                title: 'Sujet de la prochaine rÃ©union'
            },
            {
                id: 3,
                title: 'A faire'
            },
            {
                id: 4,
                title: 'En cours'
            }
        ])
    }, [])

    function addTable(title){
        setTables([...tables, {id: uuidv4(), title: title}])
    }

  return (
    <div className="container">
        <div className="d-flex">
            <FormAddTable addTable={addTable} />
        </div>
        <div className="d-flex align-items-start">
            {tables.map((table, index)=>{
                return <Table key={index} data={table} />
            })}
        </div>
    </div>
  )
}
