import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { styled } from '@mui/material/styles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { TextField, Card, CardHeader, Box, Grid, InputLabel, OutlinedInput, MenuItem, FormControl } from '@mui/material'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

export default function DetailsCard() {
  const [imgSrc] = useState<string>('/images/avatars/1.png')
  const [experience, setExperience] = useState<string[]>([])

  const validationSchema = Yup.object({
    employeeName: Yup.string().required('Employee Name is required'),
    companyName: Yup.string().required('Company Name is required'),
    designation: Yup.string().required('Designation is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    language: Yup.string().required('Language is required'),
    experience: Yup.number()
      .required('Experience is required')
      .moreThan(0, 'Experience must be greater than 0')
      .typeError('Experience must be a number'),
    availability: Yup.string().required('Availability is required'),
    location: Yup.string().required('Location is required')
  })

  const formik = useFormik({
    initialValues: {
      employeeName: '',
      companyName: '',
      designation: '',
      birthDate: null,
      language: '',
      experience: '',
      availability: '',
      location: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  const CustomInput = (props: any) => {
    return <TextField fullWidth {...props} label='Birth Date' autoComplete='off' />
  }

  const handleSelectExperience = (event: SelectChangeEvent<string[]>) => {
    setExperience(event.target.value as string[])
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className='resume-layout'>
        <CardHeader title='Basic Details' className='resume-title' titleTypographyProps={{ variant: 'h6' }} />
        <Box sx={{ display: 'flex', margin: 10 }}>
          <ImgStyled src={imgSrc} alt='Profile Pic' />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Employee Name'
                placeholder='carter Leonerd'
                name='employeeName'
                value={formik.values.employeeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.employeeName && formik.errors.employeeName && (
                <div className='error-message'>{formik.errors.employeeName}</div>
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Company Name</InputLabel>
                <Select
                  name='companyName'
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Company Name' id='select-multiple-language' />}
                >
                  <MenuItem value='Seven Square'>Seven Square</MenuItem>
                  <MenuItem value='Tridhya'>Tridhya</MenuItem>
                  <MenuItem value='Upsquare'>Upsquare</MenuItem>
                </Select>
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className='error-message'>{formik.errors.companyName}</div>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Designation</InputLabel>
                <Select
                  name='designation'
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Designation' id='select-multiple-language' />}
                >
                  <MenuItem value='Junior Developer'>Junior Developer</MenuItem>
                  <MenuItem value='Project Manager'>Project Manager</MenuItem>
                  <MenuItem value='Associate'>Associate</MenuItem>
                </Select>
                {formik.touched.designation && formik.errors.designation && (
                  <div className='error-message'>{formik.errors.designation}</div>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePickerWrapper>
                <DatePicker
                  selected={formik.values.birthDate}
                  showYearDropdown
                  showMonthDropdown
                  placeholderText='MM-DD-YYYY'
                  customInput={<CustomInput name='birthDate' />}
                  id='form-layouts-separator-date'
                  onChange={(date: Date) => formik.setFieldValue('birthDate', date)}
                  onBlur={formik.handleBlur}
                />
              </DatePickerWrapper>
              {formik.touched.birthDate && formik.errors.birthDate && (
                <div className='error-message'>{formik.errors.birthDate}</div>
              )}
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  value={formik.values.language}
                  onChange={formik.handleChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' name='language' />}
                  onBlur={formik.handleBlur}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Hindi'>Hindi</MenuItem>
                </Select>
                {formik.touched.language && formik.errors.language && (
                  <div className='error-message'>{formik.errors.language}</div>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Experience</InputLabel>
                <Select
                  value={experience}
                  onChange={handleSelectExperience}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Experience' id='select-multiple-language' />}
                >
                  <MenuItem value='0-12 months'>0-12 months</MenuItem>
                  <MenuItem value='1-2 years'>1-2 years</MenuItem>
                  <MenuItem value='2-5 years'>2-5 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Availability</InputLabel>
                <Select
                  value={formik.values.availability}
                  onChange={formik.handleChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Availability' id='select-multiple-availability' name='availability' />}
                  onBlur={formik.handleBlur}
                >
                  <MenuItem value='Part Time'>Part Time</MenuItem>
                  <MenuItem value='Full Time'>Full Time</MenuItem>
                </Select>
                {formik.touched.availability && formik.errors.availability && (
                  <div className='error-message'>{formik.errors.availability}</div>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Location'
                placeholder='Gujarat'
                name='location'
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.location && formik.errors.location && (
                <div className='error-message'>{formik.errors.location}</div>
              )}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </form>
  )
}
