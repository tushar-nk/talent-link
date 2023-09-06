// ** MUI Imports

import CardMedia from '@mui/material/CardMedia'


import {
  FormControl,
  Grid,
  Select,
  FormLabel,
  MenuItem,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography
} from '@mui/material'

const CardImgTop = () => {
  return (
      
          <Card>
            <CardContent>
              <FormLabel>Serch Keyword</FormLabel>
              <TextField fullWidth label='Search Keyword' variant='outlined' margin='normal' />
              <FormLabel>Location</FormLabel>
              <TextField fullWidth label='Location' variant='outlined' margin='normal' />
            </CardContent>
          </Card>
       
      
  )
}

export default CardImgTop
