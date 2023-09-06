import React, { useState } from 'react'
import Table from 'src/@core/table/Table'
import IconService from 'src/@core/utils/Icons'
import Image from 'next/image'
import { Divider, Typography, Chip, Button } from '@mui/material'
import TableHeader from './TableHeaders'
import TableHeaderHire from './TableHeaders'
import { useRouter } from 'next/router'
import VisibilityIcon from '@mui/icons-material/Visibility'

const HireRequestTable = () => {
  const router = useRouter()

  const handleButtonClick = () => {
    // Navigate to the desired page when the button is clicked
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
      //  approved:"Yes"
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
      //  approved:"No"
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
      //  approved:"No"
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
          Cell: ({ value }:any) => {
        return (
          <div style={{ whiteSpace: 'nowrap' }}> 
            {value}
          </div>
        )
    }
    },
    {
      Header: 'Hiring Period ',
      accessor: 'hiring_period',
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
      accessor: 'expericence'
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
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
            <Image src={IconService.DeleteRedRounded} alt='' className='cursor-pointer custom-image' />

            <div
              style={{
                height: '12px',
                width: '2px',
                backgroundColor: 'gray',
                margin: '0 2px',
                display: 'inline-block'
              }}
            ></div>
            <div onClick={handleButtonClick}>
             <VisibilityIcon
                style={{
                  height: '24px',
                  width: '24px'
                }}
              />
            </div>

            {/* <Image
              src={IconService.groups}
              alt=''
              // onClick={() => handleGroupsClick(row.original)}
              className='cursor-pointer custom-image'
            /> */}
            {/* <div
              style={{
                height: '12px',
                width: '2px',
                backgroundColor: 'gray',
                margin: '0 2px',
                display: 'inline-block',
              }}
            ></div> */}

            {/* <div onClick={handleButtonClick}>
              <VisibilityIcon
                style={{
                  height: '24px',
                  width: '24px'
                }}
              />
            </div> */}
          </div>
        )
      }
    },
    // {
    //   Header: 'View',
    //   accessor: 'view',
    //   Cell: ({ value, row }: any) => {
    //     return (
    //       <div style={{ display: 'flex', alignItems: 'center' }}>
    //          <div onClick={handleButtonClick}>
    //           <VisibilityIcon
    //             style={{
    //               height: '24px',
    //               width: '24px'
    //             }}
    //           />
    //         </div>
    //       </div>
    //     )
    //   }
    // }

  ]
  return (
    <div>
      <div style={{ marginBottom: '20px' ,  whiteSpace: 'nowrap' }}>
        <TableHeaderHire serachFunction={(e: number) => e} />
      </div>
      <div className="no-wrap-table"> 
      <Table columns={columns} data={userData}  />
      </div>
    </div>
  )
}

export default HireRequestTable
