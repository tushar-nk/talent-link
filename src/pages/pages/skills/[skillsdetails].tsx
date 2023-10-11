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
  Radio
} from '@mui/material'
import CommonHeader from 'src/layouts/components/vertical/Header'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { createSkill, getSKillId, updateSkill } from 'src/Store/Reducer/SkillSlice'

export default function SkillDetails() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
  const { userID, mode } = router.query

  const handleRadioChange = event => {
    setIsActive(event.target.value === 'active')
  }

  interface subjectType {
    skillName: string
    isActive?: boolean
  }

  const initialValues: subjectType = {
    skillName: '',
    isActive: true
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit:() => {
      if (userID) {
        dispatch(updateSkill({ ...formik.values, isActive: isActive, _id: userID }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/skills')
            }
          })
          .catch(error => {
            console.error('Error updating data:', error)
          })
      } else {
        dispatch(createSkill({ ...formik.values, isActive: isActive }))
          .then(res => {
            if (res?.payload?.status === 201) {
              router.push('/pages/skills')
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
      dispatch(getSKillId({ _id: userID }))
        .then(res => {
          if (res && res.payload && res.payload.data) {
            const user = res.payload.data.data
            const { skillName, isActive } = user
            formik.setValues({
              skillName: skillName || '',
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
            <CardHeader title='Skills' titleTypographyProps={{ variant: 'h2' }} className='support-subject' />
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='skillName'
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.skillName}
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
            <Button size='large' color='secondary' variant='outlined' onClick={() => router.push('/pages/skills')}>
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
