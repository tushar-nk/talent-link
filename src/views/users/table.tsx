import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import TableHeaderUser from './TableHeaders'
import CommonActions from 'src/@core/utils/CommonActions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdminUserTable, hardDeleteUser, softDeleteUser } from 'src/Store/Reducer/UserSlice'
import { Chip } from '@mui/material'
import { Image_API } from 'src/Apis/Services'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const UsersTable = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [filteredData, setFilteredData] = useState([])

  interface UserData {
    _id: number
  }

  useEffect(() => {
    dispatch(getAllAdminUserTable())
  }, [dispatch])

  const handleSoftDelete = async (_id) => {
    try {
      const response = await dispatch(softDeleteUser({ _id: _id }));
      dispatch(getAllAdminUserTable());
      // Check if the response contains a message and it's not empty
      if (response?.payload?.message) {
        toast.success(response?.payload?.data?.message);
      } 
    } catch (error) {
      toast.error('Error occurred during soft delete'); 
    }
  };

  const handleHardDelete = async _id => {
    try {
      await dispatch(hardDeleteUser({ _id: _id }))
      dispatch(getAllAdminUserTable())
    } catch (error) {}
  }
  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/users/userdetails',
      query: { userID: userData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: 'Profile',
      accessor: 'profile',
      Cell: ({ cell }) => {
        const imageUrl = `${Image_API}/${cell.value}`
        const isImageValid = cell.value && cell.value.trim() !== ''
        return (
          <>
            {isImageValid ? (
              <img src={imageUrl} width={60} style={{ borderRadius: '16px' }} alt='Profile' />
            ) : (
              <img
                src='/images/avatars/profile1.svg' // Default image path
                width={60}
                alt='Profile'
              />
            )}
          </>
        )
      }
    },
    {
      Header: 'FirstName',
      accessor: 'firstName',
      sort: true
    },
    {
      Header: ' LastName',
      accessor: 'lastName',
      sort: true
    },
    {
      Header: ' UserName',
      accessor: 'userName',
      sort: true
    },
    {
      Header: 'Desigination',
      accessor: 'desigination',
      sort: true
    },
    {
      Header: ' E-mail',
      accessor: 'email',
      sort: true
    },
    {
      Header: ' Role',
      accessor: 'roleName'
    },

    {
      Header: 'Mobile no.',
      accessor: 'mobile'
    },
    {
      Header: 'Deleted',
      accessor: 'isDeleted',
      Cell: ({ value }) => {
        const chipStyle = {
          fontWeight: '500',
          backgroundColor: value ? 'rgb(76 175 80 / 30%)' : 'rgb(239 83 80 / 30%)',
          color: value ? '#1b5e20' : '#c62828'
        }
        return <Chip label={value ? 'True' : 'False'} style={chipStyle} />
      }
    },
    {
      Header: 'Actions',
      accessor: 'actions',

      Cell: ({ value, row }: any) => {
        const menuLabels = ['View', 'Edit', 'Soft Delete', 'Hard Delete']
        const handleMenuItemClick = (key, menuItem) => {
          if (key === 'Edit') {
            handleGroupsClick(row.original, 'edit')
          } else if (key === 'View') {
            handleGroupsClick(row.original, 'view')
          } else if (key === 'Soft Delete') {
            handleSoftDelete(row?.original?._id)
          } else if (key === 'Hard Delete') {
            handleHardDelete(row?.original?._id)
          }
        }
        return (
          <>
            <CommonActions onMenuItemClick={handleMenuItemClick} menuLabels={menuLabels} />
          </>
        )
      }
    }
  ]

  const { getAllAdminUser } = useSelector(({ UserSlice }) => UserSlice)

  const handleSearch = query => {
    console.log('Search query:', query)
    if (getAllAdminUser?.data?.data) {
      const filtered = getAllAdminUser.data.data.filter(
        item =>
          item.userName.toLowerCase().includes(query.toLowerCase()) ||
          item.firtsName.toLowerCase().includes(query.toLowerCase())
      )
      console.log('Filtered data:', filtered)
      setFilteredData(filtered)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderUser searchFunction={handleSearch} />
      </div>
      {getAllAdminUser?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : getAllAdminUser ? getAllAdminUser?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default UsersTable
