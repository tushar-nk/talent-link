import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormHelperText } from '@mui/material'
import { useRouter } from 'next/router'
import CommonHeader from 'src/layouts/components/vertical/Header'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSupportRequestById, updateSupportRequest } from 'src/Store/Reducer/SupportRequestSlice'
import { getAllActiveSupportSubject } from 'src/Store/Reducer/SupportSubjectSlice'

const validationSchema = Yup.object({
  userName: Yup.string().required('User Name is required'),
  mobileNo: Yup.string()
    .matches(/^\d{10}$/, 'Invalid mobile number')
    .required('Mobile no is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  supportSubjectId: Yup.string().required('Support Subject is required'),
  emailSubject: Yup.string().required('Email Subject is required'),
  message: Yup.string().required('Message is required'),
  response: Yup.string().required('Response is required'),
  status: Yup.string().required('Status is required')
})

export default function SupportRequestDetails() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { userID, mode } = router.query
  const [supportSubject, setSupportSubject] = useState([])

  const [formValues] = useState({
    userName: '',
    mobileNo: '',
    email: '',
    supportSubjectId: '',
    emailSubject: '',
    message: '',
    response: '',
    status: ''
  })

  useEffect(() => {
    dispatch(getAllActiveSupportSubject())
      .then(res => {
        if (res.payload && res.payload.data) {
          const supportSubjectsData = res.payload.data.data
          setSupportSubject(supportSubjectsData)
        }
      })
      .catch(error => {
        console.error('Error fetching support subjects:', error)
      })
  }, [dispatch])

  useEffect(() => {
    if (userID) {
      dispatch(getSupportRequestById({ _id: userID }))
        .then(res => {
          if (res && res.payload && res.payload.data) {
            const supportRequest = res.payload.data.data
            formik.setFieldValue('userName', supportRequest.userName)
            formik.setFieldValue('mobileNo', supportRequest.mobileNo)
            formik.setFieldValue('email', supportRequest.email)
            formik.setFieldValue('supportSubjectId', supportRequest.supportSubjectId)
            formik.setFieldValue('emailSubject', supportRequest.emailSubject)
            formik.setFieldValue('message', supportRequest.message)
            formik.setFieldValue('response', supportRequest.response)
            formik.setFieldValue('status', supportRequest.status)
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }, [dispatch, userID])

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      if (userID) {
        dispatch(updateSupportRequest({ ...values, _id: userID }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/support-request')
            }
          })
          .catch(error => {
            console.error('Error updating data:', error)
          })
      }
    }
  })

  return (
    <>
      <CommonHeader />
      <Card className='form-layout'>
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='userName'
                  value={formik.values?.userName}
                  fullWidth
                  label='User Name'
                  placeholder='carterLeonard'
                  InputProps={{ readOnly: mode === 'edit' || mode === 'view' }}
                  onChange={formik.handleChange}
                  helperText={formik.errors?.userName && formik.touched.userName && formik.errors?.userName}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='mobile'
                  value={formik.values?.mobileNo}
                  fullWidth
                  label='Mobile no'
                  placeholder='9999999999'
                  InputProps={{ readOnly: mode === 'edit' || mode === 'view' }}
                  onChange={formik.handleChange}
                  helperText={formik.errors?.mobileNo && formik.touched.mobileNo && formik.errors?.mobileNo}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label='Email '
                  placeholder='carterLeonard@gmail.com'
                  type='email'
                  name='email'
                  fullWidth
                  InputProps={{ readOnly: mode === 'edit' || mode === 'view' }}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  helperText={formik.errors?.email && formik.touched.email && formik.errors?.email}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-multiple-select-label'>Support Subject</InputLabel>
                  <Select
                    name='supportSubjectId'
                    labelId='form-layouts-separator-multiple-select-label'
                    id='form-layouts-separator-multiple-select'
                    input={<OutlinedInput label='supportSubjectId' id='select-multiple-status' />}
                    value={formik.values?.supportSubjectId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly={mode === 'edit' || mode === 'view'}
                  >
                    {supportSubject.map((item: any, index) => (
                      <MenuItem key={index} value={item._id}>
                        {item.supportSubject}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText sx={{ fontSize: '14px', color: 'red', marginLeft: '0px' }}>
                    {formik.errors?.supportSubjectId &&
                      formik.touched.supportSubjectId &&
                      formik.errors?.supportSubjectId}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='emailSubject'
                  fullWidth
                  label='Email Subject'
                  placeholder='In reference to'
                  InputProps={{ readOnly: mode === 'view' }}
                  value={formik.values?.emailSubject}
                  onChange={formik.handleChange}
                  helperText={formik.errors?.emailSubject && formik.touched.emailSubject && formik.errors?.emailSubject}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='message'
                  fullWidth
                  multiline
                  rows={3}
                  label='Message'
                  placeholder=''
                  InputProps={{ readOnly: mode === 'edit' || mode === 'view' }}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                  helperText={formik.errors?.message && formik.touched.message && formik.errors?.message}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='response'
                  fullWidth
                  label='response'
                  placeholder=''
                  InputProps={{ readOnly: mode === 'view' }}
                  value={formik.values?.response}
                  onChange={formik.handleChange}
                  helperText={formik.errors?.response && formik.touched.response && formik.errors?.response}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-multiple-select-label'>Status</InputLabel>
                  <Select
                    name='status'
                    labelId='form-layouts-separator-multiple-select-label'
                    id='form-layouts-separator-multiple-select'
                    input={<OutlinedInput label='Status' id='select-multiple-status' />}
                    value={formik.values?.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly={mode === 'view'}
                  >
                    <MenuItem value='' className='px-2 py-1 text-xs' disabled>
                      Select Status
                    </MenuItem>
                    <MenuItem value='In progress'>In progress</MenuItem>
                    <MenuItem value='On hold'>On hold</MenuItem>
                    <MenuItem value='Resolved'>Resolved</MenuItem>
                    <MenuItem value='Closed'>Closed</MenuItem>
                  </Select>
                  <FormHelperText sx={{ fontSize: '14px', color: 'red', marginLeft: '0px' }}>
                    {formik.errors?.status && formik.touched.status && formik.errors?.status}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              size='large'
              color='secondary'
              variant='outlined'
              onClick={() => router.push('/pages/support-request')}
            >
              Cancel
            </Button>
            {mode !== 'view' && (
              <Button size='large' type='submit' variant='contained'>
                Save
              </Button>
            )}
          </CardActions>
        </form>
      </Card>
    </>
  )
}
