import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import ReactApexChart from 'react-apexcharts'

const TopCompanies = () => {
  const [options, setOptions] = useState({
    chart: {
      // type:"bar",
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005,]
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    fill:{
      colors:["#00A88F","#323B81"]
    }
  })
  const [series, setSeries] = useState([
    {
      name: 'group-1',
      data: [44, 55, 41, 64, 22, 43, 21]
    },
    {
      name: 'group-2',
      data: [53, 32, 33, 52, 13, 44, 32]
    }
  ])
  return (
    <>
    <Typography className='graphs-title'>Top Company</Typography>
    
      <ReactApexChart options={options} series={series} type='bar' />
    </>
  )
}

export default TopCompanies

// {(typeof window !== 'undefined') &&
    
//       <ReactApexChart options={options} series={series} type='bar' />
//   }