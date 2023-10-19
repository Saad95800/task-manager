import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    apiKey: import.meta.env.VITE_API_KEY,
    projectId: import.meta.env.VITE_PROJECT_ID
}

export const AppSlice = createSlice({
    name: 'app',
    initialState: initalState,
    reducers: {
    }
})

// export const {
// } = AppSlice.actions

export default AppSlice.reducer