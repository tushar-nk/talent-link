import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Button, CardActions, Chip, Stack, TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

// ** icons
import EditIcon from '@mui/icons-material/Edit'
import CommonHeader from 'src/layouts/components/vertical/Header'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

export default function ResumeDetails() {
  const [imgSrc] = useState<string>('/images/avatars/1.png')
  const [company, setCompany] = useState<string[]>([])
  const [designation, setDesignation] = useState<string[]>([])
  const [language, setLanguage] = useState<string[]>([])
  const [experience, setExperience] = useState<string[]>([])
  const [availability, setAvailability] = useState<string[]>([])
  const [date, setDate] = useState<Date | null | undefined>(null)
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

  // Handle Select
  const handleSelectCompany = (event: SelectChangeEvent<string[]>) => {
    setCompany(event.target.value as string[])
  }

  const handleSelectDesignation = (event: SelectChangeEvent<string[]>) => {
    setDesignation(event.target.value as string[])
  }

  const handleSelectLanguage = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  const handleSelectExperience = (event: SelectChangeEvent<string[]>) => {
    setExperience(event.target.value as string[])
  }

  const handleSelectAvailability = (event: SelectChangeEvent<string[]>) => {
    setAvailability(event.target.value as string[])
  }

  const CustomInput = (props: any) => {
    return <TextField fullWidth {...props} label='Birth Date' autoComplete='off' />
  }

  return (
    <>
   <CommonHeader/>
      <Card className='resume-layout'>
        <CardHeader title='Basic Details' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Box sx={{ display: 'flex', margin: 10 }}>
          <ImgStyled src={imgSrc} alt='Profile Pic' />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Employee Name' placeholder='carter Leonerd' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Company Name</InputLabel>
                <Select
                  value={company}
                  onChange={handleSelectCompany}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Company Name' id='select-multiple-language' />}
                >
                  <MenuItem value='Seven Square'>Seven Square</MenuItem>
                  <MenuItem value='Tridhya'>Tridhya</MenuItem>
                  <MenuItem value='Upsquare'>Upsquare</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Designation</InputLabel>
                <Select
                  value={designation}
                  onChange={handleSelectDesignation}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Designation' id='select-multiple-language' />}
                >
                  <MenuItem value='Junior Developer'>Junior Developer</MenuItem>
                  <MenuItem value='Project Manager'>Project Manager</MenuItem>
                  <MenuItem value='Associate'>Associate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <DatePickerWrapper>
                <DatePicker
                  selected={date}
                  showYearDropdown
                  showMonthDropdown
                  placeholderText='MM-DD-YYYY'
                  customInput={<CustomInput />}
                  id='form-layouts-separator-date'
                  onChange={(date: Date) => setDate(date)}
                />
              </DatePickerWrapper>
            </Grid>
            <Grid item xs={12} sm={9}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  value={language}
                  onChange={handleSelectLanguage}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Hindi'>Hindi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Experience</InputLabel>
                <Select
                  value={experience}
                  onChange={handleSelectExperience}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Experience' id='select-multiple-language' />}
                >
                  <MenuItem value='0-12 months'>0-12 months</MenuItem>
                  <MenuItem value='1-2 years'>1-2 years</MenuItem>
                  <MenuItem value='2-5 years'>2-5 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Availability</InputLabel>
                <Select
                  value={availability}
                  onChange={handleSelectAvailability}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Availability' id='select-multiple-language' />}
                >
                  <MenuItem value='Part Time'>Part Time</MenuItem>
                  <MenuItem value='Full Time'>Full Time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Location' placeholder='Gujarat' />
            </Grid>
          </Grid>
        </Box>
      </Card>

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
                options={['abc', 'xyz']} // Replace with your list of available options
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
