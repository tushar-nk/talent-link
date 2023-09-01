// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

import BusinessIcon from '@mui/icons-material/Business'
import EditNoteIcon from '@mui/icons-material/EditNote'
import CategoryIcon from '@mui/icons-material/Category'
// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import TopCompanies from 'src/views/dashboard/TopCompanies'
import Hiring from 'src/views/dashboard/Hiring'
import ProfileTrends from 'src/views/dashboard/ProfileTrends'
import HiringEmployee from 'src/views/dashboard/HiringEmployee'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid item xs={4} md={4}>
        <Grid container spacing={6} columns={24}>
          <Grid className='dashboard-top-card' item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent
              stats='$25.6k'
              icon={<BusinessIcon />}
              color='success'
              trendNumber='+42%'
              title='Companies'
              subtitle='Weekly Profit'
            />
          </Grid>
          <Grid className='dashboard-top-card' item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent
              stats='$78'
              title='Resumes'
              trend='negative'
              color='secondary'
              trendNumber='-15%'
              subtitle='Past Month'
              icon={<EditNoteIcon />}
            />
          </Grid>
          <Grid className='dashboard-top-card' item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent
              stats='862'
              trend='negative'
              trendNumber='-18%'
              title='Categories'
              subtitle='Yearly Project'
              icon={<CategoryIcon />}
            />
          </Grid>
          <Grid className='dashboard-top-card' item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent
              stats='15'
              color='warning'
              trend='negative'
              trendNumber='-18%'
              subtitle='Last Week'
              title='Total Hired'
              icon={<HelpCircleOutline />}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className='dashboard-graphs' container spacing={2}>
        <Grid className='dashboard-company-chart' item xs={8}>
          <TopCompanies />
        </Grid>
        <Grid className='dashboard-pie-chart' item xs={4}>
          <Hiring />
        </Grid>
      </Grid>
      <div className='profile-trends'>
        <ProfileTrends />
      </div>
      <div className='hire-employee'>
        <HiringEmployee />
      </div>

      <div className='dashboard-table'>
        <Table />
      </div>
    </ApexChartWrapper>
  )
}

export default Dashboard
