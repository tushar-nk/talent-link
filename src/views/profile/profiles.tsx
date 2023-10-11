import React, { useState } from 'react'
import { Card, CardContent, Button, Typography, Grid, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useRouter } from 'next/router'

const Profiles = () => {
  const [isIconClicked, setIsIconClicked] = useState(Array(6).fill(false))

  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/pages/hire-request/hiredetails')
  }

  const handleIconClick = index => {
    setIsIconClicked(prevState => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }

  console.log('AS')
  const profilesData = [
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    },
    {
      jobType: 'Full Time',
      title: 'Solution Architect',
      company: 'Net For Nuts',
      location: 'Ahmedabad, Gujarat',
      availability: 'Available after 3 months',
      imageSrc: '/images/avatars/1.png'
    }
  ]

  return (
    <>
      <div>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginBottom: 4
          }}
        >
          500 Profiles
        </Typography>

        <Grid container spacing={2}>
          {profilesData.map((profile, index) => (
            <Grid item xs={4} key={index}>
              <Card>
                <CardContent style={{ width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Typography>{profile.jobType}</Typography>
                    <IconButton
                      onClick={() => handleIconClick(index)}
                      color={isIconClicked[index] ? 'error' : 'inherit'}
                      sx={{ cursor: 'pointer' }}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={profile.imageSrc} alt='' style={{ borderRadius: '50%', width: '50%' }} />

                    <Typography>{profile.title}</Typography>
                    <Typography>{profile.company}</Typography>
                    <Typography sx={{ fontSize: 'small' }}>{profile.location}</Typography>
                    <Typography sx={{ color: 'red', fontSize: '0.8em' }}>{profile.availability}</Typography>

                    <Button variant='contained' onClick={handleButtonClick} style={{ marginTop: '10px' }}>
                      HIRE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Profiles
