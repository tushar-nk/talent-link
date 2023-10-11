import React, { useState, useEffect } from 'react'
import Table from 'src/@core/table/Table'
import IconService from 'src/@core/utils/Icons'
import Image from 'next/image'
import TableHeaderSkills from './TableHeaders'
import CommonActions from 'src/@core/utils/CommonActions'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllSkill, HardDeleteSkill, SoftDeleteSkill } from 'src/Store/Reducer/SkillSlice'
import { useRouter } from 'next/router'
import { Chip, Button } from '@mui/material'


const SkillsTable = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [filteredData, setFilteredData] = useState([])

  interface UserData {
    _id: number
  }

  useEffect(() => {
    dispatch(GetAllSkill())
  }, [dispatch])

  const handleSoftDelete = async _id => {
    try {
      await dispatch(SoftDeleteSkill({ _id: _id }))
      dispatch(GetAllSkill())
    } catch (error) {}
  }

  const handleHardDelete = async _id => {
    try {
      await dispatch(HardDeleteSkill({ _id: _id }))
      dispatch(GetAllSkill())
    } catch (error) {}
  }
  const handleGroupsClick = (userData: UserData, mode: 'view' | 'edit') => {
    router.push({
      pathname: '/pages/skills/skills-details',
      query: { userID: userData._id, mode: mode }
    })
  }

  const columns = [
    {
      Header: 'Skills',
      accessor: 'skillName',
      sort:true
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

  

  const { getSkill} = useSelector(({SkillSlice})=> SkillSlice)
  console.log("scdcs", getSkill)


  const handleSearch = query => {
    console.log('Search query:', query)
    if (getSkill?.data?.data) {
      const filtered = getSkill.data.data.filter(item =>
        item.skillName.toLowerCase().includes(query.toLowerCase())
      )
      console.log('Filtered data:', filtered)
      setFilteredData(filtered)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TableHeaderSkills  searchFunction={handleSearch} />
      </div>
      {getSkill?.data?.data?.length > 0 && (
      <Table columns={columns} data={filteredData.length > 0 ? filteredData :(getSkill ? getSkill?.data?.data:[])} pagination={true} />
      )}
 
    </div>
  )
}

export default SkillsTable
