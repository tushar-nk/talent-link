// ** MUI Imports
import React from 'react'

// ** Custom Components Imports
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical/index'
import { Card, Typography, Grid } from '@mui/material'
import dynamic from 'next/dynamic'
import SubRequestTable from 'src/views/support-request/table'

const TopCompany = dynamic(() => import('../../../views/dashboard/TopCompanies'), { ssr: false })
const Hiring = dynamic(() => import('../../../views/dashboard/Hiring'), { ssr: false })
const ProfileTrends = dynamic(() => import('../../../views/dashboard/ProfileTrends'), { ssr: false })
const HiringEmployee = dynamic(() => import('../../../views/dashboard/HiringEmployee'), { ssr: false })

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='hiring-categories'>
        <CardStatsVertical className='company-clr' stats='59' title='Companies' />
        <CardStatsVertical className='resume-clr' stats='82' title='Resumes' />
        <CardStatsVertical className='categories-clr' stats='132' title='Categories' />
        <CardStatsVertical className='total-clr' stats='10' title='Total Hired' />
      </div>

      <div className='dashboard-graphs'>
        <Card className='top-company-card'>
          <TopCompany />
        </Card>
        <Card className='hiring-card'>
          <Hiring />
        </Card>
      </div>
      <div>
        <Card className='profile-trend'>
          <ProfileTrends />
        </Card>
      </div>
      <div>
        <Card className='hire-employee'>
          <HiringEmployee />
        </Card>
      </div>
      <div className='dashboard-table'>
        <Typography variant='h5' sx={{ mb: 5 }}>
          Hiring Request
        </Typography>
        <SubRequestTable />
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Typography variant='h5' sx={{ mt: 10, mb: 5 }}>
          Latest Profiles
        </Typography>
          <SubRequestTable />
        </Grid>
        <Grid item xs={6}>
        <Typography variant='h5' sx={{ mt: 10, mb: 5 }}>
          Support Request
        </Typography>
          <SubRequestTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
