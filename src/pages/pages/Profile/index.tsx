import React, { useState } from 'react'
import {
  FormControl,
  Grid,
  Select,
  FormLabel,
  MenuItem,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import ProfileFilter from 'src/views/Profile/ProfileFilter'
import Profiles from 'src/views/Profile/Profiles'

const index = () => {
  const [isIconClicked, setIsIconClicked] = useState(false)

  const handleIconClick = () => {
    setIsIconClicked(prevState => !prevState)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControl sx={{ marginRight: '20px' }}>
          <Select>
            <MenuItem value={1}>Most Recent</MenuItem>
            <MenuItem value={2}>Most Viewed</MenuItem>
            <MenuItem value={3}>Most Searched</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select>
            <MenuItem value={1}>10 per page</MenuItem>
            <MenuItem value={2}>20 per page</MenuItem>
            <MenuItem value={3}>30 per page</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={6}>
        <Grid item xs={4}>
          <ProfileFilter />
        </Grid>
        <Grid item xs={8}>
          <Profiles />
        </Grid>
      </Grid>
      {/* <div>
        <Card style={{ display: 'flex', flexDirection: 'column', height: '20%', width: '20%' }}>
          <CardContent style={{ flex: '1' }}>
            <FormLabel>Serch Keyword</FormLabel>
            <TextField label='Search Keyword' variant='outlined' margin='normal' />
            <FormLabel>Location</FormLabel>
            <TextField label='Location' variant='outlined' margin='normal' />
          </CardContent>
        </Card>

        <Card style={{ display: 'flex', flexDirection: 'column', height: '17%', width: '20%', marginTop: '20px' }}>
          <CardContent style={{ flex: '1' }}>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='female'
                name='radio-buttons-group'
              >
                <FormControlLabel value='Full Time' control={<Radio />} label='Full Time' />
                <FormControlLabel value='Part Time' control={<Radio />} label='Part Time' />
                <FormControlLabel value='Intership' control={<Radio />} label='Intership' />
                <FormControlLabel value='Contract Base' control={<Radio />} label='Contract' />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>

        <Card style={{ display: 'flex', flexDirection: 'column', height: '17%', width: '20%', marginTop: '20px' }}>
          <CardContent style={{ flex: '1' }}>
            <TextField
              label='Company'
              variant='outlined'
              margin='normal'
              InputProps={{
                endAdornment: <AddCircleIcon onClick={handleIconClick} style={{ cursor: 'pointer' }} />
              }}
            />
            <TextField
              label='Designation'
              variant='outlined'
              margin='normal'
              InputProps={{
                endAdornment: <AddCircleIcon onClick={handleIconClick} style={{ cursor: 'pointer' }} />
              }}
            />
            <TextField
              label='Experience'
              variant='outlined'
              margin='normal'
              InputProps={{
                endAdornment: <AddCircleIcon onClick={handleIconClick} style={{ cursor: 'pointer' }} />
              }}
            />
            <TextField
              label='Qualification'
              variant='outlined'
              margin='normal'
              InputProps={{
                endAdornment: <AddCircleIcon onClick={handleIconClick} style={{ cursor: 'pointer' }} />
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div>
        <div>
          <Card style={{ display: 'flex', flexDirection: 'column', height: '27%', width: '25%' }}>
            <CardContent style={{ flex: '1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>Full Time</Typography>
                <FavoriteBorderIcon
                  onClick={handleIconClick}
                  color={isIconClicked ? 'error' : 'inherit'} // Change color based on state
                  sx={{ cursor: 'pointer' }}
                />
              </div>

              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src='/images/avatars/1.png' alt='' style={{ width: '50%' }} />

                <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 1 }}>
                  Solution Archtiect
                </Typography>
                <Typography>Net For Nuts</Typography>
                <Typography sx={{ fontSize: 'small' }}>Ahmedabad, Gujarat</Typography>
                <Typography sx={{ color: 'red' }}>*****(Available after 3 months)</Typography>

                <Button variant='contained' color='primary' sx={{ marginTop: '10px' }}>
                  Hire
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </>
  )
}

export default index
