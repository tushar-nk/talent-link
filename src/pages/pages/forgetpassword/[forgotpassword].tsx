import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ForgotPasswordProps {
  open: boolean;
  onClose: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

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
          p: 6,
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 3,
            right: 3,
            p: 3
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Forgot Password
        </Typography>
        <Typography  sx={{ marginBottom: 2, fontSize: 18 }}>
          Enter your registered email below to receive password reset instructions.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginTop: 4 }}
          />
          <Button sx={{ marginTop: 5 }} fullWidth variant="contained" color="primary" type="submit">
            Send Reset Email
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ForgotPassword;
