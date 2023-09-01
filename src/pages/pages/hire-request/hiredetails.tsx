import { Grid } from '@mui/material'
import React from 'react'
import Certification from 'src/views/hire/Certification'
import CompanyDetails from 'src/views/hire/CompanyDetails'
import Education from 'src/views/hire/Education'
import EmployeeHistory from 'src/views/hire/EmployeeHistory'
import EmployeeProfile from 'src/views/hire/EmployeeProfile'
import HireDetails from 'src/views/hire/HireDetails'
import ProjectBrief from 'src/views/hire/ProjectBrief'
import Rating from 'src/views/hire/Rating'
import SimilarProfile from 'src/views/hire/SimilarProfile'
import TechnicalSkill from 'src/views/hire/TechnicalSkill'

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
        <SimilarProfile/>
      </div>
    </>
  )
}

export default index
