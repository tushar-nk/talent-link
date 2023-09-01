import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js'
import React from 'react'

import { Bar } from 'react-chartjs-2'

Chart.register(CategoryScale, LinearScale, BarElement)
const labels = ['1', '2', '3', '4', '5', '6']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'dataset',

      data: [65, 59, 83, 89, 76, 55],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }
  ]
}
const HiringEmployee = () => {
  return (
    <>
      <div className='main'>
        <h1 className='profile-head'>MonthWise Hire Employee</h1>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </>
  )
}

export default HiringEmployee
