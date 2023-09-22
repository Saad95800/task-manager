import React from 'react'
import {useSelector} from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2';
import SpaceItem from './SpaceItem';

export default function SpaceList() {

    const spaces = useSelector((state)=> state.space.spaces)


  return (
    <div className="container">
        <Box>
            <Grid container spacing={2}>
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
