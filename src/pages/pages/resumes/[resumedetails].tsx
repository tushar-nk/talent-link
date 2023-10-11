import React from 'react'
import { Button, CardActions } from '@mui/material'
import CommonHeader from 'src/layouts/components/vertical/Header'
import Details from './details'
import ProjectSkill from './projectskill'
import Project from './project'
import Education from './education'
import Testimonial from './testimonials'
import History from './history'

export default function ResumeDetails() {
  return (
    <>
      <CommonHeader />

      <Details />

      <ProjectSkill />

      <Project />

      <Education />

      <Testimonial />

      <History />

      <CardActions>
        <Button size='large' color='secondary' variant='outlined'>
          Cancel
        </Button>
        <Button size='large' type='submit' variant='contained'>
          Save
        </Button>
      </CardActions>
    </>
  )
}
