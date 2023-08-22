import React, {useState, useEffect} from 'react'
import Table from './Table'

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
  return (
    <div className="container">
        <div className="d-flex align-items-start">
            {tables.map((table, index)=>{
                return <Table key={index} data={table} />
            })}
        </div>
    </div>
  )
}
