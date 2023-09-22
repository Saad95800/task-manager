import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    spaces: [
        {
            id: 1,
            title: 'Espace cloud campus'
        },
        {
            id: 2,
            title: 'Espace jod freelance'
        }
    ]
}

export const SpaceSlice = createSlice({
    name: 'space',
    initialState: initalState,
    reducers: {
    }
})

// export const {
// } = SpaceSlice.actions

export default SpaceSlice.reducer