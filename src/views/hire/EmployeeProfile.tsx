import { Card, Divider, Grid, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import EmailIcon from '@mui/icons-material/Email'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  //   marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const EmployeeProfile = () => {
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  return (
    <>
      <Card className='employees-profile card'>
        <Grid container columns={16}>
          <Grid className='divider' xs={8}>
            <div className='employee'>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Typography variant='h6'>Solution Archtiect</Typography>
              <Typography>Aplitech Solution PVT. LTD.</Typography>
              <Typography variant='caption'>Ahmedabad, Gujarat</Typography>
            </div>
          </Grid>
          {/* <div className='divider'></div> */}
          <Grid className='profile-grid' xs={8}>
            <div className='private-detail'>
              <CreditCardIcon />
              <Typography variant='caption' className='icon-text'>
                20K to 30K /Month
              </Typography>
            </div>
            <div className='private-detail'>
              <PhoneInTalkIcon />
              <Typography variant='caption' className='icon-text'>
                {' '}
                +91 00000 00000
              </Typography>
            </div>
            <div className='private-detail'>
              <EmailIcon />
              <Typography variant='caption' className='icon-text'>
                {' '}
                mail@gmail.com
              </Typography>
            </div>
            <div className='private-detail'>
              <CalendarMonthIcon />
              <Typography variant='caption' className='icon-text'>
                {' '}
                Full Time
              </Typography>
            </div>
            <div className='private-detail'>
              <AccessTimeIcon />
              <Typography variant='caption' className='icon-text'>
                {' '}
                3 Year Exp.
              </Typography>
            </div>
            <div className='private-detail'>
              <TrendingUpIcon />
              <Typography variant='caption' className='icon-text'>
                {' '}
                Available after 3 months
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default EmployeeProfile
