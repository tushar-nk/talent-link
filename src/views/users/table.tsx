import React from 'react'
import Table from 'src/@core/table/Table';
import Image from "next/image";
import TableHeader from './TableHeaders';
import TableHeaderUser from './TableHeaders';



const UsersTable = () => {
  const userData: any = [
    {
      id: 1,
     firstname: "Chirag",
     lastname: "Mehta",
     profile_picture: "profile",
     username: "cmehta",
     desigination: "Business",
     email:"cmheta@gmail.com",
     mobile_no: "0987654356789",
     actions: "blue"
    },
    {
      id: 2,
      firstname: "Pinal",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
  ];
  const columns = [
    {
      Header: "FirstName",
      accessor: "firstname",
      sort: true,
    },
    {
      Header: " LastName",
      accessor: "lastname",
      sort: true,
    },
    {
      Header: "Profile",
      accessor: "profile_picture",
      sort: true,
    },
    {
      Header: " UserName",
      accessor: "username",
      sort: true,
    },
    {
      Header: "Desigination",
      accessor: "desigination",
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
    <div >
          <div style={{ marginBottom: '20px' }}>
          <TableHeaderUser
          serachFunction={(e: number) => (e)}
        />
        </div>
          <Table columns={columns} data={userData} pagination={false} />
    </div>
  )
}

export default UsersTable ; 