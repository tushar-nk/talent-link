// ** MUI Imports
import React from 'react'

// ** Custom Components Imports
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical/index'

// ** Styled Component Import

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'

import { Card } from '@mui/material'
import dynamic from 'next/dynamic'

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
      <div>
        <Table />
      </div>
    </div>
  )
}

export default Dashboard
