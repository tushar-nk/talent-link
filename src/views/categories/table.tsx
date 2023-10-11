import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import TableHeaderCategories from './TableHeaders'
import { useDispatch, useSelector } from 'react-redux'
import CommonActions from 'src/@core/utils/CommonActions'
import { useRouter } from 'next/router'
import { Chip } from '@mui/material'
import { getAllCategory, hardDeleteCategory, softDeleteCategory } from 'src/Store/Reducer/CategorySlice'

const CategoryTable = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [filteredData, setFilteredData] = useState([])

  interface CategoryData {
    _id: number
  }

  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch])

  const handleSoftDelete = async _id => {
    try {
      await dispatch(softDeleteCategory({ _id: _id }))
    } catch (error) {}
  }

  const handleHardDelete = async _id => {
    try {
      await dispatch(hardDeleteCategory({ _id: _id }))
    } catch (error) {}
  }

  const handleGroupsClick = (CategoryData: CategoryData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/categories/category-details/',
      query: { userID: CategoryData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: ' Category',
      accessor: 'categoryName',
      sort: true
    },
    {
      Header: ' Logo',
      accessor: 'logo'
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
      Cell: ({ row }: any) => {
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
    if (GetAllCategory?.data?.data) {
      const filtered = GetAllCategory.data.data.filter(item =>
        item.categoryName.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const { GetAllCategory } = useSelector(({ CategorySlice }) => CategorySlice)

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderCategories searchFunction={handleSearch} />
      </div>
      {GetAllCategory?.data?.data?.length > 0 && (
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : GetAllCategory ? GetAllCategory?.data?.data : []}
          pagination={true}
        />
      )}
    </div>
  )
}

export default CategoryTable
