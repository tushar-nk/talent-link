import React from 'react'
import { Card, useTheme, Button } from '@mui/material'
import { useRouter } from 'next/router'

import TableHeaderSearch from 'src/@core/table/TableHeaderSearch'

interface TYPE {
  isAddButton?: boolean
  data?: any
  serachFunction?: any
}

export default function TableHeaderCompany({ isAddButton, data, serachFunction }: TYPE) {
  const theme = useTheme()
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/pages/company/companydetails')
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
        <TableHeaderSearch onSearch={e => serachFunction(e)} />
        <Button onClick={handleButtonClick} variant='contained'>
          ADD
        </Button>
      </Card>
    </>
  )
}
