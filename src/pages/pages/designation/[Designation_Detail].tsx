import React, { useEffect, useState } from 'react'
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  TextField,
  FormControlLabel,
  CardActions,
  Button,
  Radio
} from '@mui/material'
import CommonHeader from 'src/layouts/components/vertical/Header'
import { useDispatch} from 'react-redux'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { AddDesignation, UpdateDesignationData, IdByDesignation } from 'src/Store/Reducer/DesignationSlice'

export default function Index() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
  const { userID, mode } = router.query

  const handleRadioChange = event => {
    setIsActive(event.target.value === 'active')
  }

  interface subjectType {
    designationName: string
    isActive?: boolean
  }

  const initialValues: subjectType = {
    designationName: '',
    isActive: true
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      if (userID) {
        dispatch(UpdateDesignationData({ ...formik.values, isActive: isActive, _id: userID }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/designation')
            }
          })
          .catch(error => {
            console.error('Error updating data:', error)
          })
      } else {
        dispatch(AddDesignation({ ...formik.values, isActive: isActive }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/designation')
            }
          })
          .catch(error => {
            console.error('Error adding data:', error)
          })
      }
    }
  })

  useEffect(() => {
    if (userID) {
      dispatch(IdByDesignation({ _id: userID }))
        .then(res => {
          if (res && res.payload && res.payload.data) {
            const user = res.payload.data.data
            const { designationName, isActive } = user
            formik.setValues({
              designationName: designationName || '',
              isActive: isActive
            })
            setIsActive(isActive)
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }, [dispatch, userID])

  return (
    <>
      <CommonHeader />
      <Card className='form-layout'>
        <Grid>
          <CardContent>
            <CardHeader title='Designation' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id='designationName'
                  name='designationName'
                  label='Designation Name'
                  onChange={formik.handleChange} // Use handleChange from useFormik
                  value={formik.values.designationName}
                  inputProps={{ readOnly: mode === 'view' }}
                />
                {/* Add other form fields here */}
              </Grid>
            </Grid>
            <CardContent>
              <CardHeader title='Status' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
              <Grid className='status' item>
                <FormControlLabel
                  control={<Radio checked={isActive} onChange={handleRadioChange} value='active' name='isActive' />}
                  label='Active'
                  sx={{ marginRight: 10 }}
                  disabled={mode === 'view'}
                />
                <FormControlLabel
                  control={<Radio checked={!isActive} onChange={handleRadioChange} value='deactive' name='isActive' />}
                  label='Deactive'
                  disabled={mode === 'view'}
                />
              </Grid>
            </CardContent>
            <CardActions>
              <Button size='large' color='secondary' variant='outlined'
               onClick={()=> router.push('/pages/designation')}
              >
                Cancel
              </Button>
              {mode !== 'view' && (
                <Button size='large' type='submit' variant='contained' onClick={() => formik.handleSubmit()}>
                  Save
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Grid>
      </Card>
    </>
  )
}
