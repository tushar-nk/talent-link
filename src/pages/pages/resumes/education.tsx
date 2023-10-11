import React, { useState } from 'react'
import { Card, Grid, CardHeader, TextField, Button, IconButton, Box } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useFormik } from 'formik'

const initialBox = {
  university: '',
  degree: '',
  passedYear: ''
}

let nextId = 1

function generateUniqueId() {
  return nextId++
}

export default function EducationCard() {
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
        <CardHeader title='Education' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
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
                    label='University'
                    placeholder=''
                    value={box.university || ''}
                    onChange={event => handleInputChange(box.id, 'university', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`university-${index}`] && formik.errors[`university-${index}`] && (
                    <div className='error-message'>{formik.errors[`university-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Degree'
                    placeholder=''
                    value={box.degree || ''}
                    onChange={event => handleInputChange(box.id, 'degree', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`degree-${index}`] && formik.errors[`degree-${index}`] && (
                    <div className='error-message'>{formik.errors[`degree-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className='resume-field'>
                  <TextField
                    fullWidth
                    label='Passed Year'
                    placeholder=''
                    value={box.passedYear || ''}
                    onChange={event => handleInputChange(box.id, 'passedYear', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`passedYear-${index}`] && formik.errors[`passedYear-${index}`] && (
                    <div className='error-message'>{formik.errors[`passedYear-${index}`]}</div>
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
