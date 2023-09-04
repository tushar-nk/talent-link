// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SupportRequestDetails() {
  // ** States
  const [language, setLanguage] = useState<string[]>([])
  const [date, setDate] = useState<Date | null | undefined>(null)


  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  const CustomInput = (props: any) => {
    return <TextField fullWidth {...props} label='Birth Date' autoComplete='off' />
  }

  return (
    <Card>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent className='request-layout'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
            <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
                className='custom-datepicker'
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth label='User Name' placeholder='carter Leonard' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Mobile no' placeholder='9999999999' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='carterLeonard@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label='Subject' placeholder='register new device' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth multiline rows={3} label='Message' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Response' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Status</InputLabel>
                <Select
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Status' id='select-multiple-language' />}
                >
                  <MenuItem value='In progress'>In progress</MenuItem>
                  <MenuItem value='On hold'>On hold</MenuItem>
                  <MenuItem value='Resolved'>Resolved</MenuItem>
                  <MenuItem value='Closed'>Closed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className='request-layout-btn'>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button size='large' type='submit' variant='contained'>
            Send
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}


