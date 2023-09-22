import React from 'react'
import {useSelector} from 'react-redux'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SpaceList() {

    const spaces = useSelector((state)=> state.space.spaces)


  return (
    <div className="container">
        <div className="row">
            {spaces.map((space, i)=>{
                return <div key={i} className="col-md-3">
                         <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                    {space.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Accéder aux tableaux</Button>
                                </CardActions>
                                </React.Fragment>
                            </Card>
                        </Box>
                    </div>
            })}
        </div>

    </div>
  )
}
