import React from 'react'
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { forgetPassword } from 'src/Store/Reducer/AuthSlice'
import { useDispatch } from 'react-redux'
import toast from "react-hot-toast";


interface ForgotPasswordProps {
  open: boolean
  onClose: () => void
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ open, onClose }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  interface forgetpassType {
    email: string
  }

  const initialValues: forgetpassType = {
    email: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      if (values) {
        dispatch(forgetPassword({ ...formik.values }))
          .then(res => {
            if (res?.payload?.status === 200) {
            toast.success(res?.payload?.data?.message);
            router.push('/')
           
              onClose(); 
            }
          })
          .catch(error => {
            console.error('Error adding data:', error)
          })
      }
    }
  })


  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 4
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 0,
            right: 3
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant='h5' sx={{ marginBottom: 2 }}>
          Forgot Password
        </Typography>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Enter your registered email below to receive password reset instructions.
        </Typography>
        <TextField
          fullWidth
          label='Email'
          variant='outlined'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          sx={{ marginTop: 4 }}
        />
        <Button
          sx={{ marginTop: 5 }}
          onClick={() => {
            formik.handleSubmit(); 
            onClose(); 
          }}
          fullWidth
          variant='contained'
          color='primary'
        >
          Send Reset Email
        </Button>
      </Box>
    </Modal>
  )
}

export default ForgotPassword
