// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import React, { useState } from 'react'

const CardUser = () => {
  const [isIconClicked, setIsIconClicked] = useState(false)

  const handleIconClick = () => {
    setIsIconClicked(prevState => !prevState)
  }
  return (
    <Card>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Full Time</Typography>
        <FavoriteBorderIcon
         onClick={handleIconClick}
         color={isIconClicked ? 'error' : 'inherit'} // Change color based on state
         sx={{ cursor: 'pointer' }} />
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src='/images/avatars/1.png' alt='' style={{ width: '50%' }} />

        <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 1 }}>
          Solution Archtiect
        </Typography>
        <Typography>Net For Nuts</Typography>
        <Typography sx={{ fontSize: 'small' }}>Ahmedabad, Gujarat</Typography>
        <Typography sx={{ color: 'red' }}>*****(Available after 3 months)</Typography>

        <Button variant='contained' color='primary' sx={{marginTop: '10px'}}>
          Hire
        </Button>
      </Box>
    </CardContent>
  </Card>  )
}

export default CardUser
