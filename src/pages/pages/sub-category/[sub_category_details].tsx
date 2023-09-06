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
  const sub_category: string[] | undefined = router.query.sub_category as string[] | undefined

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  return (
    <Card>
      <Grid sx={{ ml: 20, mt: 10, mr: 20, mb: 10 }}>
        <CardContent>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ width: '50%' }}>
              <CardHeader title='Category' titleTypographyProps={{ variant: 'h2' }} />
              <Select
                value={category}
                defaultValue={language}
                onChange={handleSelectChange}
                id='form-layouts-separator-multiple-select'
                labelId='form-layouts-separator-multiple-select-label'
                sx={{ ml: 4 }}
              >
                <MenuItem value='Information Technology'>Information Technology</MenuItem>
                <MenuItem value='Sales and Marketing'>Sales and Marketing</MenuItem>
                <MenuItem value='Business Development'>Business Development</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </CardContent>
        <CardContent>
          <CardHeader title='Sub Category' titleTypographyProps={{ variant: 'h2' }} />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <TextField defaultValue={' '} value={sub_category} fullWidth sx={{ paddingLeft: 4 }} />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent sx={{ mt: 4 }}>
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
