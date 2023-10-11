import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import TableHeaderSubject from './TableHeaders'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllSupportSubject,
  hardDeleteSupportSubject,
  softDeleteSupportSubject
} from 'src/Store/Reducer/SupportSubjectSlice'
import CommonActions from 'src/@core/utils/CommonActions'
import { Chip } from '@mui/material'
import { useRouter } from 'next/router'

const SupportSubjectTable = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [filteredData, setFilteredData] = useState([])

  interface UserData {
    _id: number
  }

  useEffect(() => {
    dispatch(getAllSupportSubject())
  }, [dispatch])

  const handleSoftDelete = async _id => {
    try {
      await dispatch(softDeleteSupportSubject({ _id: _id }))
    } catch (error) {}
  }

  const handleHardDelete = async _id => {
    try {
      await dispatch(hardDeleteSupportSubject({ _id: _id }))
    } catch (error) {}
  }
  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/support-subject/support-subject-details',
      query: { userID: userData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: ' Support Subject',
      accessor: 'supportSubject',
      sort: true
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
      accessor: 'isActive',
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
      Cell: ({ row }) => {
        const menuLabels = ['View', 'Edit', 'Soft Delete', 'Hard Delete']
        const handleMenuItemClick = (key) => {
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

  const handleSearch = query => {
    if (GetAllSupportSubject?.data?.data) {
      const filtered = GetAllSupportSubject.data.data.filter(item =>
        item.supportSubject.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const { GetAllSupportSubject } = useSelector(({ SupportSubjectSlice }) => SupportSubjectSlice)

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderSubject searchFunction={handleSearch} />
      </div>
      {GetAllSupportSubject?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : GetAllSupportSubject ? GetAllSupportSubject?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default SupportSubjectTable
