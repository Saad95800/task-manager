import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'
import { updateTableIDB, deleteTableIDB } from '../../utils/functions'

const initalState = {
    tables:  [],
    formAddTableVisible: false,
    formDropTableVisible: false,
    formEditTableVisible: false,
    tableToEdit: null
}

export const TableSlice = createSlice({
    name: 'table',
    initialState: initalState,
    reducers: {
        addTable: (state, action) => {

            let newTable = {id: action.payload.id, title: action.payload.title, order: state.tables.length + 1, spaceId: action.payload.spaceId}
            let newTables = [...state.tables, newTable]
            state.tables = newTables
        },
        deleteTable: (state, action) => {
            let newTables = state.tables.filter((tab) => tab.id.toString() !== action.payload.idTable.toString())
            
            deleteTableIDB(action.payload.idTable.toString())

            state.tables = newTables

            // let newTasks = [...tasks].filter((t) => t.idTable !== action.payload.id.toString())
            // setTasks(newTasks)
            // displayMessage("Tableau supprimé avec succès !", "success")
        },
        closeFormAddTable: (state) => {
            state.formAddTableVisible = false
        },
    
        closeFormDropTable: (state) => {
            state.formDropTableVisible = false
        },
        displayFormTable: (state, action) => {
            state.tableToEdit = {
                id: action.payload.id_table,
                title: action.payload.title_table, 
                order: action.payload.order,  
                spaceId: action.payload.spaceId  
            }
            state.formEditTableVisible = true
        },
        closeFromEditTable: (state) => {
            state.formEditTableVisible = false
        },
        updateTable: (state, action) => {
    
            let newTables = [...state.tables]
            let index = newTables.findIndex(t => t.id === action.payload.id_table)
            newTables[index].title = action.payload.title_table
            
            updateTableIDB({
                id: action.payload.id_table,
                title: action.payload.title_table,
                order: action.payload.order,
                spaceId: action.payload.spaceId
            })

            state.tables = newTables
            state.formEditTableVisible = false
        },
        moveTable: (state, action) => {

            let newTables = [...state.tables]
    
            for(let table of newTables){
                
                // Si l'order du tableau de drop est suppérieur à l'order du tableau de drag
    
                if(Number(action.payload.order_table_drop > Number(action.payload.order_table_drag))){
                    // le tableau qui a l'id id_table_drag prend le order order_table_drop
                    // Les tableaux d'order inférieur à order_table_drop et supérieur à order_table_drag on leur order qui fait -1
                    if(table.id.toString() === action.payload.id_table_drag.toString()){
                        table.order = Number(action.payload.order_table_drop)
                    }else if(table.id.toString() === action.payload.id_table_drop.toString()){
                        table.order = table.order - 1
                    }else if(Number(table.order) < Number(action.payload.order_table_drop) && Number(table.order) > Number(action.payload.order_table_drag)){
                        table.order = table.order - 1
                    }      
                    // Si l'order du tableau de drop est inférieur à l'order du tableau de drag          
                }else if(Number(action.payload.order_table_drop < Number(action.payload.order_table_drag))){
                    // le tableau qui a l'id id_table_drag prend le order order_table_drop
                    // Les tableaux d'order suppérieur à order_table_drop et inférieur à order_table_drag on leur order qui fait -1
                    if(table.id.toString() === action.payload.id_table_drag.toString()){
                        table.order = Number(action.payload.order_table_drop)
                    }else if(table.id.toString() === action.payload.id_table_drop.toString()){
                        table.order = table.order + 1
                    }else if(Number(table.order) > Number(action.payload.order_table_drop) && Number(table.order) < Number(action.payload.order_table_drag)){
                        table.order = table.order + 1
                    }  
                }
    
            }
            localStorage.setItem('tables', JSON.stringify(newTables))
            state.tables = newTables
    
        },
        setTables: (state, action) => {
            state.tables = action.payload
        },
        setFormAddTableVisible: (state, action) => {
            state.formAddTableVisible = action.payload
        },
        setFormDropTableVisible: (state, action) => {
            state.formDropTableVisible = action.payload
        },
        setFormEditTableVisible: (state, action) => {
            state.formEditTableVisible = action.payload
        },
        setTableToEdit: (state, action) => {
            state.tableToEdit = action.payload
        }
    }
})

export const {
    addTable,
    deleteTable,
    closeFormAddTable,
    closeFormDropTable,
    displayFormTable,
    closeFromEditTable,
    updateTable,
    moveTable,
    setTables,
    setFormAddTableVisible,
    setFormDropTableVisible,
    setFormEditTableVisible,
    setTableToEdit
} = TableSlice.actions

export default TableSlice.reducer