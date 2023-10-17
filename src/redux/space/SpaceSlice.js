import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import { insertSpaceIDB, updateSpaceIDB } from '../../utils/functions';

const initalState = {
    spaces: [
        {
            id: 1,
            title: 'Espace cloud campus',
            color: '#fff'
        },
        {
            id: 2,
            title: 'Espace job freelance',
            color: '#fff'
        },
        {
            id: 3,
            title: 'Projets perso',
            color: '#fff'
        },
        {
            id: 4,
            title: 'Projets pro',
            color: '#fff'
        },
        {
            id: 5,
            title: 'Tâches quotidiennes',
            color: '#fff'
        },
        {
            id: 6,
            title: 'Tâches administratives',
            color: '#fff'
        }
    ],
    viewFormEditSpace: false,
    title: '',
    color: '#e7c4ff6e',
    spaceToEdit: null,
    context: 'add'
}

export const SpaceSlice = createSlice({
    name: 'space',
    initialState: initalState,
    reducers: {
        setSpaces: (state, action) => {
            state.spaces = action.payload
        },
        setViewFormEditSpace: (state, action) => {
            state.viewFormEditSpace = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setColor: (state, action) => {
            state.color = action.payload
        },
        addSpace: (state, action) => {

            let newSpace = {
                id: uuidv4(),
                title: action.payload.title,
                color: action.payload.color
            }
            state.spaces.push(newSpace)

            insertSpaceIDB(newSpace)

            state.viewFormEditSpace = false
        },
        updateSpace: (state, action) => {

            let newSpaces = [...state.spaces]

            for(let space of newSpaces){
                if(space.id.toString() === action.payload.id.toString()){
                    space.title = action.payload.title
                    space.color = action.payload.color
                }
            }

            let index = state.spaces.findIndex(s => s.id.toString() === action.payload.id.toString())
            state.spaces[index].title = action.payload.title
            state.spaces[index].color = action.payload.color

            updateSpaceIDB({
                id: action.payload.id,
                title: action.payload.title,
                color: action.payload.color
            })

            state.viewFormEditSpace = false
        },
        setSpaceToEdit: (state, action) => {
            state.spaceToEdit = action.payload
        },
        setContext: (state, action) => {
            state.context = action.payload
        },
    }
})

export const {
    setSpaces,
    setViewFormEditSpace,
    setTitle,
    setColor,
    addSpace,
    setSpaceToEdit,
    setContext,
    updateSpace
} = SpaceSlice.actions

export default SpaceSlice.reducer