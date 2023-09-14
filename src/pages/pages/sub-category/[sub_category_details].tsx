import React, { useState } from 'react'
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  TextField,
  Checkbox,
  FormControlLabel,
  CardActions,
  Button,
  FormControl,
  MenuItem
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useRouter } from 'next/router'

export default function SubCategoryDetails() {
  const [language, setLanguage] = useState<string[]>([])
  const router = useRouter()

  const category: string[] | undefined = router.query.category as string[] | undefined

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  return (
    <Card className='form-layout'>
      <Grid>
        <CardContent>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ width: '100%' }}>
              <CardHeader title='Category' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
              <Select
                value={category}
                defaultValue={language}
                onChange={handleSelectChange}
                id='form-layouts-separator-multiple-select'
                labelId='form-layouts-separator-multiple-select-label'
              >
                <MenuItem value='Information Technology'>Information Technology</MenuItem>
                <MenuItem value='Sales and Marketing'>Sales and Marketing</MenuItem>
                <MenuItem value='Business Development'>Business Development</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </CardContent>
        <CardContent>
          <CardHeader title='Sub Category' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
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
