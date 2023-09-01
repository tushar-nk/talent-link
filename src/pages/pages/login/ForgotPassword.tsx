import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

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
    // Here you can add your logic to handle the password recovery process
    // For example, you might want to send a reset password email to the provided email address
    // After the process is done, you can close the modal using the onClose callback
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Full viewport height
          overflow: 'auto', // Enable scrolling if the content overflows
        }}
      >
        <Box
          sx={{
            padding: 3,
            width: '80%', // Adjust the width as needed
            backgroundColor: 'white',
            borderRadius: '8px', // Optional: Add border radius
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add box shadow
            maxWidth: '400px', // Limit the maximum width
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Forgot Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              sx={{ marginBottom: 2 }}
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
              Send Reset Email
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ForgotPassword;
