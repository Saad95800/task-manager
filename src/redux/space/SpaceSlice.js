import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    spaces: [
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
}

export const SpaceSlice = createSlice({
    name: 'space',
    initialState: initalState,
    reducers: {
        setSpaces: (state, action) => {
            state.spaces = action.payload
        }
    }
})

export const {
    setSpaces
} = SpaceSlice.actions

export default SpaceSlice.reducer