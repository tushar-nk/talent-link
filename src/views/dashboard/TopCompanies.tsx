import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const
    },
    title: {
      display: true,
      text: 'Top Companies'
    }
  }
}

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu'],
  datasets: [
    {
      data: [5, 10, 20, 30],
      backgroundColor: 'green'
    },
    {
      data: [7, 15, 25, 35],
      backgroundColor: 'blue'
    }
  ]
}

const TopCompanies = () => {
  return <Bar options={options} data={data} />
}

export default TopCompanies
