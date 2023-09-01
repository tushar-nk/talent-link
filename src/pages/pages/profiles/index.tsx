import React, { useState } from 'react'
import { FormControl, Grid, Select, MenuItem } from '@mui/material'
import Profiles from 'src/views/Profile/profile'
import ProfileFilter from 'src/views/Profile/Profilefilter'

const index = () => {
  const [isIconClicked, setIsIconClicked] = useState(false)

  const handleIconClick = () => {
    setIsIconClicked(prevState => !prevState)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControl sx={{ marginRight: '20px' }}>
          <Select>
            <MenuItem value={1}>Most Recent</MenuItem>
            <MenuItem value={2}>Most Viewed</MenuItem>
            <MenuItem value={3}>Most Searched</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select>
            <MenuItem value={1}>10 per page</MenuItem>
            <MenuItem value={2}>20 per page</MenuItem>
            <MenuItem value={3}>30 per page</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={6}>
        <Grid item xs={4}>
          <ProfileFilter />
        </Grid>
        <Grid item xs={8}>
          <Profiles />
        </Grid>
      </Grid>
    </>
  )
}

export default index
