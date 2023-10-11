import React, { useState } from 'react'
import { Card, Grid, CardHeader, TextField, Button, IconButton, Box, CardContent, Input } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useFormik } from 'formik'

const initialBox = {
  title: '',
  description: ''
}

let nextId = 1

function generateUniqueId() {
  return nextId++
}

export default function TestimonialCard() {
  const [boxes, setBoxes] = useState([{ ...initialBox, id: generateUniqueId() }])
  const [setSelectedFile] = useState(null)

  const handleFileChange = event => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

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
        return { ...box, [fieldName]: value };
      }
      
      return box; 
    });
  
    setBoxes(updatedBoxes);
  };
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className='resume-layout'>
        <CardHeader title='Testimonials' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
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
                    label='Title'
                    placeholder=''
                    value={box.title || ''}
                    onChange={event => handleInputChange(box.id, 'title', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`title-${index}`] && formik.errors[`title-${index}`] && (
                    <div className='error-message'>{formik.errors[`title-${index}`]}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} className='resume-field'>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label='Description Of Reward'
                    placeholder=''
                    value={box.description || ''}
                    onChange={event => handleInputChange(box.id, 'description', event.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[`description-${index}`] && formik.errors[`description-${index}`] && (
                    <div className='error-message'>{formik.errors[`description-${index}`]}</div>
                  )}
                </Grid>
                <CardContent>
                  <CardHeader
                    title='Upload Photo'
                    titleTypographyProps={{ variant: 'h2' }}
                    className='support-subject'
                  />
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={12}>
                      <Input type='file' name='photo' onChange={handleFileChange} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Box>
          ))}
        </Box>
      </Card>
    </form>
  )
}
