import React, { useState } from 'react'
import { Card, Grid, CardHeader, TextField, Button, IconButton, Box } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useFormik } from 'formik'

const initialBox = {
  projectTitle: '',
  audience: '',
  purpose: '',
  teamsize: '',
  goal: ''
}

let nextId = 1

function generateUniqueId() {
  return nextId++
}

export default function Project() {
  const [boxes, setBoxes] = useState([{ ...initialBox, id: generateUniqueId() }])

  const formik = useFormik({
    initialValues: initialBox,
    onSubmit: values => {
      console.log(values)
    }
  })

  const handleAddBox = () => {
    const newBox = { ...initialBox, id: generateUniqueId() }
    setBoxes(prevBoxes => [newBox, ...prevBoxes])
  }

  const handleDeleteBox = id => {
    const updatedBoxes = boxes.filter(box => box.id !== id)
    setBoxes(updatedBoxes)
  }

  const handleInputChange = (boxId, fieldName, value) => {
    const updatedBoxes = boxes.map(box => {
      if (box.id === boxId) {
        return { ...box, [fieldName]: value }
      }

      return box
    })

    setBoxes(updatedBoxes)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className='resume-layout'>
        <CardHeader title='Project Brief' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Button
          type='button'
          variant='outlined'
          startIcon={<AddIcon />}
          onClick={handleAddBox}
          color='primary'
          className='add-box'
        >
          Add Box
        </Button>
        <Box className='resume-box' sx={{ margin: 10 }}>
          {boxes.map((box, index) => (
            <Box key={box.id} mb={2} border={1} borderRadius={2} p={2} className='resume-sub-box'>
              <IconButton
                className='delete-icon'
                size='small'
                color='secondary'
                onClick={() => handleDeleteBox(box.id)}
              >
                <DeleteIcon />
              </IconButton>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Project Title'
                    placeholder=''
                    value={box.projectTitle || ''}
                    onChange={event => handleInputChange(box.id, 'projectTitle', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`projectTitle-${index}`] && formik.errors[`projectTitle-${index}`] && (
                    <div className='error-message'>{formik.errors[`projectTitle-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} className='resume-field'>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label='Audience'
                    placeholder=''
                    value={box.audience || ''}
                    onChange={event => handleInputChange(box.id, 'audience', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`audience-${index}`] && formik.errors[`audience-${index}`] && (
                    <div className='error-message'>{formik.errors[`audience-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Purpose'
                    placeholder=''
                    value={box.purpose || ''}
                    onChange={event => handleInputChange(box.id, 'purpose', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`purpose-${index}`] && formik.errors[`purpose-${index}`] && (
                    <div className='error-message'>{formik.errors[`purpose-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Team Size'
                    placeholder=''
                    value={box.teamsize || ''}
                    onChange={event => handleInputChange(box.id, 'teamsize', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`teamsize-${index}`] && formik.errors[`teamsize-${index}`] && (
                    <div className='error-message'>{formik.errors[`teamsize-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Goal'
                    placeholder=''
                    value={box.goal || ''}
                    onChange={event => handleInputChange(box.id, 'goal', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`goal-${index}`] && formik.errors[`goal-${index}`] && (
                    <div className='error-message'>{formik.errors[`goal-${index}`]}</div>
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Card>
    </form>
  )
}
