import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import { Autocomplete } from '@mui/lab'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box, Chip, Stack, CardActions } from '@mui/material'
import { FormLabel } from '@mui/material'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import EditIcon from '@mui/icons-material/Edit'
import CommonHeader from 'src/layouts/components/vertical/Header'
import CancelIcon from '@mui/icons-material/Cancel'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActiveCategories } from 'src/Store/Reducer/CategorySlice'

const DynamicEditor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false
})

const cardHeaderStyle = {
  backgroundColor: ' #f8954a',
  color: 'white'
}

const subCategoryOptions = ['Information Technology', 'Sales', 'Finance', 'Account', 'Project']

export default function CompanyDetails() {
  const dispatch = useDispatch()
  const [skills, setSkills] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingSkillIndex, setEditingSkillIndex] = useState(-1)
  const [newSkill, setNewSkill] = useState('')
  const [companyLogoFile, setCompanyLogoFile] = useState<File | null>(null)
  const [isEditingLogo, setIsEditingLogo] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState<any>('')
  const [categoryData, setCategoryData] = useState<string[]>([])
  const [language] = useState<string[]>([])

  const { activeCategories } = useSelector(({ SubCategorySlice }) => SubCategorySlice)

  useEffect(() => {
    dispatch(getAllActiveCategories())
  }, [dispatch])

  useEffect(() => {
    console.log(activeCategories.data)
    setCategoryData(activeCategories.data)
  }, [activeCategories])

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const selectedCategory = event.target.value as string
    setSelectedCategoryId(selectedCategory)
  }

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    companyTagline: Yup.string().required('Company Tagline is required'),
    ownerName: Yup.string().required('Owner Name is required'),
    category: Yup.string().required('Category is required'),
    subCategory: Yup.array().min(1, 'Select at least one subcategory').required('Subcategory is required'),
    companyLogo: Yup.string().required('Company Logo is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile Number is required'),
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, 'Contact Number must be a 10-digit number')
      .required('Contact Number is required'),
    websiteLink: Yup.string().url('Invalid URL format').required('Website Link is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string()
      .required('Zip code is required')
      .matches(/^\d{6}$/, 'Zip code must be a 6-digit number'),
    employees: Yup.string().required('Employees field is required'),
    workTime: Yup.string().required('Work Time is required'),
    skills: Yup.array().min(1, 'At least one skill is required').of(Yup.string().required('Skill is required')),
    facebook: Yup.string().url('Invalid URL format'),
    googlePlus: Yup.string().url('Invalid URL format'),
    twitter: Yup.string().url('Invalid URL format'),
    linkedIn: Yup.string().url('Invalid URL format'),
    pinterest: Yup.string().url('Invalid URL format'),
    instagram: Yup.string().url('Invalid URL format'),
    aboutCompany: Yup.string().required('About Company is required')

    // Add validation for other fields here
  })

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyTagline: '',
      ownerName: '',
      category: '',
      subCategory: [],
      companyLogo: '',
      email: '',
      mobileNumber: '',
      contactNumber: '',
      websiteLink: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zipCode: '',
      employees: '',
      workTime: '',
      facebook: '',
      googlePlus: '',
      twitter: '',
      linkedIn: '',
      pinterest: '',
      instagram: '',
      aboutCompany: '',
      skills: []
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      const updatedSkills = [...skills]
      if (editingSkillIndex === -1) {
        updatedSkills.push(newSkill)
      } else {
        updatedSkills[editingSkillIndex] = newSkill
        setEditingSkillIndex(-1)
      }
      setSkills(updatedSkills)
      setNewSkill('')
      setIsEditing(false)
    }
  }

  const handleEditSkill = index => {
    setIsEditing(true)
    setEditingSkillIndex(index)
    setNewSkill(skills[index])
  }

  const handleDeleteSkill = index => {
    const updatedSkills = [...skills]
    updatedSkills.splice(index, 1)
    setSkills(updatedSkills)
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
    if (!isEditing) {
      setNewSkill('')
      setEditingSkillIndex(-1)
    }
  }

  const handleSubCategoryChange = event => {
    formik.setFieldValue('subCategory', event.target.value)
  }

  const handleRemoveSubCategory = valueToRemove => {
    const updatedSubCategories = formik.values.subCategory.filter(value => value !== valueToRemove)
    formik.setFieldValue('subCategory', updatedSubCategories)
  }

  const handleCompanyLogoChange = e => {
    const file = e.target.files[0]
    setCompanyLogoFile(file)
  }

  const handleRemoveCompanyLogo = () => {
    setCompanyLogoFile(null)
  }
  const toggleEditLogo = () => {
    setIsEditingLogo(!isEditingLogo)
  }

  return (
    <>
      <CommonHeader />
      <form onSubmit={formik.handleSubmit} style={{ marginTop: '30px' }}>
        <Card>
          <CardHeader title='General Information' titleTypographyProps={{ variant: 'h6' }} sx={cardHeaderStyle} />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Company Name </FormLabel>
                <TextField
                  fullWidth
                  id='companyName'
                  name='companyName'
                  placeholder='Company Name'
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className='error-message'>{formik.errors.companyName}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Company Tagline </FormLabel>
                <TextField
                  fullWidth
                  placeholder='Compny Tagline'
                  id='companyTagline'
                  name='companyTagline'
                  value={formik.values.companyTagline}
                  onChange={formik.handleChange}
                  error={formik.touched.companyTagline && Boolean(formik.errors.companyTagline)}
                />
                {formik.touched.companyTagline && formik.errors.companyTagline ? (
                  <div className='error-message'>{formik.errors.companyTagline}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Owner Name </FormLabel>
                <TextField
                  fullWidth
                  placeholder='Owner Name'
                  id='ownerName'
                  name='ownerName'
                  value={formik.values.ownerName}
                  onChange={formik.handleChange}
                  error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
                />
                {formik.touched.ownerName && formik.errors.ownerName ? (
                  <div className='error-message'>{formik.errors.ownerName}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Category</FormLabel>
                 
                  <Select
                  value={selectedCategoryId}
                  defaultValue={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                >
                
                  <>
                  {categoryData.map((item: any, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.categoryName}
                    </MenuItem>
                  ))}
                  </>
                
                </Select>
                 
                  {formik.touched.category && formik.errors.category ? (
                    <div className='error-message'>{formik.errors.category}</div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Sub Category</FormLabel>
                  <Select
                    id='subCategory'
                    name='subCategory'
                    multiple
                    value={formik.values.subCategory}
                    onChange={handleSubCategoryChange}
                    onBlur={formik.handleBlur}
                    renderValue={selected => (
                      <div>
                        {selected.map(value => (
                          <Chip
                            key={value}
                            label={value}
                            onDelete={() => handleRemoveSubCategory(value)} // Remove selected subcategory on click
                          />
                        ))}
                      </div>
                    )}
                  >
                    {subCategoryOptions.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.subCategory && formik.errors.subCategory ? (
                    <div className='error-message'>{formik.errors.subCategory}</div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Company Logo </FormLabel>
                <div>
                  {isEditingLogo ? (
                    <div>
                      <label htmlFor='companyLogoFile' style={{ cursor: 'pointer' }}>
                        <div
                          style={{
                            width: '100px',
                            height: '100px',
                            border: '2px solid #ccc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                          }}
                        >
                          {companyLogoFile ? (
                            <>
                              <img
                                src={URL.createObjectURL(companyLogoFile)}
                                alt='Company Logo'
                                style={{ width: '100px', height: '100px' }}
                              />

                              <CancelIcon
                                onClick={handleRemoveCompanyLogo}
                                style={{ cursor: 'pointer', marginBottom: '4px' }}
                              />
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </label>
                      <input
                        type='file'
                        accept='image/*'
                        id='companyLogoFile'
                        name='companyLogoFile'
                        style={{ display: 'none' }}
                        onChange={handleCompanyLogoChange}
                      />
                    </div>
                  ) : (
                    <TextField type='text' placeholder='Enter company logo URL' onClick={toggleEditLogo} />
                  )}
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className='resume-layout'>
          <CardHeader title='Company Address' titleTypographyProps={{ variant: 'h6' }} sx={cardHeaderStyle} />
          <CardContent className='company-space'>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <FormLabel>Email </FormLabel>
                <TextField
                  fullWidth
                  id='email'
                  name='email'
                  placeholder='Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='error-message'>{formik.errors.email}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Mobile Number </FormLabel>
                <TextField
                  fullWidth
                  id='mobileNumber'
                  name='mobileNumber'
                  placeholder='Mobile Number'
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <div className='error-message'>{formik.errors.mobileNumber}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Contact Number </FormLabel>
                <TextField
                  fullWidth
                  id='contactNumber'
                  name='contactNumber'
                  placeholder='Contact Number'
                  value={formik.values.contactNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <div className='error-message'>{formik.errors.contactNumber}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Website Link </FormLabel>
                <TextField
                  fullWidth
                  id='websiteLink'
                  name='websiteLink'
                  placeholder='Website Link'
                  value={formik.values.websiteLink}
                  onChange={formik.handleChange}
                  error={formik.touched.websiteLink && Boolean(formik.errors.websiteLink)}
                />
                {formik.touched.websiteLink && formik.errors.websiteLink ? (
                  <div className='error-message'>{formik.errors.websiteLink}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Address </FormLabel>
                <TextField
                  fullWidth
                  placeholder='Address'
                  id='address'
                  name='address'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className='error-message'>{formik.errors.address}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Country</FormLabel>
                  <Select
                    id='country'
                    name='country'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                  >
                    <MenuItem value='category0'>Country</MenuItem>
                    <MenuItem value='category1'>India</MenuItem>
                    <MenuItem value='category2'>United State</MenuItem>
                    <MenuItem value='category4'>United Kingdom</MenuItem>
                    <MenuItem value='category5'>Japan </MenuItem>
                    <MenuItem value='category6'>France</MenuItem>
                  </Select>
                  {formik.touched.country && formik.errors.country ? (
                    <div className='error-message'>{formik.errors.country}</div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>State</FormLabel>
                  <Select
                    id='state'
                    name='state'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                  >
                    <MenuItem value='category1'>Gujrat</MenuItem>
                    <MenuItem value='category2'>Maharashtra</MenuItem>
                    <MenuItem value='category3'>Uttrakhand</MenuItem>
                    <MenuItem value='category4'>Assam</MenuItem>
                    <MenuItem value='category5'>Himachal Pradesh</MenuItem>
                  </Select>
                  {formik.touched.state && formik.errors.state ? (
                    <div className='error-message'>{formik.errors.state}</div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>City</FormLabel>
                  <Select
                    id='city'
                    name='city'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  >
                    <MenuItem value='category1'>Ahmedabd</MenuItem>
                    <MenuItem value='category2'>Jaipur</MenuItem>
                    <MenuItem value='category3'>Mumbai</MenuItem>
                    <MenuItem value='category4'>Indore </MenuItem>
                    <MenuItem value='category5'>Delhi</MenuItem>
                  </Select>
                  {formik.touched.city && formik.errors.city ? (
                    <div className='error-message'>{formik.errors.city}</div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Zip code </FormLabel>
                <TextField
                  fullWidth
                  placeholder='Zip code'
                  id='zipCode'
                  name='zipCode'
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                  <div className='error-message'>{formik.errors.zipCode}</div>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Employees</FormLabel>
                  <Select
                    id='employees'
                    name='employees'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.employees}
                  >
                    <MenuItem value='category0'>Employees</MenuItem>
                    <MenuItem value='category1'>1-15</MenuItem>
                    <MenuItem value='category2'>16-50</MenuItem>
                    <MenuItem value='category3'>51-100</MenuItem>
                    <MenuItem value='category4'>101-200 </MenuItem>
                    <MenuItem value='category5'>201-500</MenuItem>
                    <MenuItem value='category6'>501-1000</MenuItem>
                    <MenuItem value='category7'>1000+</MenuItem>
                  </Select>
                  {formik.touched.employees && formik.errors.employees ? (
                    <div className='error-message'>{formik.errors.employees}</div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Work Time</FormLabel>
                  <Select
                    id='workTime'
                    name='workTime'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.workTime}
                  >
                    <MenuItem value='category1'>8.00 Am - 6.00 Pm</MenuItem>
                    <MenuItem value='category2'>9.00 Am - 7.00 Pm</MenuItem>
                    <MenuItem value='category3'>10..00 Am - 8.00 Pm</MenuItem>
                  </Select>
                  {formik.touched.workTime && formik.errors.workTime ? (
                    <div className='error-message'>{formik.errors.workTime}</div>
                  ) : null}
                </FormControl>
              </Grid>
              {/* <FormControlLabel control={<Checkbox />} label='Mon'  />
              <FormControlLabel control={<Checkbox />} label='Tue' />
              <FormControlLabel control={<Checkbox />} label='Wed' />
              <FormControlLabel control={<Checkbox />} label='Thu' />
              <FormControlLabel control={<Checkbox />} label='Fri' />
              <FormControlLabel control={<Checkbox />} label='Sat' /> */}
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 6, marginTop: '20px' }}>
          <CardHeader title='Technical Skills' titleTypographyProps={{ variant: 'h6' }} style={cardHeaderStyle} />
          <Box sx={{ margin: 10 }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontSize: '20px' }}>Skills</Typography>
              <EditIcon sx={{ marginLeft: 7, cursor: 'pointer' }} onClick={toggleEdit} />
            </Box>
            <Stack direction='row' spacing={1} sx={{ marginTop: 5 }}>
              {isEditing ? (
                <Autocomplete
                  freeSolo
                  value={newSkill}
                  options={['abc', 'xyz']}
                  onChange={(event, newValue) => setNewSkill(newValue)}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      handleAddSkill()
                    }
                  }}
                  renderInput={params => (
                    <div style={{ alignItems: 'center', width: '180px', marginRight: 5 }}>
                      <TextField {...params} label='New Skill' variant='outlined' fullWidth autoFocus />
                    </div>
                  )}
                />
              ) : null}
              {skills.map((skill, index) => (
                <div key={index}>
                  <Chip
                    label={skill}
                    variant='outlined'
                    onDelete={() => handleDeleteSkill(index)}
                    onClick={() => handleEditSkill(index)}
                    className='skill-title'
                  />
                  {formik.touched.skills && formik.errors.skills && formik.errors.skills[index] ? (
                    <div className='error-message'>{formik.errors.skills[index]}</div>
                  ) : null}
                </div>
              ))}
            </Stack>
          </Box>
        </Card>
        <Card className='resume-layout' sx={{ mb: 6, marginTop: '20px' }}>
          <CardHeader title='Social Accounts' titleTypographyProps={{ variant: 'h6' }} sx={cardHeaderStyle} />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Facebook </FormLabel>
                <TextField
                  fullWidth
                  id='facebook'
                  name='facebook'
                  placeholder='Facebook'
                  value={formik.values.facebook}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.facebook && Boolean(formik.errors.facebook)}
                />
                {formik.touched.facebook && formik.errors.facebook && (
                  <div className='error-message'>{formik.errors.facebook}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Google + </FormLabel>
                <TextField
                  fullWidth
                  id='googlePlus'
                  name='googlePlus'
                  placeholder='Google+'
                  value={formik.values.googlePlus}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.googlePlus && Boolean(formik.errors.googlePlus)}
                />
                {formik.touched.googlePlus && formik.errors.googlePlus && (
                  <div className='error-message'>{formik.errors.googlePlus}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel id='form-layouts-separator-category-label'>Twitter</FormLabel>
                  <Select
                    defaultValue=''
                    id='twitter'
                    name='twitter'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.twitter}
                  >
                    <MenuItem value='category1'>e</MenuItem>
                    <MenuItem value='category2'>d</MenuItem>
                    <MenuItem value='category3'>c</MenuItem>
                    <MenuItem value='category4'>b</MenuItem>
                    <MenuItem value='category5'>a</MenuItem>
                  </Select>
                  {formik.touched.twitter && formik.errors.twitter && (
                    <div className='error-message'>{formik.errors.twitter}</div>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Linked In </FormLabel>
                <TextField
                  fullWidth
                  id='linkedIn'
                  name='linkedIn'
                  placeholder='LinkedIn'
                  value={formik.values.linkedIn}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
                />
                {formik.touched.linkedIn && formik.errors.linkedIn && (
                  <div className='error-message'>{formik.errors.linkedIn}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Pintrest </FormLabel>
                <TextField
                  fullWidth
                  id='pinterest'
                  name='pinterest'
                  placeholder='Pinterest'
                  value={formik.values.pinterest}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.pinterest && Boolean(formik.errors.pinterest)}
                />
                {formik.touched.pinterest && formik.errors.pinterest && (
                  <div className='error-message'>{formik.errors.pinterest}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Instagram </FormLabel>
                <TextField
                  fullWidth
                  id='instagram'
                  name='instagram'
                  placeholder='Instagram'
                  value={formik.values.instagram}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.instagram && Boolean(formik.errors.instagram)}
                />
                {formik.touched.instagram && formik.errors.instagram && (
                  <div className='error-message'>{formik.errors.instagram}</div>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className='resume-layout' sx={{ mb: 6 }}>
          <CardHeader title='Company Summary' titleTypographyProps={{ variant: 'h6' }} sx={cardHeaderStyle} />
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Typography>About Company</Typography>
                <DynamicEditor />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <CardActions>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button size='large' type='submit' variant='contained' onClick={() => formik.handleSubmit()}>
            Save
          </Button>
        </CardActions>
      </form>
    </>
  )
}
