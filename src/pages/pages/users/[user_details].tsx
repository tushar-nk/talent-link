// ** React Imports
import { ChangeEvent, ElementType, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const FormLayoutsSeparator = () => {
  // ** States
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  const [language, setLanguage] = useState<string[]>([])

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <Card>
      <Grid item xs={12} className='form-layout'>
        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
          <ImgStyled src={imgSrc} alt='Profile Pic' />
          <Grid sx={{ mt: 10 }}>
            <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
              Upload New Photo
              <input
                hidden
                type='file'
                onChange={onChange}
                accept='image/png, image/jpeg'
                id='account-settings-upload-image'
              />
            </ButtonStyled>
            <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
              Reset
            </ResetButtonStyled>
            <Typography variant='body2' sx={{ mt: 5 }}>
              Allowed PNG or JPEG. Max size of 800K.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent className='form-layout'>
          <Grid container spacing={5}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='First Name' placeholder='carter' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Last Name' placeholder='leonard' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label='User Name' placeholder='carterLeonard' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth type='email' label='Email' placeholder='carterLeonard@gmail.com' />
            </Grid>
            <Grid item sm={12} sx={{ display: 'flex' }}>
              <FormControl className='min-w-[5rem]' sx={{ marginRight: '1rem' }}>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK' className='px-2 py-1 text-xs'>
                    +91
                  </MenuItem>
                  <MenuItem value='USA' className='px-2 py-1 text-xs'>
                    +1
                  </MenuItem>
                  <MenuItem value='Australia' className='px-2 py-1 text-xs'>
                    +44
                  </MenuItem>
                  <MenuItem value='Germany' className='px-2 py-1 text-xs'>
                    +64
                  </MenuItem>
                </Select>
              </FormControl>
              <Grid item xs={12} sm={12}>
              <TextField fullWidth label='Mobile no' placeholder='9999999999' />
            </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Role</InputLabel>
                <Select
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className='form-layout'>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button size='large' type='submit' variant='contained'>
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
