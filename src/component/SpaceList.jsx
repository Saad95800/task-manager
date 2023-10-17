import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2';
import SpaceItem from './SpaceItem';
import { setSpaces } from '../redux/space/SpaceSlice';
import { store } from '../redux/store';

export default function SpaceList() {

  const spaces = useSelector((state)=> state.space.spaces)
  const dispatch = useDispatch()

  useEffect(()=>{

    const request = indexedDB.open('task-managerDB', 2)

    request.onsuccess = function(event){
      let db = event.target.result
      const transaction = db.transaction(["space"], "readonly")
      const spaceStore = transaction.objectStore("space")
      const request = spaceStore.getAll()

      request.onsuccess = function(){
        dispatch(setSpaces(request.result))
      }

    }

  }, [])

  return (
    <div className="container mt-5">
        <Box>
            <Grid container spacing={7}>
                {spaces.map((space, i)=>{
                    return <Grid key={i} xs={6} md={3}>
                                <SpaceItem space={space} />
                            </Grid>
                })}                
            </Grid>
        </Box>
    </div>
  )
}
