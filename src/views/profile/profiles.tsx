import React, { useState } from 'react'
import { Card, CardContent, Button, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const Profiles = () => {
  const [isIconClicked, setIsIconClicked] = useState(Array(6).fill(false))

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
  const firstRowProfiles = profilesData.slice(0, 3)
  const secondRowProfiles = profilesData.slice(3, 6)

  return (
    <>
      <div>
        <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 4 }}>
          500 Profiles
        </Typography>

        {/* First Row of Cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {firstRowProfiles.map((profile, index) => (
            <Card key={index} style={{ flex: '1', marginRight: '20px' }}>
              <CardContent style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{profile.jobType}</Typography>
                  <FavoriteBorderIcon
                    onClick={() => handleIconClick(index)} // Pass the index of the clicked card
                    color={isIconClicked[index] ? 'error' : 'inherit'} // Use the corresponding state value
                    sx={{ cursor: 'pointer' }}
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={profile.imageSrc} alt='' style={{ width: '50%' }} />

                  <Typography>{profile.title}</Typography>
                  <Typography>{profile.company}</Typography>
                  <Typography sx={{ fontSize: 'small' }}>{profile.location}</Typography>
                  <Typography sx={{ color: 'red', fontSize: '0.8em' }}>{profile.availability}</Typography>

                  <Button variant='contained' color='primary' sx={{ marginTop: '10px' }}>
                    Hire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row of Cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {secondRowProfiles.map((profile, index) => (
            <Card key={index} style={{ flex: '1', marginRight: '20px' }}>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{profile.jobType}</Typography>
                  <FavoriteBorderIcon
                    onClick={() => handleIconClick(index)}
                    color={isIconClicked[index] ? 'error' : 'inherit'}
                    sx={{ cursor: 'pointer' }}
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={profile.imageSrc} alt='' style={{ width: '50%' }} />

                  <Typography>{profile.title}</Typography>
                  <Typography>{profile.company}</Typography>
                  <Typography sx={{ fontSize: 'small' }}>{profile.location}</Typography>
                  <Typography sx={{ color: 'red', fontSize: '0.8em' }}>{profile.availability}</Typography>

                  <Button variant='contained' color='primary' sx={{ marginTop: '10px' }}>
                    Hire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {firstRowProfiles.map((profile, index) => (
            <Card key={index} style={{ flex: '1', marginRight: '20px' }}>
              <CardContent style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{profile.jobType}</Typography>
                  <FavoriteBorderIcon
                    onClick={() => handleIconClick(index)} // Pass the index of the clicked card
                    color={isIconClicked[index] ? 'error' : 'inherit'} // Use the corresponding state value
                    sx={{ cursor: 'pointer' }}
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={profile.imageSrc} alt='' style={{ width: '50%' }} />

                  <Typography>{profile.title}</Typography>
                  <Typography>{profile.company}</Typography>
                  <Typography sx={{ fontSize: 'small' }}>{profile.location}</Typography>
                  <Typography sx={{ color: 'red', fontSize: '0.8em' }}>{profile.availability}</Typography>

                  <Button variant='contained' color='primary' sx={{ marginTop: '10px' }}>
                    Hire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profiles
