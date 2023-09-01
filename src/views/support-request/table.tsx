import React, { useState } from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import TableHeader from '../role/TableHeaders';
import TableHeaderRequest from './TableHeaders';
import { Typography,Chip, Grid,} from '@mui/material';






const SubRequestTable = () => {
  const userData: any = [
    {
      id: 1,
     username: "Anand Jain",
     email:"anandjain@gmail.com",
     mobile_no: "0987654356789",
     request_date:"01-02-2023",
     request_subject: "Register new device",
    //  status:"open",
    //  actions: "blue"
    },
    {
      id: 2,
      username: "Parag Shah",
      email:"paragshah9@gmail.com",
      mobile_no: "0987654356789",
      request_date:"01-02-2023",
      request_subject: "Payment issue",
      // status:"closed",
      // actions: "blue"
    },
  ];
  const columns = [
    {
      Header: "UserName",
      accessor: "username",
      sort: true,
    },
    {
        Header: " E-mail",
        accessor: "email",
        sort: true,
      },
      {
        Header: "Mobile no.",
        accessor: "mobile_no",
        sort: true,
      },
    {
      Header: "Request Date",
      accessor: "request_date",
      sort: true,
    },
    {
      Header: " Request Subject",
      accessor: "request_subject",
      sort: true,
    },
    {
      Header: "Status",
      accessor: "status",
      sort: true,
      Cell:({})=>{
        const [isActive, setIsActive] = useState(true);

        const handleClick = () => {
          setIsActive(!isActive);
        };
        return(
          <div onClick={handleClick}>
      <Chip label={isActive ? "Open" : "Closed"} color={isActive ? "info" : "error"} />
    </div>
        )
      }
    },
   
    {
      Header: "Actions",
      accessor: "actions",
      sort: true,
      Cell:({})=>{
        return(
          <div>
              <input
              type="radio"
              name="userSelection"
              // value={} 
            />
          </div>
        )
      }
    },
  ];
  return (
    <div>
       <div style={{ marginBottom: '20px' }}>
          <TableHeaderRequest
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default SubRequestTable ;