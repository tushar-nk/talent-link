import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
  Typography
} from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetRoleById, UpdateRole, createRoles } from 'src/Store/Reducer/RoleSlice'
import CommonHeader from 'src/layouts/components/vertical/Header'
import * as Yup from 'yup'

export default function RoleDetail() {
  const [isActive, setIsActive] = useState(true)
  const [filterArr, setFilterArr] = useState([])

  const dispatch = useDispatch()
  const router = useRouter()
  const { userID } = router.query

  const arr = [
    {
      id: 1,
      name: 'adminUser',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },
    {
      id: 2,
      name: 'company',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },
    {
      id: 3,
      name: 'designation',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },
    {
      id: 4,
      name: 'resume',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },
    {
      id: 5,
      name: 'role',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },

    {
      id: 6,
      name: 'subCategory',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },
    {
      id: 7,
      name: 'skill',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    },
    {
      id: 8,
      name: 'supportSubject',
      action: {
        edit: false,
        delete: false,
        add: false,
        view: false
      }
    }
  ]

  const handleRadioChanged = event => {
    setIsActive(event.target.value === 'active')
    formik.setFieldValue('isActive', event.target.value === 'active')
  }

  const checkboxes = [{}]
  const [checked, setChecked] = useState([])

  // console.log(checked, ':checked')

  const SelectAllAction = (arr, val, flag) => {
    const updateArr = (filterArr?.length ? filterArr : arr)?.map(item => {
      if (item.id == val) {
        return {
          ...item,
          action: {
            add: flag,
            edit: flag,
            delete: flag,
            view: flag
          }
        }
      }

      return item
    })
    setFilterArr(updateArr)
  }
  function handleCheckboxesCheckAll(val) {
    if (checked?.length > 0) {
      if (checked.includes(val)) {
        const index = checked.indexOf(val)
        if (index > -1) {
          checked.splice(index, 1)
          const tempArr = [...checked]
          SelectAllAction(arr, val, false)
          setChecked(tempArr)
        }
      } else {
        const tempArr = [...checked, val]
        SelectAllAction(arr, val, true)
        setChecked(tempArr)
      }
    } else {
      const tempArr = [...checked, val]
      SelectAllAction(arr, val, true)

      setChecked(tempArr)
    }
  }

  const handleCheckboxChanged = (id, propertyName, newValue) => {
    const updatedData = (filterArr.length > 0 ? filterArr : arr).map(item => {
      if (item.id == id) {
        return {
          ...item,
          action: {
            ...item.action,
            [propertyName]: newValue
          }
        }
      }

      return item
    })
    updatedData.map(item => {
      if (item.id == id) {
        const isSelectedAll = Object.values(item.action).every(actionValue => actionValue === true)
        const isChecked = checked.includes(id?.toString())
        if (!isSelectedAll && isChecked) {
          const index = checked.indexOf(id?.toString())
          checked.splice(index, 1)
          const tempArr = [...checked]
          setChecked(tempArr)
        } else {
          if (isSelectedAll && !isChecked) {
            const tempArr = [...checked, id?.toString()]
            setChecked(tempArr)
          }
        }

        return isSelectedAll
      }
    })

    setFilterArr(updatedData)
  }

  const roleSchema = Yup.object().shape({
    roleName: Yup.string().required('please enter username')
  })
  interface fieldType {
    roleName: string
    isActive?: boolean
    permissions: {
      adminUser: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        adminUser: boolean
      }
      company: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        company: boolean
      }
      designation: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        designation: boolean
      }
      resume: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        resume: boolean
      }
      role: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        role: boolean
      }
      category: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        category: boolean
      }
      subCategory: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        subCategory: boolean
      }
      skill: {
        isEdit: boolean
        isDelete: boolean
        isAdd: boolean
        isView: boolean
        skill: boolean
      }
    }
  }
  const initialValues: fieldType = {
    roleName: '',
    isActive: true,
    permissions: {
      adminUser: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        adminUser: true
      },
      company: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        company: true
      },
      designation: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        designation: true
      },
      resume: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        resume: true
      },
      role: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        role: true
      },
      category: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        category: true
      },
      subCategory: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        subCategory: true
      },
      skill: {
        isEdit: true,
        isDelete: true,
        isAdd: true,
        isView: true,
        skill: true
      }
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: roleSchema,
    onSubmit: () => {
      const permissions = {}

      filterArr.forEach(item => {
        permissions[item.name] = {
          isEdit: item.action.edit,
          isDelete: item.action.delete,
          isAdd: item.action.add,
          isView: item.action.view,
          [item.name]: item.name === 'select'
        }
      })
      const formData = {
        roleName: formik.values?.roleName,
        isActive: isActive,
        permission: permissions
      }

      if (userID) {
        dispatch(UpdateRole({ ...formik.values, isActive: isActive, _id: userID }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/roles')
            }
          })
          .catch(error => {
            console.log('error', error)
          })
      } else {
        dispatch(createRoles(formData))
          .then(res => {
            console.log('res', res)

            if (res?.payload?.statusCode === 201) {
              router.push('/pages/roles')
            }
          })
          .catch(error => {
            console.log('error', error)
          })
      }
    }
  })

  useEffect(() => {
    if (userID) {
      dispatch(GetRoleById({ _id: userID }))
        .then(res => {
          if (res && res.payload && res.payload.data) {
            const user = res.payload.data.data
            const { roleName, isActive, permissions } = user

            formik.setValues({
              roleName: roleName || '',
              isActive: isActive,
              permissions: {
                ...formik.values.permissions,
                ...permissions
              }
            })

            setIsActive(isActive)
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }, [dispatch, userID])

  console.log('formik', formik.values)

  return (
    <>
      <CommonHeader />

      <Card className='form-layout'>
        <>
          <div>
            <div className='role-title'>
              <Typography variant='h4' className='support-subject'>
                Add Role
              </Typography>
            </div>
            <div className='roledetails'>
              <TextField
                className='role-textfield'
                label='Role'
                name='roleName'
                value={formik.values?.roleName}
                onChange={formik.handleChange}
                placeholder='Role'
                helperText={formik.touched.roleName && formik.errors?.roleName}
                error={formik.touched.roleName && Boolean(formik.errors.roleName)}
                onBlur={formik.handleBlur}
              />

              <div>
                <Typography variant='h6' className='support-subject'>
                  Status
                </Typography>
                <FormControlLabel
                  control={<Radio checked={isActive} onChange={handleRadioChanged} value='active' name='isActive' />}
                  label='Active'
                  sx={{ marginRight: 10 }}
                />
                <FormControlLabel
                  control={<Radio checked={!isActive} onChange={handleRadioChanged} value='deactive' name='isActive' />}
                  label='Deactive'
                />
              </div>
            </div>

            <Grid>
              <CardHeader title='Permissions' titleTypographyProps={{ variant: 'h2' }} />

              <div>
                {(filterArr.length > 0 ? filterArr : arr).map((item, index) => {
                  return (
                    <div className='permission-checkbox' key={index}>
                      <FormControlLabel
                        className='checkbox-label'
                        label={item.name}
                        control={
                          <Checkbox
                            value={item?.id}
                            indeterminate={checked.length > 0 && checked.length < checkboxes.length}
                            checked={checked?.includes(item?.id?.toString())}
                            onChange={e => handleCheckboxesCheckAll(e.target.value)}
                          />
                        }
                      />
                      <div className='child-checkbox'>
                        {Object.values(item?.action).length > 0 &&
                          Object.keys(item?.action).map((value, index) => {
                            return (
                              <FormControlLabel
                                key={index}
                                control={
                                  <Checkbox
                                    value={value}
                                    checked={item?.action.hasOwnProperty(value) && item?.action[value]}
                                    onChange={() => handleCheckboxChanged(item?.id, value, !item?.action[value])}
                                  />
                                }
                                label={value}
                              />
                            )
                          })}
                      </div>
                    </div>
                  )
                })}
              </div>

              <CardActions className='role-btns'>
                <Button
                  size='large'
                  color='secondary'
                  variant='outlined'
                  onClick={() => {
                    router.push('/pages/roles')
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size='large'
                  variant='contained'
                  onClick={() => {
                    formik.handleSubmit()
                  }}
                >
                  Save
                </Button>
              </CardActions>
            </Grid>
          </div>
        </>
      </Card>
    </>
  )
}
