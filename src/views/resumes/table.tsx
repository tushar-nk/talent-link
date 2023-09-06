import React, { useState } from 'react'
import Table from 'src/@core/table/Table'
import IconService from 'src/@core/utils/Icons'
import Image from 'next/image'
import { Divider, Typography, Chip } from '@mui/material'
import TableHeader from '../role/TableHeaders'
import TableHeaderResume from './TableHeaders'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useRouter } from 'next/router'

const ResumeManageTable = () => {
  const router = useRouter();


  const handleButtonClick = () => {
      // Navigate to the desired page when the button is clicked
      router.push('/pages/resumes/viewdetail');
    };
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
      //  active:"Yes"
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
      //  active:"No"
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
      //  active:"Yes"
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
      accessor: 'expericence',
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
      accessor: 'age',
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
          <div 
          style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}
          >
            <div onClick={handleButtonClick}>
              <VisibilityIcon
                style={{
                  height: '24px',
                  width: '24px',
                  marginTop:'4px'

                }}
              />
            </div>
            <div
              style={{
                height: '12px',
                width: '2px',
                backgroundColor: 'gray',
                margin: '0 2px',
                display: 'inline-block'
              }}
            ></div>
            <Image src={IconService.DeleteRedRounded} alt='' className='cursor-pointer' />

            {/* <div
              style={{
                height: '12px',
                width: '2px',
                backgroundColor: 'gray',
                margin: '0 2px',
                display: 'inline-block'
              }}
            ></div> */}

            {/* <Image
              src={IconService.groups}
              alt=''
              // onClick={() => handleGroupsClick(row.original)}
              className='cursor-pointer'
            /> */}
          </div>
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
