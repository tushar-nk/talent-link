import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'

import TableHeaderdesignation from './TableHeaderdesignation'
import CommonActions from 'src/@core/utils/CommonActions'
import { getAllDesignation, SoftDesignationData, HardDesignationData } from 'src/Store/Reducer/DesignationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Chip } from '@mui/material'

const DesignationTable = () => {
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const router = useRouter()

  interface UserData {
    _id: string
  }

  useEffect(() => {
    dispatch(getAllDesignation())
  }, [dispatch])

  const handleSoftDelete = async _id => {
    try {
      await dispatch(SoftDesignationData({ _id: _id }))
      dispatch(getAllDesignation())
    } catch (error) {}
  }

  const handleHardDelete = async _id => {
    try {
      await dispatch(HardDesignationData({ _id: _id }))
      dispatch(getAllDesignation())
    } catch (error) {}
  }

  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
  
    router.push({
      pathname: '/pages/designation/designation-details',
      query: { userID: userData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: 'Designation',
      accessor: 'designationName',
      sort: true
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
      Header: 'Status',
      accessor: 'isActive',
      Cell: ({ value }) => {
        const chipStyle = {
          fontWeight: '500',
          backgroundColor: value ? 'rgb(76 175 80 / 30%)' : 'rgb(239 83 80 / 30%)',
          color: value ? '#1b5e20' : '#c62828'
        }
        return <Chip label={value ? 'Active' : 'Inactive'} style={chipStyle} />
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

  const { AllDesignation } = useSelector(({ DesignationSlice }) => DesignationSlice)
  console.log('table', AllDesignation)

  const handleSearch = query => {
    console.log('Search query:', query)
    if (AllDesignation?.data?.data) {
      const filtered = AllDesignation.data.data.filter(item =>
        item.designationName.toLowerCase().includes(query.toLowerCase())
      )
      console.log('Filtered data:', filtered)
      setFilteredData(filtered)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderdesignation serachFunction={handleSearch} />
      </div>
      {AllDesignation?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : AllDesignation ? AllDesignation?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default DesignationTable
