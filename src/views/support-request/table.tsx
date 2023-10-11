import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import { Chip } from '@mui/material'
import { useRouter } from 'next/router'
import CommonActions from 'src/@core/utils/CommonActions'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllSupportRequest,
  hardDeleteSupportRequest,
  softDeleteSupportRequest
} from 'src/Store/Reducer/SupportRequestSlice'
import TableHeaderRequest from 'src/views/support-request/TableHeaders'

const SubRequestTable = () => {
  const [filteredData, setFilteredData] = useState([])
  const router = useRouter()
  const dispatch = useDispatch()

  interface UserData {
    _id: number
  }

  useEffect(() => {
    dispatch(getAllSupportRequest())
  }, [dispatch])

  const handleSoftDelete = async _id => {
    try {
      await dispatch(softDeleteSupportRequest({ _id: _id }))
    } catch (error) {}
  }

  const handleHardDelete = async _id => {
    try {
      await dispatch(hardDeleteSupportRequest({ _id: _id }))
    } catch (error) {}
  }

  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/support-request/support-request-details',
      query: { userID: userData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: 'UserName',
      accessor: 'userName'
    },
    {
      Header: ' E-mail',
      accessor: 'email'
    },
    {
      Header: 'Mobile no.',
      accessor: 'mobileNo'
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
      accessor: 'status',
      Cell: ({ value }) => {
        let chipStyle = {}
        let statusText = ''
        switch (value) {
          case 'In progress':
            chipStyle = {
              fontWeight: '500',
              backgroundColor: '#e0f7fa',
              color: '#26c6da'
            }
            statusText = 'In progress'
            break
          case 'On Hold':
            chipStyle = {
              fontWeight: '500',
              backgroundColor: '#efebe9',
              color: '#8d6e63'
            }
            statusText = 'On Hold'
            break
          case 'Open':
            chipStyle = {
              fontWeight: '500',
              backgroundColor: '#e8f5e9',
              color: '#66bb6a'
            }
            statusText = 'Open'
            break
          case 'Closed':
            chipStyle = {
              fontWeight: '500',
              backgroundColor: '#ffebee',
              color: '#ef5350'
            }
            statusText = 'Closed'
            break
          case 'Resolved':
            chipStyle = {
              fontWeight: '500',
              backgroundColor: '#f9fbe7',
              color: '#d4e157'
            }
            statusText = 'Resolved'
            break
        }
        return <Chip label={statusText} style={chipStyle} />
      }
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => {
        const menuLabels = ['View', 'Edit', 'Soft Delete', 'Hard Delete']
        const handleMenuItemClick = key => {
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

  const { GetAllSupportRequest } = useSelector(({ SupportRequestSlice }) => SupportRequestSlice)

  const handleSearch = query => {
    if (GetAllSupportRequest?.data?.data) {
      const filtered = GetAllSupportRequest.data.data.filter(item =>
        item.userName.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
      <TableHeaderRequest searchFunction={handleSearch}  />
      </div>     
      {GetAllSupportRequest?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : GetAllSupportRequest ? GetAllSupportRequest?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default SubRequestTable
