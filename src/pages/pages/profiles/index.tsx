import React from 'react'
import { FormControl, Grid, Select, MenuItem } from '@mui/material'
import Profiles from 'src/views/profile/profiles'
import ProfileFilter from 'src/views/profile/profilefilter'

const Profile = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControl sx={{ marginRight: '20px' }}>
          <Select defaultValue='Most Recent'>
            <MenuItem value='Most Recent'>Most Recent</MenuItem>
            <MenuItem value='Most Viewed'>Most Viewed</MenuItem>
            <MenuItem value='Most Searh'>Most Search</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select defaultValue='1'>
            <MenuItem value='1'>10 per page</MenuItem>
            <MenuItem value='2'>20 per page</MenuItem>
            <MenuItem value='3'>30 per page</MenuItem>
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

export default Profile
