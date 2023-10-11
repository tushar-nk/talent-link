import { Card, useTheme, Button } from '@mui/material'

import React from 'react'

import TableHeaderSearch from 'src/@core/table/TableHeaderSearch'
import { useRouter } from 'next/router'

interface TYPE {
  isAddButton?: boolean
  data?: any
  searchFunction?: any
}

export default function TableHeaderSubject({ isAddButton, data, searchFunction }: TYPE) {
  const theme = useTheme()
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/pages/users/userdetails')
  }

  

  

  return (
    <>
      <Card
        variant='outlined'
        className='common-table-header'
        style={{
          borderRadius: '16px',
          background: theme.palette.primary.light,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '45rem',
          padding: '5px',
          border: 'none'
        }}
      >
        <TableHeaderSearch onSearch={(query: string) => searchFunction(query)} /> 
        <Button onClick={handleButtonClick} variant='contained'>
          ADD
        </Button>
      </Card>
    </>
  )
}
