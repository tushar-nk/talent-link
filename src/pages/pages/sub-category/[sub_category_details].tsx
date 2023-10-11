import React, { useState, useEffect, useRef } from 'react'
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  TextField,
  FormControlLabel,
  CardActions,
  Button,
  FormControl,
  MenuItem,
  Radio
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import {
  getAllActiveCategories,
  createSubCategory,
  GetSubCategoryById,
  updateSubCategory
} from 'src/Store/Reducer/SubCategorySlice'
import CommonHeader from 'src/layouts/components/vertical/Header'
import toast from "react-hot-toast";

export default function SubCategoryDetails() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
  const [language] = useState<string[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<any>('')
  const [categoryData, setCategoryData] = useState<string[]>([])
  const { userID, mode } = router.query
  const menuRef = useRef(null)

  const { activeCategories } = useSelector(({ SubCategorySlice }) => SubCategorySlice)

  useEffect(() => {
    dispatch(getAllActiveCategories())
  }, [dispatch])

  useEffect(() => {
    setCategoryData(activeCategories.data)
  }, [activeCategories])

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const selectedCategory = event.target.value as string
    setSelectedCategoryId(selectedCategory)
  }

  const handleRadioChange = event => {
    setIsActive(event.target.value === 'active')
  }

  interface subjectType {
    subCategoryName: string
    isActive: boolean
    categoryId: string
  }

  const initialValues: subjectType = {
    subCategoryName: '',
    categoryId: '',
    isActive: true
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      if (values && selectedCategoryId) {
        const subCategoryData = {
          subCategoryName: values.subCategoryName,
          isActive,
          categoryId: selectedCategoryId
        }
        if (mode === 'edit') {
          const updateData = {
            ...subCategoryData,
            _id: userID
          }

          dispatch(updateSubCategory(updateData, userID))
            .then(res => {
              if (res?.payload?.status === 201) {
                toast.success(res?.payload?.data?.message)
                router.push('/pages/sub-category')
              }
            })
            .catch(error => {
              console.error('Error updating data:', error)
            })
        } else {
          dispatch(createSubCategory(subCategoryData))
            .then(res => {
              if (res?.payload?.status === 201) {
                toast.success( res?.payload?.data?.message )
                router.push('/pages/sub-category')
              }
            })
            .catch(error => {
              console.error('Error adding data:', error)
            })
        }
      }
    }
  })

  useEffect(() => {
    if (userID && mode !== 'add') {
      dispatch(GetSubCategoryById({ _id: userID }))
        .then(res => {
          if (res.payload.data.data) {
            const user = res.payload.data.data
            const { subCategoryName, isActive, categoryId } = user
            formik.setValues({
              subCategoryName: subCategoryName,
              isActive: isActive,
              categoryId: categoryId || ''
            })
            setSelectedCategoryId(categoryId || '')
            setIsActive(isActive)
          }
          toast.success(res?.payload?.data?.message)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }, [dispatch, userID, mode])

  const handleMenuScroll = () => {
    const menu = menuRef.current
    if (menu) {
      if (menu.scrollTop + menu.clientHeight >= menu.scrollHeight - 50) {
      }
    }
  }

  return (
    <>
      <CommonHeader />
      <Card className='form-layout'>
        <Grid>
          <CardContent>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: '100%' }}>
                <CardHeader title='Category' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
                <Select
                  value={selectedCategoryId}
                  defaultValue={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  inputProps={{ readOnly: mode === 'view' }}
                  MenuProps={{
                    onScroll: handleMenuScroll,
                    PaperProps: {
                      style: {
                        maxHeight: '200px',
                        overflowY: 'auto'
                      }
                    }
                  }}
                  ref={menuRef}
                >
                  {categoryData.map((item: any, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </CardContent>
          <CardContent>
            <CardHeader title='Sub Category' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='subCategoryName'
                  onChange={formik.handleChange}
                  value={formik.values.subCategoryName}
                  fullWidth
                  InputProps={{ readOnly: mode === 'view' }}
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
              onClick={() => router.push('/pages/sub-category')}
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
