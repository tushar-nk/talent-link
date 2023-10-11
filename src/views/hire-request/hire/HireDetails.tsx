import { Card, Grid, TextField, Typography } from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import React from 'react'
import CommonHeader from 'src/layouts/components/vertical/Header'

const HireDetails = () => {
  return (
    <>
    <CommonHeader/>
      <Card className='hire-details-card '>
        <div>
          <Typography className='hire-request-titles'>Hire Details</Typography>
        </div>
        <Grid container spacing={2} columns={24}>
          <Grid className='details-field' xs={6}>
            <Grid item>Hiring Company</Grid>
            <Grid item>Request Date</Grid>
            <Grid item>Start Date - End Date</Grid>
            <Grid item>Rate</Grid>
            <Grid item>Price</Grid>
            <Grid item>business Value</Grid>
          </Grid>
          <Grid className='details-field' xs={6}>
            <Grid item>Net 4 Nuts</Grid>
            <Grid item>12-01-2023</Grid>
            <Grid item>01-02-2023 - 31-03-2023</Grid>
            <Grid item>Hourly</Grid>
            <Grid item>25$ / Hours</Grid>
            <Grid item>1000$</Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            <div className='project-detail'>
              <Typography variant='h6'>Project Details</Typography>
              <Typography>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              </Typography>
            </div>
            <div className='hiring-details-remark'>
              <Typography variant='h6'>Remarks</Typography>
              <Typography>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography className='switch-name'>Approve</Typography>
            <Switch color='primary'  />
          </Grid>
        </Grid>
      </Card>
      <div></div>
    </>
  )
}

export default HireDetails
