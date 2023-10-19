import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './message/MessageSlice'
import tableReducer from './table/TableSlice'
import taskReducer from './task/TaskSlice'
import spaceReducer from './space/SpaceSlice'
import appReducer from './app/AppSlice'

export const store = configureStore({
    reducer: {
        message: messageReducer,
        table: tableReducer,
        task: taskReducer,
        space: spaceReducer,
        app: appReducer
    }
})