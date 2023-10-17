import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { setContext, setSpaceToEdit, setViewFormEditSpace  } from '../redux/space/SpaceSlice';

export default function SpaceItem({space}) {

  const dispatch = useDispatch()

  return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{minHeight: "140px", backgroundColor: space.color, cursor: 'pointer'}}>
        <div className="d-flex justify-content-end mt-2 me-2"><EditIcon onClick={()=>{
          dispatch(setContext('edit'))
          dispatch(setViewFormEditSpace(true))
          dispatch(setSpaceToEdit(space))
        }} /></div>
            <React.Fragment>
              <CardContent>
                  <Typography variant="h5" component="div" className="text-white-border">
                  {space.title}
                  </Typography>
              </CardContent>
              <CardActions>
                  <div className="d-flex justify-content-center w-100">
                    <Link to={"/tasklist/"+space.id} style={{textDecoration: 'auto'}} size="small">Accéder aux tableaux</Link>
                  </div>
              </CardActions>
            </React.Fragment>
        </Card>
    </Box>
  )
}
