import React from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
import Image from "next/image";
import TableHeaderCompany from './TableHeaders';
import CommonActions from 'src/@core/utils/CommonActions';
const CompanyListingTable = () => {
  const userData: any = [
    {
      id: 1,
      log: '0',
      company_name: 'Net 4 Nuts',
      owner_name: 'Chirag Patel',
      category: 'Information Technology',
      subcategory: 'Software Development',
      employess: '50-100',
      working_time: '10:00 AM - 07:00 PM',
      contact_no: '+919876543210',
      address: 'S.G Highway Brooklyn Tower',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    },
    {
      id: 2,
      log: '0',
      company_name: 'Dev IT',
      owner_name: 'Vishal Vasu',
      category: 'Information Technology',
      subcategory: 'Software Development',
      employess: '150-200',
      working_time: '10:00 AM - 07:00 PM',
      contact_no: '+919876543210',
      address: 'S.G Highway Brooklyn Tower',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    },
    {
      id: 3,
      log: '0',
      company_name: 'Shah Investor',
      owner_name: 'Tanmay Shah',
      category: 'Finance Company',
      subcategory: 'Investment',
      employess: '50-75',
      working_time: '10:00 AM - 07:00 PM',
      contact_no: '+919876543210',
      address: 'S.G Highway Brooklyn Tower',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    }
  ]
  const columns = [
    {
      Header: 'Log',
      accessor: 'log'
    },
    {
      Header: 'Company Name',
      accessor: 'company_name'
    },
    {
      Header: 'Owner Name',
      accessor: 'owner_name'
    },
    {
      Header: 'Category',
      accessor: 'category'
    },
    {
      Header: 'Sub-Category',
      accessor: 'subcategory'
    },
    {
      Header: 'Employess',
      accessor: 'employess'
    },
    {
      Header: 'Working Time',
      accessor: 'working_time'
    },
    {
      Header: 'Contact No.',
      accessor: 'contact_no'
    },

    {
      Header: 'Address.',
      accessor: 'address'
    },
    {
      Header: 'City',
      accessor: 'city'
    },
    {
      Header: 'State',
      accessor: 'state'
    },
    {
      Header: 'Country',
      accessor: 'country'
    },

    {
      Header: 'Actions',
      accessor: 'actions',

      Cell: ({ value, row }: any) => {
        const menuLabels = ['View', 'Edit', 'Soft Delete', 'Hard Delete'];
        const handleMenuItemClick = (key, menuItem) => {
          console.log(`Clicked: ${key} - ${menuItem}`);
        }
        return (
          <>
            <CommonActions onMenuItemClick={handleMenuItemClick} menuLabels={menuLabels} />
          </>
        )
      }    }
  ]
  return (
    <div>
          <div style={{ marginBottom: '20px' }}>
          <TableHeaderCompany
          serachFunction={(e: number) => (e)}
        />
        </div> 
        <div > 
      <Table columns={columns} data={userData} pagination={true}  />
      </div>
    </div>
  )
}

export default CompanyListingTable
