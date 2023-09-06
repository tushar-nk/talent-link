import React from 'react'
import SubRequestTable from 'src/views/support-request/table'
import { Grid } from '@mui/material'

import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

const SupportRequest = () => {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <Grid container spacing={2} columns={30}>
          <Grid item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent stats='25' title='Open' />
          </Grid>
          <Grid item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent stats='78' title='In Progress' />
          </Grid>
          <Grid item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent stats='862' title='Resolved' />
          </Grid>
          <Grid item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent stats='15' title='On Hold' />
          </Grid>
          <Grid item xs={2} sm={4} lg={6}>
            <CardStatisticsVerticalComponent stats='15' title='Total Hired' />
          </Grid>
        </Grid>
      </div>

      <SubRequestTable />
    </>
  )
}

export default SupportRequest
