import React, { useState } from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import { Divider, Typography, Chip } from '@mui/material';
import TableHeader from './TableHeaders';
import TableHeaderRole from './TableHeaders';
const RoleTable = () => {
  const userData: any = [
    {
      id: 1,
     role: "Business",
    //  status: "Active"
    },
    {
      id: 2,
     role: "Project Manager",
    //  status: "De-active"
    },
  ];
  const columns = [
    {
      Header: "Role",
      accessor: "role",
      sort: true,
    },
    {
      Header: " Status",
      accessor: "status",
      sort: true,
      Cell:({})=>{
        const [isActive, setIsActive] = useState(true);

        const handleClick = () => {
          setIsActive(!isActive);
        };
        return(
          <div onClick={handleClick}>
      <Chip label={isActive ? "Active" : "De-active"} color={isActive ? "success" : "error"} />
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
          <TableHeaderRole
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default RoleTable ;