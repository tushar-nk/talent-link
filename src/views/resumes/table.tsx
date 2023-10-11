import React, { useState } from 'react'
import Table from 'src/@core/table/Table'
import IconService from 'src/@core/utils/Icons'
import Image from 'next/image'
import { Chip } from '@mui/material'
import TableHeaderResume from './TableHeaders'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useRouter } from 'next/router'
import CommonActions from 'src/@core/utils/CommonActions'

const ResumeManageTable = () => {
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/pages/resumes/viewdetail')
  }
  const userData: any = [
    {
      id: 1,
      name: 'Giacomo Guilizzoni',
      company: 'Dev IT',
      designation: 'Project Mananger',
      skills: 'AWS Certified',
      qualification: 'Computer Science',
      expericence: '5',
      age: '40'
    },
    {
      id: 2,
      name: 'Marco Botton',
      company: 'Applitech',
      designation: 'Product Owner',
      skills: 'AWS Certified',
      qualification: 'Computer Science',
      expericence: '5',
      age: '38'
    },
    {
      id: 3,
      name: 'Mariah Maclachlan',
      company: 'Gateway',
      designation: 'Sr. Developer',
      skills: 'AWS Certified',
      qualification: 'Computer Science',
      expericence: '5',
      age: '35'
    }
  ]
  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: ' Company',
      accessor: 'company'
    },
    {
      Header: 'Designation ',
      accessor: 'designation'
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
      accessor: 'expericence'
      //   Cell: ({ value }:any) => {
      //     return (
      //       <div style={{ textAlign: 'center' }}>
      //         {value}
      //       </div>
      //     )
      // }
    },
    {
      Header: ' Age',
      accessor: 'age'
      //   Cell: ({ value }:any) => {
      //     return (
      //       <div style={{ textAlign: 'center' }}>
      //         {value}
      //       </div>
      //     )
      // }
    },
    {
      Header: ' Active',
      accessor: 'active',

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
                backgroundColor: isActive ? '#2e7d32' : '#c62828', // Dark colors
                color: '#ffffff', // White font color
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
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderResume serachFunction={(e: number) => e} />
      </div>
      <Table columns={columns} data={userData} />
    </div>
  )
}

export default ResumeManageTable
