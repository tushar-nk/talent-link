import React from 'react'
import SubRequestTable from 'src/views/support-request/table'
import { Grid} from '@mui/material';
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

const SupportRequest = () => {
  return (
    <>
   <div style={{ marginBottom: '20px' }}>
          <Grid container spacing={2} columns={30}>
            <Grid item xs={2} sm={4} lg={6}>
              <CardStatisticsVerticalComponent
                stats='25'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Open'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={2} sm={4} lg={6}>
              <CardStatisticsVerticalComponent
                stats='78'
                title='In Progress'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={2} sm={4} lg={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='Resolved'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={2} sm={4} lg={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='On Hold'
                icon={<HelpCircleOutline />}
              />
            </Grid>
            <Grid item xs={2} sm={4} lg={6}>
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
          </div>
      
    <SubRequestTable/>
    </>
  )
}

export default SupportRequest
