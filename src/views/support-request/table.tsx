import React, { useState } from 'react'
import Table from 'src/@core/table/Table'
import Image from 'next/image'
import TableHeader from '../role/TableHeaders'
import TableHeaderRequest from './TableHeaders'
import { Typography, Chip, Grid } from '@mui/material'

const SubRequestTable = () => {
  const userData: any = [
    {
      id: 1,
      username: 'Anand Jain',
      email: 'anandjain@gmail.com',
      mobile_no: '0987654356789',
      request_date: '01-02-2023',
      request_subject: 'Register new device'
      //  status:"open",
      //  actions: "blue"
    },
    {
      id: 2,
      username: 'Parag Shah',
      email: 'paragshah9@gmail.com',
      mobile_no: '0987654356789',
      request_date: '01-02-2023',
      request_subject: 'Payment issue'
      // status:"closed",
      // actions: "blue"
    }
  ]
  const columns = [
    {
      Header: 'UserName',
      accessor: 'username'
    },
    {
      Header: ' E-mail',
      accessor: 'email'
    },
    {
      Header: 'Mobile no.',
      accessor: 'mobile_no'
    },
    {
      Header: 'Request Date',
      accessor: 'request_date'
    },
    {
      Header: ' Request Subject',
      accessor: 'request_subject'
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({}) => {
        const [isActive, setIsActive] = useState(true)

        const handleClick = () => {
          setIsActive(!isActive)
        }
        return (
          <div onClick={handleClick}>
            <Chip
              sx={{
                height: 24,
                fontSize: '0.75rem',
                textTransform: 'capitalize',
                '& .MuiChip-label': { fontWeight: 500 }
              }}
              label={isActive ? 'Open' : 'Closed'}
              color={isActive ? 'info' : 'error'}
            />
          </div>
        )
      }
    },

    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({}) => {
        return (
          <div>
            <input
              type='radio'
              name='userSelection'
              // value={}
            />
          </div>
        )
      }
    }
  ]
  return (
    <div>
      {/* <div style={{ marginBottom: '20px' }}>
          <TableHeaderRequest
          serachFunction={(e: number) => (e)}
        />
        </div> */}
      <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default SubRequestTable
