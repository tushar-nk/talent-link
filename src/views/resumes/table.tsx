import React, { useState } from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import { Divider, Typography, Chip } from '@mui/material';
import TableHeader from '../role/TableHeaders';
import TableHeaderResume from './TableHeaders';



const ResumeManageTable = () => {
  const userData: any = [
    {
      id: 1,
     name: "Giacomo Guilizzoni",
     company: "Dev IT",
     designation:"Project Mananger",
     skills:"AWS Certified",
     qualification:"Computer Science",
     expericence:"5",
     age:"40",
    //  active:"Yes"
    },
    {
        id: 2,
     name: "Marco Botton",
     company: "Applitech",
     designation:"Product Owner",
     skills:"AWS Certified",
     qualification:"Computer Science",
     expericence:"5",
     age:"38",
    //  active:"No"
    },
    {
        id: 3,
     name: "Mariah Maclachlan",
     company: "Gateway",
     designation:"Sr. Developer",
     skills:"AWS Certified",
     qualification:"Computer Science",
     expericence:"5",
     age:"35",
    //  active:"Yes"
      },
  ];
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: " Company",
      accessor: "company",
      sort: true,
    },
    {
      Header: "Designation ",
      accessor: "designation",
      sort: true,
    },
    {
      Header: " Skills",
      accessor: "skills",
      sort: true,
    },
    {
      Header: " Qualification",
      accessor: "qualification",
      sort: true,
    },
    {
      Header: " Expericence",
      accessor: "expericence",
      sort: true,
    },
    {
      Header: " Age",
      accessor: "age",
      sort: true,
    },
    {
      Header: " Active",
      accessor: "active",
      sort: true,
      Cell:({})=>{
        const [isActive, setIsActive] = useState(true);

        const handleClick = () => {
          setIsActive(!isActive);
        };
        return(
          <div onClick={handleClick}>
      <Chip label={isActive ? "Yes" : "No"} color={isActive ? "success" : "error"} />
    </div>
        )
      }
    },
    {
      Header: "Actions",
      accessor: "actions",
      sort: true,
      Cell: ({ value, row }: any) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <Typography>
                    View
                </Typography>
            </div>
            <div
        style={{
          height: '12px',
          width: '2px',
          backgroundColor: 'gray', 
          margin: '0 2px', 
          display: 'inline-block', 
        }}
      ></div>
            <Image
              src={IconService.DeleteRedRounded}
              alt=""
              className="cursor-pointer"
            />

<div
        style={{
          height: '12px',
          width: '2px',
          backgroundColor: 'gray', 
          margin: '0 2px', 
          display: 'inline-block', 
        }}
      ></div>

            <Image
              src={IconService.groups}
              alt=""
              // onClick={() => handleGroupsClick(row.original)}
              className="cursor-pointer"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
          <div style={{ marginBottom: '20px' }}>
          <TableHeaderResume
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default ResumeManageTable ;