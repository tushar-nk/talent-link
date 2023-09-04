// ** React Imports
import React from 'react' 

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Box, Chip, Stack } from '@mui/material'
import { FormLabel } from '@mui/material'

function formlayoutsseparator() {
  // ** States

  return (
    <Card>
      <Grid item xs={4}>
        <Box display='flex' justifyContent='flex-end'>
          <Button type='submit' variant='contained' size='large'>
            Login
          </Button>

          <Button type='submit' variant='contained' size='large' sx={{ marginLeft: '8px' }}>
            Sign Up
          </Button>
        </Box>
      </Grid>

      <CardHeader title='General Information' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Company Name </FormLabel>
              <TextField fullWidth placeholder='Compny Name' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Company Togline </FormLabel>
              <TextField fullWidth placeholder='Compny Togline' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Owner Name </FormLabel>
              <TextField fullWidth placeholder='Owner Name' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>Category</FormLabel>
                <Select
                  label='Category'
                  defaultValue=''
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>Information Technology</MenuItem>
                  <MenuItem value='category2'>Sales</MenuItem>
                  <MenuItem value='category3'>Account</MenuItem>
                  <MenuItem value='category3'>Project </MenuItem>
                  <MenuItem value='category3'>Finance</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>Sub Cetegory</FormLabel>
                <Select
                  label=' Sub Category'
                  defaultValue=''
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>Information Technology</MenuItem>
                  <MenuItem value='category2'>Sales</MenuItem>
                  <MenuItem value='category3'>Account</MenuItem>
                  <MenuItem value='category3'>Project </MenuItem>
                  <MenuItem value='category3'>Finance</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Company Logo </FormLabel>
              <TextField fullWidth placeholder='Company Logo' />
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ margin: 0 }} />

        <CardHeader title='Company Address' titleTypographyProps={{ variant: 'h6' }} />
        <Divider sx={{ margin: 0 }} />

        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Email </FormLabel>
              <TextField fullWidth placeholder='Email' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Mobile Number </FormLabel>
              <TextField fullWidth placeholder='Mobile Number' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Contact Number </FormLabel>
              <TextField fullWidth placeholder='Contact Number  ' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Website Link </FormLabel>
              <TextField fullWidth placeholder='Website Link' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Address </FormLabel>
              <TextField fullWidth placeholder='Address' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>Country</FormLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>India</MenuItem>
                  <MenuItem value='category2'>United State</MenuItem>
                  <MenuItem value='category3'>United Kindom</MenuItem>
                  <MenuItem value='category3'>Japan </MenuItem>
                  <MenuItem value='category3'>France</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>State</FormLabel>
                <Select
                  label='State'
                  defaultValue=''
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>Gujrat</MenuItem>
                  <MenuItem value='category2'>Rajasthan</MenuItem>
                  <MenuItem value='category3'>Maharatsra</MenuItem>
                  <MenuItem value='category3'>Madhya Pradesh </MenuItem>
                  <MenuItem value='category3'>Delhi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>City</FormLabel>
                <Select
                  label='City'
                  defaultValue=''
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>Ahmedabd</MenuItem>
                  <MenuItem value='category2'>Jaipur</MenuItem>
                  <MenuItem value='category3'>Mumbai</MenuItem>
                  <MenuItem value='category3'>Indore </MenuItem>
                  <MenuItem value='category3'>Delhi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Zip code </FormLabel>
              <TextField fullWidth placeholder='zip code' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>Emloyees</FormLabel>
                <Select
                  defaultValue=''
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>a</MenuItem>
                  <MenuItem value='category2'>b</MenuItem>
                  <MenuItem value='category3'>c</MenuItem>
                  <MenuItem value='category3'>d </MenuItem>
                  <MenuItem value='category3'>e</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <FormLabel id='form-layouts-separator-category-label'>Work Time</FormLabel>
                <Select
                  defaultValue='work'
                  id='form-layouts-separator-category'
                  labelId='form-layouts-separator-category-label'
                >
                  <MenuItem value='category1'>8.00 Am - 6.00 Pm</MenuItem>
                  <MenuItem value='category2'>9.00 Am - 7.00 Pm</MenuItem>
                  <MenuItem value='category3'>10..00 Am - 8.00 Pm</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <Card sx={{ mb: 6 }}>
          <CardHeader title='Technical Skills' titleTypographyProps={{ variant: 'h6' }} />
          <Divider sx={{ margin: 0 }} />
          <Box sx={{ mt: 10, mb: 10 }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ ml: 8, fontSize: '20px' }}>Skills</Typography>
              {/* <EditIcon sx={{ ml: 8, cursor: 'pointer' }} /> */}
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Stack direction='row' spacing={1} sx={{ paddingLeft: 6, paddingTop: 6 }}>
                <Chip label='Web Application' variant='outlined' className='skill-title' />
              </Stack>
              <Stack direction='row' spacing={1} sx={{ paddingLeft: 6, paddingTop: 6 }}>
                <Chip label='Mobile Application' variant='outlined' className='skill-title' />
              </Stack>
            </Box>
          </Box>
        </Card>

        <Card sx={{ mb: 6 }}>
          <CardHeader title='Social Accounts' titleTypographyProps={{ variant: 'h6' }} />
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Facebook </FormLabel>
                <TextField fullWidth placeholder='Facebook' />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Google + </FormLabel>
                <TextField fullWidth placeholder='Google +' />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Twitter</FormLabel>
                  <Select
                    label='Twitter'
                    defaultValue=''
                    id='form-layouts-separator-category'
                    labelId='form-layouts-separator-category-label'
                  >
                    <MenuItem value='category1'>e</MenuItem>
                    <MenuItem value='category2'>d</MenuItem>
                    <MenuItem value='category3'>c</MenuItem>
                    <MenuItem value='category3'>b </MenuItem>
                    <MenuItem value='category3'>a</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormLabel>Linked In </FormLabel>
                <TextField fullWidth placeholder='Linked In' />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Printerest </FormLabel>
                <TextField fullWidth placeholder='Printerest' />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Instagram </FormLabel>
                <TextField fullWidth placeholder='Instagram' />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 6 }}>
          <CardHeader title='Compny Summary' titleTypographyProps={{ variant: 'h6' }} />
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}></Grid>

              <Grid item xs={12}>
                <Typography>About Company</Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      border: 'none' // Hide the border
                    }
                  }}
                ></TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Grid item xs={4}>
            <Box display='flex' justifyContent='flex-end'>
              <Button type='submit' variant='contained' size='large'>
                Cencel
              </Button>

              <Button type='submit' variant='contained' size='large' sx={{ marginLeft: '8px' }}>
                Save
              </Button>
            </Box>
          </Grid>
        </Card>
      </form>
    </Card>
  )
}

export default formlayoutsseparator;
