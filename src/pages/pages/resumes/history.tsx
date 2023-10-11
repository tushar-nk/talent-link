import React, { useState } from 'react'
import { Card, Grid, CardHeader, TextField, Button, IconButton, Box } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useFormik } from 'formik'

const initialBox = {
  company: '',
  work: '',
  job: '',
  years: ''
}

let nextId = 1

function generateUniqueId() {
  return nextId++
}

export default function HistoryCard() {
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
      
      return box;
    });


    setBoxes(updatedBoxes)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className='resume-layout'>
        <CardHeader title='Employment History' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
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
                    label='Name Of Company'
                    placeholder=''
                    value={box.company || ''}
                    onChange={event => handleInputChange(box.id, 'company', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`company-${index}`] && formik.errors[`company-${index}`] && (
                    <div className='error-message'>{formik.errors[`company-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} className='resume-field'>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label='Short Description Of Work'
                    placeholder=''
                    value={box.work || ''}
                    onChange={event => handleInputChange(box.id, 'work', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`work-${index}`] && formik.errors[`work-${index}`] && (
                    <div className='error-message'>{formik.errors[`work-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Job Role'
                    placeholder=''
                    value={box.job || ''}
                    onChange={event => handleInputChange(box.id, 'job', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`job-${index}`] && formik.errors[`job-${index}`] && (
                    <div className='error-message'>{formik.errors[`job-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Years'
                    placeholder=''
                    value={box.years || ''}
                    onChange={event => handleInputChange(box.id, 'years', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`years-${index}`] && formik.errors[`years-${index}`] && (
                    <div className='error-message'>{formik.errors[`years-${index}`]}</div>
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
