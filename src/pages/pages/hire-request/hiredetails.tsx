import React from 'react'
import { Grid } from '@mui/material'
import Certification from 'src/views/hire-request/hire/Certification'
import CompanyDetails from 'src/views/hire-request/hire/CompanyDetails'
import Education from 'src/views/hire-request/hire/Education'
import EmployeeHistory from 'src/views/hire-request/hire/EmployeeHistory'
import EmployeeProfile from 'src/views/hire-request/hire/EmployeeProfile'
import HireDetails from 'src/views/hire-request/hire/HireDetails'
import ProjectBrief from 'src/views/hire-request/hire/ProjectBrief'
import Rating from 'src/views/hire-request/hire/Rating'
import TechnicalSkill from 'src/views/hire-request/hire/TechnicalSkill'

const index = () => {
  return (
    <>
      <div>
        <HireDetails />
        <div className='employee-detail'>
          <Grid container spacing={6}>
            <Grid item xs={6} md={8}>
              <EmployeeProfile />
              <TechnicalSkill />
              <ProjectBrief />
            </Grid>
            <Grid item xs={6} md={4}>
              <CompanyDetails />
              <Certification />
              <Rating />
            </Grid>
          </Grid>
        </div>
        <div className='education'>
          <Grid container spacing={6} columns={16}>
            <Grid item xs={8}>
              <Education />
            </Grid>
            <Grid item xs={8}>
              <EmployeeHistory />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default index;
