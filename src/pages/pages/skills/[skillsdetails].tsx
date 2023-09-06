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

export default function index() {
  return (
    <Card>
      <Grid sx={{ ml: 20, mt: 10, mr: 20, mb: 10 }}>
        <CardContent>
          <CardHeader title='Skill' titleTypographyProps={{ variant: 'h2' }} />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth value={'skills' || ''} sx={{ paddingLeft: 4 }} />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent sx={{ mt: 6 }}>
          <CardHeader title='Status' titleTypographyProps={{ variant: 'h2' }} />
          <Grid className='status' item sx={{ ml: 6, mt: 2 }}>
            <FormControlLabel control={<Checkbox />} label='Active' sx={{ mr: 10 }} />
            <FormControlLabel control={<Checkbox />} label='Deactive' />
          </Grid>
        </CardContent>
        <CardActions sx={{ mt: 6, ml: 4 }}>
          <Button size='large' color='secondary' sx={{ mr: 2 }} variant='outlined'>
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
