import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import ReactApexChart from 'react-apexcharts'

import { Bar } from 'react-chartjs-2'

const ProfileTrends = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        // endingShape: 'rounded'
      }
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005]
    },
    fill:{
      colors:["#A5D8DD"]
    }
  })
  const [series, setSeries] = useState([
    {
      name: 'group-1',
      data: [65, 59, 83, 89, 76],
      backgroundColor: '#eab676'
    }
  ])
  return (
    <>
      <div>
        <Typography className='chart-title'>Profile Trends</Typography>
        <ReactApexChart className="column-graph" options={options} series={series} type='bar' />
      </div>
    </>
  )
}

export default ProfileTrends
