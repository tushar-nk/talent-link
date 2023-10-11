import React, { useState } from 'react'
import Table from 'src/@core/table/Table'
import { Chip } from '@mui/material'
import TableHeaderHire from './TableHeaders'
import { useRouter } from 'next/router'
import CommonActions from 'src/@core/utils/CommonActions'

const HireRequestTable = () => {
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/pages/hire-request/hiredetails')
  }
  const userData: any = [
    {
      id: 1,
      name: 'Giacomo Guilizzoni ',
      jobProfile: 'Project Mananger ',
      company: 'Ice Cubes',
      hiring_company: 'Net 4 Nuts',
      request_date: '31-03-2023',
      hiring_period: '01-05-2023|30-06-2023',
      skills: 'AWS Certified',
      qualification: 'Computer Science',
      expericence: '5',
      age: '40',
      available: 'Yes'
    },
    {
      id: 2,
      name: 'Marco Botton ',
      jobProfile: 'Product Owner',
      company: 'Datamatics',
      hiring_company: 'Applitech Solution',
      request_date: '31-03-2023',
      hiring_period: '01-05-2023|30-06-2023',
      skills: 'AWS Certified',
      qualification: 'Computer Science',
      expericence: '5',
      age: '38',
      available: 'No(avaliable after 3 Months)'
    },
    {
      id: 3,
      name: 'Mariah Maclachlan ',
      jobProfile: 'Sr. Developer',
      company: 'Gateway',
      hiring_company: 'Icecubes Tech',
      request_date: '31-03-2023',
      hiring_period: '01-05-2023|30-06-2023',
      skills: 'AWS Certified',
      qualification: 'Computer Science',
      expericence: '5',
      age: '35',
      available: 'Yes'
    }
  ]
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ row }) => (
        <div style={{ whiteSpace: 'nowrap' }}>
          <strong>{row.original.name}</strong>
          <br />
          {row.original.jobProfile}
        </div>
      )
    },
    {
      Header: ' Company',
      accessor: 'company'
    },
    {
      Header: 'Hiring Company',
      accessor: 'hiring_company'
    },
    {
      Header: 'Request Date ',
      accessor: 'request_date',
      Cell: ({ value }: any) => {
        return <div style={{ whiteSpace: 'nowrap' }}>{value}</div>
      }
    },
    {
      Header: 'Hiring Period ',
      accessor: 'hiring_period'
      //   Cell: ({ value }:any) => {
      //     return (
      //       <div style={{ whiteSpace: 'nowrap' }}>
      //         {value}
      //       </div>
      //     )
      // }
    },
    {
      Header: ' Skills',
      accessor: 'skills'
    },
    {
      Header: ' Qualification',
      accessor: 'qualification'
    },
    {
      Header: ' Expericence',
      accessor: 'expericence',
      className: 'center-align',
    },
    {
      Header: ' Age',
      accessor: 'age'
    },
    {
      Header: 'Available',
      accessor: 'available'
    },
    {
      Header: 'Approved',
      accessor: 'approved',
      className: 'center-align',

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
                '& .MuiChip-label': { fontWeight: 500 },
                backgroundColor: isActive ? '#2e7d32' : '#c62828', 
                color: '#ffffff', 
              }}
              label={isActive ? 'Yes' : 'No'}
              color={isActive ? 'success' : 'error'}
            />
          </div>
        )
      }
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ value, row }: any) => {
        const menuLabels = ['View', 'Edit', 'Soft Delete', 'Hard Delete'];
        const handleMenuItemClick = (key, menuItem) => {
          console.log(`Clicked: ${key} - ${menuItem}`);
        }
        return (
          <>
            <CommonActions onMenuItemClick={handleMenuItemClick} menuLabels={menuLabels} />
          </>
        )
      }
    }
  ]
  return (
    <div>
      <div style={{ marginBottom: '20px', whiteSpace: 'nowrap' }}>
        <TableHeaderHire serachFunction={(e: number) => e} />
      </div>
      <div className='no-wrap-table'>
        <Table columns={columns} data={userData} pagination={true} />
      </div>
    </div>
  )
}

export default HireRequestTable
