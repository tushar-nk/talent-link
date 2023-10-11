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
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { addSupportSubject, getSupportSubjectById, updateSupportSubject } from 'src/Store/Reducer/SupportSubjectSlice'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  supportSubject: Yup.string().required('Support subject is required')
})

export default function SupportSubjectDetails() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
  const { userID, mode } = router.query

  const handleRadioChange = event => {
    setIsActive(event.target.value === 'active')
  }

  interface subjectType {
    supportSubject: string
    isActive?: boolean
  }

  const initialValues: subjectType = {
    supportSubject: '',
    isActive: true
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      if (userID) {
        dispatch(updateSupportSubject({ ...formik.values, isActive: isActive, _id: userID }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/support-subject')
            }
          })
          .catch(error => {
            console.error('Error updating data:', error)
          })
      } else {
        dispatch(addSupportSubject({ ...formik.values, isActive: isActive }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/support-subject')
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
      dispatch(getSupportSubjectById({ _id: userID }))
        .then(res => {
          if (res && res.payload && res.payload.data) {
            const user = res.payload.data.data
            const { supportSubject, isActive } = user
            formik.setValues({
              supportSubject: supportSubject || '',
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
            <CardHeader title='Support Subject' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='supportSubject'
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.supportSubject}
                  InputProps={{ readOnly: mode === 'view' }}
                  error={formik.touched.supportSubject && Boolean(formik.errors.supportSubject)}
                  helperText={formik.touched.supportSubject && formik.errors.supportSubject}
                  className='error-msg'
                />
              </Grid>
            </Grid>
          </CardContent>
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
            <Button
              size='large'
              color='secondary'
              variant='outlined'
              onClick={() => router.push('/pages/support-subject')}
            >
              Cancel
            </Button>
            {mode !== 'view' && (
              <Button size='large' type='submit' variant='contained' onClick={() => formik.handleSubmit()}>
                Save
              </Button>
            )}
          </CardActions>
        </Grid>
      </Card>
    </>
  )
}
