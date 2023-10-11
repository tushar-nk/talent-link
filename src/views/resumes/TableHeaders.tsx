import { Card, useTheme, Button } from '@mui/material'

import React from 'react'

import TableHeaderSearch from 'src/@core/table/TableHeaderSearch'
import { useRouter } from 'next/router'

interface TYPE {
  isAddButton?: boolean
  data?: any
  serachFunction?: any
}

export default function TableHeaderResume({ isAddButton, data, serachFunction }: TYPE) {
  const theme = useTheme()
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/pages/resumes/resumedetails')
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
        <Button
          style={{
            margin: '8px',
            padding: '8px',
            whiteSpace: 'nowrap'

            // display: 'flex',
            // alignItems: 'center',
          }}
          onClick={handleButtonClick}
          variant='contained'
        >
          Add Resume
        </Button>
      </Card>
    </>
  )
}
