import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from '@mui/material'
import React from 'react'

export default function index() {
  return (
    <Card className='form-layout'>
      <Grid>
        <Box sx={{ display: 'flex' }}>
          <CardContent sx={{width: '50%'}}>
            <CardHeader title='Role' titleTypographyProps={{ variant: 'h2' }} className='support-subject'/>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth placeholder='' />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent className='status-box'>
            <CardHeader title='Status' titleTypographyProps={{ variant: 'h2' }} className='support-subject'/>
            <Grid container>
            <Grid item xs={12} sm={12}>
              <FormControlLabel control={<Checkbox />} label='Active' sx={{ marginRight: 10 }} />
              <FormControlLabel control={<Checkbox />} label='Deactive' />
              </Grid>
            </Grid>
          </CardContent>
        </Box>
        <Grid>
          <CardHeader title='Permissions' titleTypographyProps={{ variant: 'h2' }} />
          <TableContainer>
            <Table>
              <TableRow>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Dashboard' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Add' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Edit' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='View' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Admin User' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Add' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Edit' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='View' />
                </TableCell>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <FormControlLabel control={<Checkbox />} label='Role' />
                </TableCell>
                <TableCell className='role-edit'>
                  <FormControlLabel control={<Checkbox />} label='Add' />
                </TableCell>
                <TableCell className='role-edit'>
                  <FormControlLabel control={<Checkbox />} label='Edit' />
                </TableCell>
                <TableCell className='role-edit'>
                  <FormControlLabel control={<Checkbox />} label='View' />
                </TableCell>
                <TableCell className='role-edit'>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <CardActions>
            <Button size='large' color='secondary' variant='outlined'>
              Cancel
            </Button>
            <Button size='large' type='submit' variant='contained'>
              Save
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
