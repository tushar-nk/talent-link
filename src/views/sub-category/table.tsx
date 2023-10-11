import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import TableHeaderCategory from './TableHeaders'
import CommonActions from 'src/@core/utils/CommonActions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubCategory, hardDelete, softDelete } from 'src/Store/Reducer/SubCategorySlice'
import { Chip } from '@mui/material'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const SupportCategoryTable = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [filteredData, setFilteredData] = useState([])

  interface UserData {
    _id:string
  }

  useEffect(() => {
    dispatch(getAllSubCategory())
  }, [dispatch])

  const handleSoftDelete = async (_id) => {
    try {
      const response = await dispatch(softDelete({ _id: _id }));
      dispatch(getAllSubCategory());
      // Check if the response contains a message and it's not empty
      if (response?.payload?.data?.message) {
        toast.success(response?.payload?.data?.message);
      } 
    } catch (error) {
      toast.error('Error occurred during soft delete'); 
    }
  };

  const handleHardDelete = async _id => {
    try {
      await dispatch(hardDelete({ _id: _id }))
      dispatch(getAllSubCategory())
    } catch (error) {}
  }

  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/sub-category/sub-category-details',
      query: { userID: userData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: ' Category',
      accessor: 'categoryName',
      sort: true
    },
    {
      Header: ' Sub Category',
      accessor: 'subCategoryName',
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

  const { allTableSubCategory } = useSelector(({ SubCategorySlice }) => SubCategorySlice)
  console.log('table', allTableSubCategory)

  const handleSearch = query => {
    console.log('Search query:', query)
    if (allTableSubCategory?.data?.data) {
      const filtered = allTableSubCategory.data.data.filter(
        item =>
          item.subCategoryName.toLowerCase().includes(query.toLowerCase()) ||
          item.categoryName.toLowerCase().includes(query.toLowerCase())
      )
      console.log('Filtered data:', filtered)
      setFilteredData(filtered)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderCategory serachFunction={handleSearch} />
      </div>
      {allTableSubCategory?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : allTableSubCategory ? allTableSubCategory?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default SupportCategoryTable
