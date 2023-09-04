import React from 'react'
import Table from 'src/@core/table/Table';
import Image from "next/image";
import TableHeaderCompany from './TableHeaders';
import IconService from 'src/@core/utils/Icons';
const CompanyListingTable = () => {
  const userData: any = [
    {
      id: 1,
     log: "0",
     company_name: "Net 4 Nuts",
     owner_name: "Chirag Patel",
     category:"Information Technology",
     subcategory:"Software Development",
     employess:"50-100",
     working_time:"10:00 AM - 07:00 PM",
     contact_no:"+919876543210",
     address:"S.G Highway Brooklyn Tower",
     city:"Ahmedabad",
     state:"Gujarat",
     country:"India"
    },
    {
        id: 2,
       log: "0",
       company_name: "Dev IT",
       owner_name: "Vishal Vasu",
       category:"Information Technology",
       subcategory:"Software Development",
       employess:"150-200",
       working_time:"10:00 AM - 07:00 PM",
       contact_no:"+919876543210",
       address:"S.G Highway Brooklyn Tower",
       city:"Ahmedabad",
       state:"Gujarat",
       country:"India"
      },
      {
        id: 3,
       log: "0",
       company_name: "Shah Investor",
       owner_name: "Tanmay Shah",
       category:"Finance Company",
       subcategory:"Investment",
       employess:"50-75",
       working_time:"10:00 AM - 07:00 PM",
       contact_no:"+919876543210",
       address:"S.G Highway Brooklyn Tower",
       city:"Ahmedabad",
       state:"Gujarat",
       country:"India"
      },
  ];
  const columns = [
    {
      Header: "Log",
      accessor: "log",
      sort: true,
    },
    {
      Header: "Company Name",
      accessor: "company_name",
      sort: true,
    },
    {
        Header: "Owner Name",
        accessor: "owner_name",
        sort: true,
      },
    {
        Header: "Category",
        accessor: "category",
        sort: true,
      },
    {
        Header: "Sub-Category",
        accessor: "subcategory",
        sort: true,
      },
    {
        Header: "Employess",
        accessor: "employess",
        sort: true,
      },
    {
        Header: "Working Time",
        accessor: "working_time",
        sort: true,
      },
    {
        Header: "Contact No.",
        accessor: "contact_no",
        sort: true,
      },
      
    {
        Header: "Address.",
        accessor: "address",
        sort: true,
      },
    {
        Header: "City",
        accessor: "city",
        sort: true,
      },
    {
        Header: "State",
        accessor: "state",
        sort: true,
      },
    {
        Header: "Country",
        accessor: "country",
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
          <TableHeaderCompany
          serachFunction={(e: number) => (e)}
        />
        </div> 
          <Table columns={columns} data={userData} pagination={false} />
       
    </div>
  )
}

export default CompanyListingTable ;