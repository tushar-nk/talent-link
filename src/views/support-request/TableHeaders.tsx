import { Card, useTheme } from '@mui/material'
import React from 'react'
import TableHeaderSearch from 'src/@core/table/TableHeaderSearch'

interface TYPE {
  isAddButton?: boolean
  data?: any
  searchFunction?: any
}

export default function TableHeaderRequest({ searchFunction }: TYPE) {
  const theme = useTheme()

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
        <TableHeaderSearch onSearch={(query:string) => searchFunction(query)}/>
      </Card>
    </>
  )
}
