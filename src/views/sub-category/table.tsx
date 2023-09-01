import React from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import { Divider } from '@mui/material';
import TableHeader from '../role/TableHeaders';
import TableHeaderCategory from './TableHeaders';


const SupportCategoryTable = () => {
  const userData: any = [
    {
      id: 1,
     category: "Information Technology",
     sub_category:"Software Development"
    },
    {
      id: 2,
     category: "Sales and Marketing",
     sub_category:"Sales Representatives"
    },
  
  ];
  const columns = [
    {
      Header: " Category",
      accessor: "category",
      sort: true,
    },
    {
        Header: " Sub Category",
        accessor: "sub_category",
        sort: true,
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
          <TableHeaderCategory
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default SupportCategoryTable ;