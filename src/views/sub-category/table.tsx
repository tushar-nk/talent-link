import React, { useState } from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import { Divider } from '@mui/material';
import TableHeader from '../role/TableHeaders';
import TableHeaderCategory from './TableHeaders';
import { useRouter } from 'next/router';


const SupportCategoryTable = () => {
const router = useRouter();

const handleGroupIconClick = (category: string, sub_category: string) => {
  const queryParams:any = {
    category: encodeURIComponent(category),
    sub_category: encodeURIComponent(sub_category),
  };
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join('&');

  router.push(`/pages/sub-category/sub_category_details?${queryString}`);
};
  const [userData, setUserData]: any = useState ([
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
  
  ]);

  const handleDeleteClick = (id:any )=> {
    const updatedUserData = userData.filter((item:any) => item.id !== id);
    setUserData(updatedUserData);
  };

  const columns = [
    {
      Header: " Category",
      accessor: "category",
      sort: true,
      Cell: ({ value }: any) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{value}</div>
      )
    },
    {
        Header: " Sub Category",
        accessor: "sub_category",
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              onClick={() => handleGroupIconClick(row.original.category, row.original.sub_category)}

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