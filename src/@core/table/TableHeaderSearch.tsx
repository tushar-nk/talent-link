import React, { useState } from 'react'
import { FormControl, InputAdornment, TextField } from '@mui/material'
import { Magnify } from 'mdi-material-ui'

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    const query = e.target.value
    setValue(query)
    onSearch(query)
  }

  return (
    <>
      <div>
        <FormControl>
          <TextField
            size='small'
            style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              fontFamily: 'Roboto , sans-serif',
              color: '#F8954A'
              // margin: '8px'
            }}
            id='outlined-basic'
            variant='outlined'
            className=''
            placeholder='Search'
            name='case_num'
            value={value}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Magnify fontSize='small' />
                </InputAdornment>
              )
            }}
          />
        </FormControl>
      </div>
    </>
  )
}

export default SearchBar
