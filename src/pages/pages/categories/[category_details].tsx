import React, { useState, useEffect } from 'react'
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  TextField,
  FormControlLabel,
  CardActions,
  Button,
  Input,
  Radio,
  FormControl,
  FormHelperText
} from '@mui/material'
import CommonHeader from 'src/layouts/components/vertical/Header'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { createCategory, getCategoryById, updateCategory } from 'src/Store/Reducer/CategorySlice'
import { Image_API } from '../../../Apis/Services'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  categoryName: Yup.string().required('Category is required'),
  logo: Yup.string().required('Logo is required')
})

export default function CategoryDetails() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('active')
  const { userID, mode } = router.query
  const [imagePreview, setImagePreview] = useState(null)

  const handleRadioChange = event => {
    setSelectedOption(event.target.value)
  }

  const handleFileChange = event => {
    const file = event.target.files[0]
    if (file) {
      formik.setFieldValue('logo', file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      formik.setFieldValue('logo', null)
      setImagePreview(null)
    }
  }

  interface categoryType {
    categoryName: string
    isActive?: boolean
    logo?: File | null
  }

  const initialValues: categoryType = {
    categoryName: '',
    isActive: true,
    logo: null
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      if (values) {
        try {
          const isActive = selectedOption === 'active'
          const formData = new FormData()
          if (userID) {
            formData.append('_id', userID.toString())
          }
          formData.append('categoryName', values.categoryName)
          formData.append('isActive', isActive.toString())
          formData.append('logo', values.logo)
          if (userID) {
            const res = await dispatch(updateCategory(formData))
            if (res?.payload?.status === 201) {
              router.push('/pages/categories')
            }
          } else {
            const res = await dispatch(createCategory(formData))
            if (res?.payload?.status === 201) {
              router.push('/pages/categories')
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }
  })

  useEffect(() => {
    if (userID) {
      dispatch(getCategoryById({ _id: userID }))
        .then(res => {
          if (res && res.payload && res.payload.data) {
            const user = res.payload.data.data
            const { categoryName, isActive, logo } = user
            formik.setValues({
              categoryName: categoryName || '',
              isActive: isActive,
              logo: logo || null
            })
            setSelectedOption(isActive ? 'active' : 'deactive')
            if (logo) {
              setImagePreview(`${Image_API}${logo}`)
            }
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
            <CardHeader title='Categories' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='categoryName'
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.categoryName}
                  InputProps={{ readOnly: mode === 'view' }}
                  error={formik.touched.categoryName && Boolean(formik.errors.categoryName)}
                  helperText={formik.touched.categoryName && formik.errors.categoryName}
                  className='error-msg'
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <CardHeader title='Status' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid className='status' item>
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedOption === 'active'}
                    onChange={handleRadioChange}
                    value='active'
                    name='isActive'
                  />
                }
                label='Active'
                sx={{ marginRight: 10 }}
                disabled={mode === 'view'}
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedOption === 'deactive'}
                    onChange={handleRadioChange}
                    value='deactive'
                    name='isActive'
                  />
                }
                label='Deactive'
                disabled={mode === 'view'}
              />
            </Grid>
          </CardContent>
          <CardContent>
            <CardHeader title='Upload Photo' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid container spacing={5} sx={{ display: 'flex' }}>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt='Image Preview'
                  style={{ width: '150px', height: '150px', margin: '15px 0px 0px 15px' }}
                />
              )}
              <Grid item xs={12} sm={12}>
                <FormControl error={formik.touched.logo && Boolean(formik.errors.logo)} fullWidth className='error-msg'>
                  <Input type='file' name='logo' onChange={handleFileChange} disabled={mode === 'view'} />
                  {formik.touched.logo && formik.errors.logo && <FormHelperText>{formik.errors.logo}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size='large' color='secondary' variant='outlined' onClick={() => router.push('/pages/categories')}>
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
