import React from 'react'
import Typography from '@mui/material/Typography'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [149, 70, 50, 100],
      backgroundColor: ['#1C4E80','#A5D8DD', '#EA6A47','#0091D5', ], 
      hoverOffset: 4
    }
  ]
}

const Hiring = () => {
  return (
    <>
      <div>
        <Typography className='graphs-title'> Hiring Statistics</Typography>
        <Pie data={data} className='pie-chart' />
      </div>
    </>
  )
}

export default Hiring
