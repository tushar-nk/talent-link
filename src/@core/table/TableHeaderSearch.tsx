import React from 'react'
import { Card, FormControl, InputAdornment, SelectChangeEvent, TextField } from '@mui/material'
import Image from 'next/image'
import IconService from 'src/@core/utils/Icons'
import { Magnify } from 'mdi-material-ui'

interface TYPE {
  serachFunction?: (e: string) => void
}

export default function TableHeader({ serachFunction }: TYPE) {
  const [age, setAge] = React.useState('10')

  const handleChanges = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const handleSearch = (e: string) => {
    serachFunction?.(e) // This will only call serachFunction if it's defined
  }
  return (
    <div style={{ height: '58px'}}>
      {/* <Card
        variant='outlined'
        style={{
          borderRadius: '16px',
          background: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '45rem'

        }}
      > */}
        <FormControl>
          {/* <TextField
            style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                fontFamily: 'Satoshi-Regular',
                color: '#7E75A3'   
            }}
            id='outlined-basic'
            variant='outlined'
            className=''
            placeholder='Search'
            name='case_num'
            onChange={event => handleSearch(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Image src={IconService.SearchIcon} height={20} width={20} alt='' />
                </InputAdornment>
              )
            }}
          /> */}
            <TextField
          size='small'
          style={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: 'Satoshi-Regular',
            color: '#F8954A',
            margin:"8px", 
        }}
        id='outlined-basic'
        variant='outlined'
        className=''
        placeholder='Search'
        name='case_num'
        onChange={event => handleSearch(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
        </FormControl>
       
      {/* </Card> */}
    </div>
  )
}
