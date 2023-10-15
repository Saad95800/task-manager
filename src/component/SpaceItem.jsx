import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function SpaceItem({space}) {
    
  return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                {space.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={"/tasklist/"+space.id} size="small">Accéder aux tableaux</Link>
            </CardActions>
            </React.Fragment>
        </Card>
    </Box>
  )
}
