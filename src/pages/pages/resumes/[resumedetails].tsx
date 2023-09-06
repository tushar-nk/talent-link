import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button, CardActions, Chip, Stack, Typography } from '@mui/material'

// ** icons
import EditIcon from '@mui/icons-material/Edit'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'

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

  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Basic Details' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ display: 'flex', mt: 10, mb: 10 }}>
          <ImgStyled src={imgSrc} alt='Profile Pic' sx={{ ml: 8 }} />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3} sx={{ mt: 10, ml: 2 }}>
              <TextField fullWidth label='Employee Name' placeholder='carter Leonerd' />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ mt: 10, ml: 2 }}>
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
            <Grid item xs={12} sm={4} sx={{ mt: 10, ml: 2 }}>
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
            <Grid item xs={12} sm={3} sx={{ ml: 2 }}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={8} sx={{ ml: 2 }}>
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
            <Grid item xs={12} sm={4} sx={{ ml: 2 }}>
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
            <Grid item xs={12} sm={4} sx={{ ml: 2 }}>
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
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Location' placeholder='Gujarat' />
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Card sx={{ mb: 6 }}>
        <CardHeader title='Technical Skills' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ mt: 10, mb: 10 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ ml: 8, fontSize: '20px' }}>Skills</Typography>
            <EditIcon sx={{ ml: 8, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Stack direction='row' spacing={1} sx={{ paddingLeft: 6, paddingTop: 6 }}>
              <Chip
                label='Web Application'
                variant='outlined'
                onClick={handleClick}
                onDelete={handleDelete}
                className='skill-title'
              />
            </Stack>
            <Stack direction='row' spacing={1} sx={{ paddingLeft: 6, paddingTop: 6 }}>
              <Chip
                label='Mobile Application'
                variant='outlined'
                onClick={handleClick}
                onDelete={handleDelete}
                className='skill-title'
              />
            </Stack>
          </Box>
        </Box>
      </Card>

      <Card sx={{ mb: 6 }}>
        <CardHeader title='Project Brief' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ mt: 10, mb: 40 }}></Box>
      </Card>

      <Card sx={{ mb: 6 }}>
        <CardHeader title='Educational Details' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ mt: 10, mb: 10 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ ml: 8, fontSize: '20px' }}>Education</Typography>
            <AddCircleIcon sx={{ ml: 8, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ display: 'flex', mt: 8 }}>
            <Typography variant='h6' sx={{ ml: 8 }}>
              L D Engg
            </Typography>
            <EditIcon sx={{ ml: 20, cursor: 'pointer' }} />
            <DeleteIcon sx={{ ml: 6, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ ml: 8 }}>
            <Typography>Bachelor's degree</Typography>
            <Typography>2000-2003</Typography>
          </Box>
        </Box>
      </Card>

      <Card sx={{ mb: 6 }}>
        <CardHeader title='Testimonials' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ mt: 10, mb: 10 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ ml: 8, fontSize: '20px' }}>Testimonials</Typography>
            <AddCircleIcon sx={{ ml: 8, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ display: 'flex', mt: 8 }}>
            <Typography variant='h6' sx={{ ml: 8 }}>
              L D Engg
            </Typography>
            <EditIcon sx={{ ml: 20, cursor: 'pointer' }} />
            <DeleteIcon sx={{ ml: 6, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ ml: 8 }}>
            <Typography>Bachelor's degree</Typography>
            <Typography>2000-2003</Typography>
          </Box>
        </Box>
      </Card>

      <Card sx={{ mb: 6 }}>
        <CardHeader title='Employment History' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ mt: 10, mb: 10 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ ml: 8, fontSize: '20px' }}>Employment History</Typography>
            <AddCircleIcon sx={{ ml: 8, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ display: 'flex', mt: 8 }}>
            <Typography variant='h6' sx={{ ml: 8 }}>
              L D Engg
            </Typography>
            <EditIcon sx={{ ml: 20, cursor: 'pointer' }} />
            <DeleteIcon sx={{ ml: 6, cursor: 'pointer' }} />
          </Box>
          <Box sx={{ ml: 8 }}>
            <Typography>Bachelor's degree</Typography>
            <Typography>2000-2003</Typography>
          </Box>
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
