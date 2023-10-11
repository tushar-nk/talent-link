import React from 'react'
import SubRequestTable from 'src/views/support-request/table'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'


const SupportRequest = () => {
  return (
    <>
      <div  className='support-request'>
        <div className='support-request-category'>
          <CardStatisticsVerticalComponent className='card-bg-color' stats='25' title='Open' />
          <CardStatisticsVerticalComponent className='card-bg-color' stats='78' title='In Progress' />
          <CardStatisticsVerticalComponent className='card-bg-color' stats='862' title='Resolved' />
          <CardStatisticsVerticalComponent className='card-bg-color' stats='15' title='On Hold' />
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
      </div>
      <SubRequestTable />
    </>
  )
}

export default SupportRequest
