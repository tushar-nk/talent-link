import React, { useState } from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import { Divider, Typography, Chip } from '@mui/material';
import TableHeader from './TableHeaders';
import TableHeaderHire from './TableHeaders';
import { useRouter } from 'next/router';


const HireRequestTable = () => {
  const router = useRouter();


  const handleButtonClick = () => {
      // Navigate to the desired page when the button is clicked
      router.push('/pages/hire-request/hiredetails');
    };
  const userData: any = [
    {
      id: 1,
     name: "Giacomo Guilizzoni Project Mananger ",
     company: "Ice Cubes",
     hiring_company:"Net 4 Nuts",
     request_date:"31-03-2023",
     hiring_period:"01-05-2023|30-06-2023",
     skills:"AWS Certified",
     qualification:"Computer Science",
     expericence:"5",
     age:"40",
     available:"Yes",
    //  approved:"Yes"
    },
    {
        id: 2,
     name: "Marco Botton Product Owner",
     company: "Datamatics",
     hiring_company:"Applitech Solution",
     request_date:"31-03-2023",
     hiring_period:"01-05-2023|30-06-2023",
     skills:"AWS Certified",
     qualification:"Computer Science",
     expericence:"5",
     age:"38",
     available:"No(avaliable after 3 Months)",
    //  approved:"No"
    },
    {
        id: 3,
     name: "Mariah Maclachlan Sr. Developer",
     company: "Gateway",
     hiring_company:"Icecubes Tech",
     request_date:"31-03-2023",
     hiring_period:"01-05-2023|30-06-2023",
     skills:"AWS Certified",
     qualification:"Computer Science",
     expericence:"5",
     age:"35",
     available:"Yes",
    //  approved:"No"
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
      Header: "Hiring Company",
      accessor: "hiring_company",
      sort: true,
    },
    {
      Header: "Request Date ",
      accessor: "request_date",
      sort: true,
    },
    {
      Header: "Hiring Period ",
      accessor: "hiring_period",
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
      Header: "Available",
      accessor: "available",
      sort: true,
    },
    {
        Header: "Approved",
        accessor: "approved",
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
                <Typography variant='body2'   onClick={handleButtonClick} >
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
              className="cursor-pointer custom-image"
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
              className="cursor-pointer custom-image"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
         <div style={{ marginBottom: '20px' }}>
          <TableHeaderHire
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default HireRequestTable ;