import React from 'react'
import SubRequestTable from 'src/views/support-request/table'


import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import TableHeaderRequest from 'src/views/support-request/TableHeaders'

const SupportRequest = () => {
  return (
    <>
      <div  className='support-request'>
        <div className='support-request-category'>
          <CardStatisticsVerticalComponent className='open-color' stats='25' title='Open' />
          <CardStatisticsVerticalComponent className='progress-color' stats='78' title='In Progress' />
          <CardStatisticsVerticalComponent className='resolved-color' stats='862' title='Resolved' />
          <CardStatisticsVerticalComponent className='hold-color' stats='15' title='On Hold' />
          <CardStatisticsVerticalComponent className='total-hired-color' stats='15' title='Total Hired' />
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderRequest serachFunction={(e: number) => e} />
      </div>
      <SubRequestTable />
    </>
  )
}

export default SupportRequest
