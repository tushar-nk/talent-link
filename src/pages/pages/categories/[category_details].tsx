import React from 'react'
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  TextField,
  Checkbox,
  FormControlLabel,
  CardActions,
  Button
} from '@mui/material'

export default function CategoryDetails() {
  return (
    <Card className='form-layout'>
      <Grid>
        <CardContent>
          <CardHeader title='Categories' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <CardHeader title='Status' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
          <Grid className='status' item>
            <FormControlLabel control={<Checkbox />} label='Active' sx={{ marginRight: 10 }} />
            <FormControlLabel control={<Checkbox />} label='Deactive' />
          </Grid>
        </CardContent>
        <CardActions>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button size='large' type='submit' variant='contained'>
            Save
          </Button>
        </CardActions>
      </Grid>
    </Card>
  )
}
