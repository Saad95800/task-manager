import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {store} from './redux/store'
import {Provider} from 'react-redux'

const request = indexedDB.open('task-managerDB', 1)

request.onupgradeneeded = function(event){
  let db = event.target.result
  let spaceStore = db.createObjectStore("space", {keyPath: "id"})
  let tableStore = db.createObjectStore("table", {keyPath: "id"})
  let taskStore = db.createObjectStore("task", {keyPath: "id"})

  let spaces = [
        {
            id: 1,
            title: 'Espace cloud campus'
        },
        {
            id: 2,
            title: 'Espace job freelance'
        },
        {
            id: 3,
            title: 'Projets perso'
        },
        {
            id: 4,
            title: 'Projets pro'
        },
        {
            id: 5,
            title: 'Tâches quotidiennes'
        },
        {
            id: 6,
            title: 'Tâches administratives'
        }
    ]

    for(let space of spaces){
      spaceStore.put({
        id: space.id,
        title: space.title
      })
    }

    let tables = [
          {
              id: '1',
              title: 'Projet ressource',
              order: 4,
              spaceId: 1
          },
          {
              id: '2',
              title: 'Sujet de la prochaine réunion',
              order: 3,
              spaceId: 1
          },
          {
              id: '3',
              title: 'A faire',
              order: 2,
              spaceId: 1
          },
          {
              id: '4',
              title: 'En cours',
              order: 1,
              spaceId: 1
          }
      ]

    for(let table of tables){
      tableStore.put({
        id: table.id,
        title: table.title,
        order: table.order,
        spaceId: table.spaceId
      })
    }

    let tasks = [
        {
            id: 1,
            content: 'Créer la BDD',
            idTable: 1
        },
        {
            id: 2,
            content: 'Créer le MCD',
            idTable: 2
        },
        {
            id: 3,
            content: 'Faire le header',
            idTable: 3
        }
    ]

    for(let task of tasks){
      taskStore.put({
        id: task.id,
        content: task.content,
        idTable: task.idTable,
      })
    }

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
