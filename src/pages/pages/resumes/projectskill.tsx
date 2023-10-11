import React, { useState } from 'react'
import { Chip, Stack, TextField, Typography, Card, CardHeader, Box, Autocomplete } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export default function ProjectSkill() {
  const [skills, setSkills] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingSkillIndex, setEditingSkillIndex] = useState(-1)
  const [newSkill, setNewSkill] = useState('')

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      const updatedSkills = [...skills]
      if (editingSkillIndex === -1) {
        updatedSkills.push(newSkill)
      } else {
        updatedSkills[editingSkillIndex] = newSkill
        setEditingSkillIndex(-1)
      }
      setSkills(updatedSkills)
      setNewSkill('')
      setIsEditing(false)
    }
  }

  const handleEditSkill = index => {
    setIsEditing(true)
    setEditingSkillIndex(index)
    setNewSkill(skills[index])
  }

  const handleDeleteSkill = index => {
    const updatedSkills = [...skills]
    updatedSkills.splice(index, 1)
    setSkills(updatedSkills)
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
    if (!isEditing) {
      setNewSkill('')
      setEditingSkillIndex(-1)
    }
  }

  return (
    <>
    <Card className='resume-layout'>
      <CardHeader title='Technical Skills' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
      <Box sx={{ margin: 10 }}>
        
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontSize: '20px' }}>Skills</Typography>
          <EditIcon sx={{ marginLeft: 7, cursor: 'pointer' }} onClick={toggleEdit} />
        </Box>
        <Stack direction='row' spacing={1} sx={{ marginTop: 5 }}>
          {isEditing ? (
            <Autocomplete
              freeSolo
              value={newSkill}
              options={['abc', 'xyz']}
              onChange={(event, newValue) => setNewSkill(newValue)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleAddSkill()
                }
              }}
              renderInput={params => (
                <div style={{ alignItems: 'center', width: '180px', marginRight: 5 }}>
                  <TextField {...params} label='New Skill' variant='outlined' fullWidth autoFocus />
                </div>
              )}
            />
          ) : null}
          {skills.map((skill, index) => (
            <div key={index}>
              <Chip
                label={skill}
                variant='outlined'
                onDelete={() => handleDeleteSkill(index)}
                onClick={() => handleEditSkill(index)}
                className='skill-title'
              />
            </div>
          ))}
        </Stack>
      </Box>
    </Card>
    </>
  )
}
