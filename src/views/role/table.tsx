import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import { Chip } from '@mui/material'
import TableHeaderRole from './TableHeaders'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { HardDeleteRole, SoftDeleteRole, getAllRole } from 'src/Store/Reducer/RoleSlice'
import CommonActions from 'src/@core/utils/CommonActions'

const RoleTable = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [filteredData, setFilteredData] = useState([])

  interface UserData {
    _id: number
  }

  const handleHardDelete = async _id => {
    try {
      await dispatch(HardDeleteRole({ _id: _id }))
      dispatch(getAllRole())
    } catch (error) {}
  }

  const handleSoftDelete = async _id => {
    try {
      await dispatch(SoftDeleteRole({ _id: _id }))
      dispatch(getAllRole())
    } catch (error) {}
  }

  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/roles/roledetails',
      query: { userID: userData._id, mode: mode }
    })
  }

  useEffect(() => {
    dispatch(getAllRole())
  }, [dispatch])

  const columns = [
    {
      Header: 'Role',
      accessor: 'roleName'
    },
    {
      Header: 'Delete',
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
      Header: 'Status',
      accessor: 'isActive', // Use 'isActive' from role data
      Cell: ({ value }) => {
        const chipStyle = {
          fontWeight: '500',
          backgroundColor: value ? 'rgb(76 175 80 / 30%)' : 'rgb(239 83 80 / 30%)',
          color: value ? '#1b5e20' : '#c62828'
        }
        return <Chip label={value ? 'Active' : 'InActive'} style={chipStyle} />
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

  const { getallrole } = useSelector(({ RoleSlice }) => RoleSlice)
  console.log('Gettallrole', getallrole)

  const handleSearch = query => {
    console.log('Search query:', query)
    if (getallrole?.data?.data) {
      const filtered = getallrole.data.data.filter(
        item =>
          item.roleName.toLowerCase().includes(query.toLowerCase()) 
      )
      console.log('Filtered data:', filtered)
      setFilteredData(filtered)
    }
  }


  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderRole searchFunction={handleSearch} />
      </div>
      {getallrole?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : getallrole ? getallrole?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default RoleTable
