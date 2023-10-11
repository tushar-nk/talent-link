import React, { useState } from 'react'
import {
  Select,
  FormLabel,
  MenuItem,
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  CardHeader,
  InputLabel,
  FormControl
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const ProfileType = () => {
  return (
    <>
      <div>
        <Card style={{ marginBottom: '20px' }}>
          <CardContent style={{ flex: '1' }}>
            <FormLabel>Serch Keyword</FormLabel>
            <TextField label='Search Keyword' variant='outlined' margin='normal' />
            <FormLabel>Location</FormLabel>
            <TextField label='Location' variant='outlined' margin='normal' />
          </CardContent>
        </Card>

        <Card style={{ marginBottom: '20px' }}>
          <CardHeader title='Job Type' />
          <CardContent style={{ flex: '1' }}>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='female'
                name='radio-buttons-group'
              >
                <FormControlLabel value='Full Time' control={<Radio />} label='Full Time' />
                <FormControlLabel value='Part Time' control={<Radio />} label='Part Time' />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: '20px' }}>
          <CardContent style={{ flex: '1' }}>
            <FormControl fullWidth>
              <InputLabel>Company</InputLabel>
              <Select
                variant='outlined'
                label='Company'
                endAdornment={<AddCircleIcon style={{ cursor: 'pointer' }} />}
                IconComponent={null}
              >
                <MenuItem value='Company1'>Seven Square</MenuItem>
                <MenuItem value='Company2'>Tridhya Tech</MenuItem>
                <MenuItem value='company3'>Upsquare</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <InputLabel>Designation</InputLabel>
              <Select
                variant='outlined'
                label='Designation'
                endAdornment={<AddCircleIcon style={{ cursor: 'pointer' }} />}
                IconComponent={null}
              >
                <MenuItem value='Company1'>React Developer</MenuItem>
                <MenuItem value='Company2'>Node Developer</MenuItem>
                <MenuItem value='company3'>Flutter Developer</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <InputLabel>Experience</InputLabel>
              <Select
                variant='outlined'
                label='Experience'
                endAdornment={<AddCircleIcon style={{ cursor: 'pointer' }} />}
                IconComponent={null}
              >
                <MenuItem value='Company1'>Fresher</MenuItem>
                <MenuItem value='Company2'>1 Year</MenuItem>
                <MenuItem value='company3'>2 Year</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <InputLabel>Qualification</InputLabel>
              <Select
                variant='outlined'
                label='Qualification'
                endAdornment={<AddCircleIcon style={{ cursor: 'pointer' }} />}
                IconComponent={null}
              >
                <MenuItem value='Company1'>B.Tech/Cse</MenuItem>
                <MenuItem value='Company2'>M.Tech/Cse</MenuItem>
                <MenuItem value='company3'>Mca/Bca</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ProfileType
