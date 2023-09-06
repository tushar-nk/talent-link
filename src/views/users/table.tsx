import React from 'react'
import Table from 'src/@core/table/Table';
import IconService from 'src/@core/utils/Icons';
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
    {
      id: 3,
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
      id: 4,
      firstname: "Pinal",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 5,
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
      id: 6,
      firstname: "Pinal",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 7,
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
      id: 8,
      firstname: "Pinal",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 9,
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
      id: 10,
      firstname: "Pinal",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 11,
     firstname: "Cane",
     lastname: "Mehta",
     profile_picture: "profile",
     username: "cmehta",
     desigination: "Business",
     email:"cmheta@gmail.com",
     mobile_no: "0987654356789",
     actions: "blue"
    },
    {
      id: 12,
      firstname: "Jason",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 13,
      firstname: "Akash",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 14,
      firstname: "Rohan",
      lastname: "Patel",
      profile_picture: "profile",
      username: "ppatel",
      desigination: "Project Manager",
      email:"ppatel@gmail.com",
      mobile_no: "0987654356789",
      actions: "blue"
    },
    {
      id: 15,
      firstname: "Aditya",
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
     
    },
    {
      Header: " LastName",
      accessor: "lastname",
     
    },
    {
      Header: "Profile",
      accessor: "profile_picture",
     
    },
    {
      Header: " UserName",
      accessor: "username",
  
    },
    {
      Header: "Desigination",
      accessor: "desigination",
    
    },
    {
      Header: " E-mail",
      accessor: "email",
    
    },
    {
      Header: "Mobile no.",
      accessor: "mobile_no",
   
    },
     {
      Header: "Actions",
      accessor: "actions",
     
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
          <Table columns={columns} data={userData}  />
    </div>
  )
}

export default UsersTable ; 