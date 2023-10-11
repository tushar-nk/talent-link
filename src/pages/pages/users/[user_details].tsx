import React, { ElementType, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  TextField,
  InputLabel,
  Typography,
  CardContent,
  CardActions,
  FormControl,
  OutlinedInput,
  Select,
  MenuItem,
  styled,
  Button,
  ButtonProps,
  Grid,
  Card,
  SelectChangeEvent,
  Input
} from '@mui/material'
import CommonHeader from 'src/layouts/components/vertical/Header'
import { useDispatch, useSelector } from 'react-redux'
import { CreateUser, GetAdminById, getAllActiveRole, updateAdminUser } from 'src/Store/Reducer/UserSlice'
import { Image_API } from 'src/Apis/Services'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const FormLayoutsSeparator = () => {
  const router = useRouter()
  const { userID, mode }: any = router.query
  const dispatch = useDispatch()
  const [selectedRoleId, setSelectedRoleId] = useState<any>('')
  const [roleData, setRoleData] = useState<string[]>([])
  const { getAllActiveUser } = useSelector(({ UserSlice }) => UserSlice)
  const [language] = useState<string[]>([])
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('/images/avatars/profile1.svg')

  useEffect(() => {
    dispatch(getAllActiveRole())
  }, [dispatch])

  useEffect(() => {
    console.log('vds', getAllActiveUser.data)
    setRoleData(getAllActiveUser.data)
  }, [getAllActiveUser])

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const selectedRole = event.target.value as string

    formik.setFieldValue('roleId', selectedRole)

    setSelectedRoleId(selectedRole)
  }

  const UserSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    userName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    desigination: Yup.string().required('Designation is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Invalid mobile number')
      .required('Mobile no is required')
  })

  const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    desigination: '',
    mobile: '',
    roleId: '',
    profile: '',
    countryCode: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema: UserSchema,
    onSubmit: async values => {
      console.log('valuess', values)
      if (values) {
        try {
          const formData = new FormData()
          formData.append('profile', values.profile)
          formData.append('firstName', values.firstName)
          formData.append('lastName', values.lastName)
          formData.append('userName', values.userName)
          formData.append('email', values.email)
          formData.append('desigination', values.desigination)
          formData.append('countryCode', values.countryCode)
          formData.append('mobile', values.mobile)
          formData.append('roleId', values.roleId && selectedRoleId)

          if (userID) {
            const updateData = {
              ...formData,
              _id: userID
            }
            formData.append('_id', userID)
            const res = await dispatch(updateAdminUser(updateData))
            console.log('rews', res)
            if (res.payload?.status === 201) {
              toast.success(res?.payload?.data?.message)
              router.push('/pages/users')
            }
          } else {
            const res = await dispatch(CreateUser(formData))
            console.log('rews', res)
            if (res.payload?.status === 201) {
              toast.success(res?.payload?.data?.message)
              router.push('/pages/users')
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }
  })

  const handleFileChange = event => {
    const file = event.target.files[0]
    if (file) {
      formik.setFieldValue('profile', file)
      const imageUrl = URL.createObjectURL(file)
      setUploadedImageUrl(imageUrl)
    } else {
      formik.setFieldValue('profile', null)
      setUploadedImageUrl('')
    }
  }

  const handleReset = () => {
    formik.setFieldValue('profile', null)
    setUploadedImageUrl('/images/avatars/profile1.svg')
  }

  useEffect(() => {
    if (userID && mode !== 'add') {
      dispatch(GetAdminById({ _id: userID }))
        .then(res => {
          if (res.payload.data.data) {
            const user = res.payload.data.data
            const { firstName, lastName, userName, desigination, email, mobile, roleId, profile, countryCode } = user
            formik.setValues({
              firstName: firstName,
              lastName: lastName,
              userName: userName,
              email: email,
              desigination: desigination,
              mobile: mobile,
              roleId: roleId || selectedRoleId,
              profile: profile,
              countryCode: countryCode
            })
            const profileImageUrl = `${Image_API}/${profile}`
            setUploadedImageUrl(profileImageUrl)
            setSelectedRoleId(roleId || '')
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }, [dispatch, userID, mode])

  return (
    <>
      <CommonHeader />
      <Card className='form-layout'>
        <Grid item xs={12} className='image-align'>
          <Grid sx={{ display: 'flex' }}>
            <ImgStyled
              src={mode === 'view' ? uploadedImageUrl : uploadedImageUrl}
              alt='Profile Pic'
              width='120'
              height='120'
            />
            {mode !== 'view' && (
              <Grid sx={{ marginTop: 6 }}>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <Input type='file' name='profile' onChange={handleFileChange} />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={handleReset}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                value={formik.values.firstName}
                fullWidth
                label='First Name'
                placeholder='leonard'
                onChange={formik.handleChange}
                helperText={formik.errors.firstName && formik.touched.firstName && formik.errors.firstName}
                onBlur={formik.handleBlur}
                className='error-msg'
                InputProps={{ readOnly: mode === 'view' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='lastName'
                value={formik.values.lastName}
                fullWidth
                label='Last Name'
                placeholder='leonard'
                helperText={formik.errors.lastName && formik.touched.lastName && formik.errors?.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='error-msg'
                InputProps={{ readOnly: mode === 'view' }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name='userName'
                value={formik.values.userName}
                fullWidth
                label='User Name'
                placeholder='carterLeonard'
                onChange={formik.handleChange}
                helperText={formik.errors.userName && formik.touched.userName && formik.errors?.userName}
                onBlur={formik.handleBlur}
                className='error-msg'
                InputProps={{ readOnly: mode === 'view' }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label='Email '
                placeholder='carterLeonard@gmail.com'
                type='email'
                name='email'
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.errors.email && formik.touched.email && formik.errors?.email}
                onBlur={formik.handleBlur}
                className='error-msg'
                InputProps={{ readOnly: mode === 'view' }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label='Desigination '
                placeholder='software development'
                type='desigination'
                name='desigination'
                fullWidth
                value={formik.values.desigination}
                onChange={formik.handleChange}
                helperText={formik.errors.desigination && formik.touched.desigination && formik.errors?.desigination}
                onBlur={formik.handleBlur}
                className='error-msg'
                InputProps={{ readOnly: mode === 'view' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ display: 'flex' }}>
              <FormControl className='min-w-[5rem]' sx={{ marginRight: '1rem' }}>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue='UK'
                  name='countryCode'
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  value={formik.values.countryCode}
                  onChange={formik.handleChange}
                  inputProps={{ readOnly: mode === 'view' }}
                >
                  <MenuItem value='+91' className='px-2 py-1 text-xs'>
                    +91
                  </MenuItem>
                  <MenuItem value='+1' className='px-2 py-1 text-xs'>
                    +1
                  </MenuItem>
                  <MenuItem value='+44' className='px-2 py-1 text-xs'>
                    +44
                  </MenuItem>
                  <MenuItem value='+64' className='px-2 py-1 text-xs'>
                    +64
                  </MenuItem>
                </Select>
              </FormControl>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='mobile'
                  value={formik.values.mobile}
                  fullWidth
                  label='Mobile no'
                  placeholder='9999999999'
                  onChange={formik.handleChange}
                  helperText={formik.errors.mobile && formik.touched.mobile && formik.errors?.mobile}
                  onBlur={formik.handleBlur}
                  className='error-msg'
                  InputProps={{ readOnly: mode === 'view' }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Role</InputLabel>
                <Select
                  name='roleId'
                  labelId='form-layouts-separator-multiple-select-label'
                  id='form-layouts-separator-multiple-select'
                  input={<OutlinedInput label='Role' id='select-multiple-role' />}
                  value={formik.values.roleId && selectedRoleId}
                  defaultValue={language}
                  onChange={handleSelectChange}
                  inputProps={{ readOnly: mode === 'view' }}
                >
                  {roleData.map((item: any, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.roleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size='large' color='secondary' variant='outlined' onClick={() => router.push('/pages/users')}>
            Cancel
          </Button>
          {mode !== 'view' && (
            <Button size='large' type='submit' variant='contained' onClick={() => formik.handleSubmit()}>
              Save
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  )
}

export default FormLayoutsSeparator
