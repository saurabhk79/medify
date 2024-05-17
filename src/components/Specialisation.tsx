import { Grid, Typography } from '@mui/material'
import React from 'react'


const Specialisation:React.FC = () => {
  return (
    <div>
        <Typography variant='h2' style={{color : "var(--color-footer)"}}>
            Find By Specialisation
        </Typography>

        <Grid container spacing={4} >
            {/* Map here with the data in config */}
            {/* <Grid item xs={6} lg={3}>
                <Ca
            </Grid> */}
        </Grid>
    </div>
  )
}

export default Specialisation