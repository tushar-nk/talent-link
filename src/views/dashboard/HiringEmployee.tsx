import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import ReactApexChart from 'react-apexcharts'

const HiringEmployee = () => {
  const [options] = useState({
    chart: {
      height: 350,
      stacked: true
    },

    xaxis: {
      categories: ['jan', 'feb', 'march', 'april', 'june', 'july', 'aug', 'sep']
    },
    fill: {
      opacity: 1,
      colors: ['#A5D8DD', '#EA6A47','#1C4E80' ]
    }
  })
  const [series] = useState([
    {
      name: 'PRODUCT A',
      data: [35, 20, 55, 50, 22, 43, 21, 49]
    },
    {
      name: 'PRODUCT B',
      data: [27, 23, 20, 14, 13, 27, 33, 12]
    },
    {
      name: 'PRODUCT C',
      data: [45, 31, 40, 25, 21, 34, 20, 30]
    }
  ])
  return (
    <>
      <div>
        <Typography className='chart-title'>MonthWise Hire Employee</Typography>
        <ReactApexChart className='column-graph' options={options} series={series} type='bar' height={500} />
      </div>
    </>
  )
}

export default HiringEmployee
