import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export default function TestimonialCard() {
  const [educationDetails, setEducationDetails] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)
  const [newSchool, setNewSchool] = useState('')
  const [newDegree, setNewDegree] = useState('')
  const [newYears, setNewYears] = useState('')

  const handleAddEducation = () => {
    if (!isEditing) {
      setIsEditing(true)
    } else if (editIndex === -1) {
      const newEntry = {
        school: newSchool,
        degree: newDegree,
        years: newYears
      }

      setEducationDetails([...educationDetails, newEntry])

      // Clear the input fields
      setNewSchool('')
      setNewDegree('')
      setNewYears('')
      setIsEditing(false)
    } else {
      const updatedEducationDetails = [...educationDetails]
      updatedEducationDetails[editIndex] = {
        school: newSchool,
        degree: newDegree,
        years: newYears
      }

      setEducationDetails(updatedEducationDetails)

      // Clear the input fields
      setNewSchool('')
      setNewDegree('')
      setNewYears('')
      setIsEditing(false)
      setEditIndex(-1)
    }
  }

  const handleEditEducation = index => {
    const eduToEdit = educationDetails[index]
    setNewSchool(eduToEdit.school)
    setNewDegree(eduToEdit.degree)
    setNewYears(eduToEdit.years)
    setIsEditing(true)
    setEditIndex(index)
  }

  const handleDeleteEducation = index => {
    const updatedEducationDetails = [...educationDetails]
    updatedEducationDetails.splice(index, 1)

    setEducationDetails(updatedEducationDetails)
  }

  return (
    <Card className='resume-layout'>
      <CardHeader title='Testimonials' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
      <Box sx={{ margin: 10 }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontSize: '20px' }}>Testimonials</Typography>
          <AddCircleIcon sx={{ marginLeft: 8, cursor: 'pointer', marginTop: 1 }} onClick={handleAddEducation} />
        </Box>
        {educationDetails.map((edu, index) => (
          <Box key={index} sx={{ display: 'flex', marginTop: 8 }}>
            <>
              <div>
                <Typography variant='h6'>{edu.school}</Typography>
                <Typography>{edu.degree}</Typography>
                <Typography>{edu.years}</Typography>
              </div>
              <div>
                <EditIcon sx={{ marginLeft: 20, cursor: 'pointer' }} onClick={() => handleEditEducation(index)} />
                <DeleteIcon sx={{ marginLeft: 6, cursor: 'pointer' }} onClick={() => handleDeleteEducation(index)} />
              </div>
            </>
          </Box>
        ))}
        {isEditing && (
          <Box sx={{ display: 'flex', marginTop: 8, height: 30, gap: 3 }}>
            <input
              type='text'
              placeholder='School'
              value={newSchool}
              onChange={e => setNewSchool(e.target.value)}
              className='resume-data'
            />
            <input
              type='text'
              placeholder='Degree'
              value={newDegree}
              onChange={e => setNewDegree(e.target.value)}
              className='resume-data'
            />
            <input
              type='text'
              placeholder='Years'
              value={newYears}
              onChange={e => setNewYears(e.target.value)}
              className='resume-data'
            />
            <button onClick={handleAddEducation}>Save</button>
          </Box>
        )}
      </Box>
    </Card>
  )
}
