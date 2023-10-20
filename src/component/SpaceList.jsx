import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2';
import SpaceItem from './SpaceItem';
import { setSpaces, setViewFormEditSpace } from '../redux/space/SpaceSlice';
import { store } from '../redux/store';
import FormEditSpace from './FormEditSpace';
import axios from 'axios';
import { getSpaces } from '../api/SpaceAPI';

export default function SpaceList() {

  const spaces = useSelector((state)=> state.space.spaces)
  const viewFormEditSpace = useSelector((state) => state.space.viewFormEditSpace)
  const apiKey = useSelector((state) => state.app.apiKey)
  const projectId = useSelector((state) => state.app.projectId)
  
  const dispatch = useDispatch()

  useEffect(()=>{

    const fetchSpaces = async () => {
      let spaces = await getSpaces()
      dispatch(setSpaces(spaces.documents))
    }
    fetchSpaces()

  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-color-website mt-3">Liste des espaces</h1>
        <button className="btn m-2 text-white fs-5 fw-bold" style={{backgroundColor: '#8d91ff3b'}} onClick={()=>{
              store.dispatch(setViewFormEditSpace(true))
        }}>Ajouter</button>
        <Box className="mt-3">
            <Grid container spacing={7}>
                {spaces.map((space, i)=>{
                    return <Grid key={i} xs={6} md={3}>
                                <SpaceItem space={space} />
                            </Grid>
                })}                
            </Grid>
        </Box>
      </div>   
      {viewFormEditSpace && <FormEditSpace />}   
    </>

  )
}
