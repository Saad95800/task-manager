import { createSlice } from '@reduxjs/toolkit'
import { getTaskById } from '../../services'
import {v4 as uuidv4} from 'uuid'

const initalState = {
    tasks: [],
    formAddTaskVisible: false,
    formEditTaskVisible: false,
    taskToEdit: null
}

export const TaskSlice = createSlice({
    name: 'task',
    initialState: initalState,
    reducers: {
        addTask: (state, action) => { 
            state.tasks.push({id: uuidv4(), content: action.payload.task, idTable: action.payload.idTable})
        },
        deleteTask: (state, action) => {
            let index = [...state.tasks].findIndex(t => t.id.toString() === action.payload.id_task.toString())
            state.tasks.splice(index, 1)
        },
        closeFormAddTask: (state) => {
            state.formAddTaskVisible = false
        },
        moveTask: (state, action) => {
            let newTasks = [...state.tasks]
            let index = newTasks.findIndex(t => t.id === action.payload.id_task)
            newTasks[index].idTable = action.payload.id_table_drop
            state.tasks = newTasks
        },
        displayFormUpdateTask: (state, action) => {
            state.formEditTaskVisible = true
            state.taskToEdit = getTaskById(action.payload.id_task, state.tasks) 
        },
        closeFormEditTask: (state) => {
            state.formEditTaskVisible = false
        },
        updateTask: (state, action) => {
            let index = [...state.tasks].findIndex(t => t.id === action.payload.id_task)
            state.tasks[index].content = action.payload.content
            state.formEditTaskVisible = false
        },
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        setFormAddTaskVisible: (state, action) => {
            state.formAddTaskVisible = action.payload
        },
        setFormEditTaskVisible: (state, action) => {
            state.formEditTaskVisible = action.payload
        },
        setTaskToEdit: (state, action) => {
            state.taskToEdit = action.payload
        }
    }
})

export const {
    addTask,
    deleteTask,
    closeFormAddTask,
    moveTask,
    displayFormUpdateTask,
    closeFormEditTask,
    updateTask,
    setTasks,
    setFormAddTaskVisible,
    setFormEditTaskVisible,
    setTaskToEdit
} = TaskSlice.actions

export default TaskSlice.reducer