import React, { useState } from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import { Divider } from '@mui/material';
import TableHeader from '../role/TableHeaders';
import TableHeaderSubject from './TableHeaders';



const SupportSubjectTable = () => {
  const [userData, setUserData]: any = useState ([
    {
      id: 1,
     skills: "User Management",
    },
    {
      id: 2,
     skills: "Profile Management",
    },
    {
      id: 3,
      skills: "Hire Management",
    },
  
  ]);

  
  const handleDeleteClick = (id:any )=> {
    // Filter out the item with the specified id from userData
    const updatedUserData = userData.filter((item:any) => item.id !== id);
    setUserData(updatedUserData);
  };
  const columns = [
    {
      Header: " Skills",
      accessor: "skills",
      sort: true,
      Cell: ({ value }: any) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{value}</div>
      )
    },
    {
      Header: "Actions",
      accessor: "actions",
      sort: true,
      Cell: ({ value, row }: any) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center'  }}>
            <Image
              src={IconService.DeleteRedRounded}
              alt=""
              className="cursor-pointer"
              onClick={() => handleDeleteClick(row.original.id)}
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
          <TableHeaderSubject
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default SupportSubjectTable ;