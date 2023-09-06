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
      colors: ['#323B81', '#0087AC', '#82C272']
    }
  })
  const [series] = useState([
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13]
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
