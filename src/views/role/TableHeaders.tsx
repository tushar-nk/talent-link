import {
  Checkbox,
  FormControlLabel,
  Card,
  useTheme,
  Typography,
  SvgIcon,
  Button,
} from "@mui/material";

import React from "react";
import TableHeaderSearch from "src/@core/table/TableHeaderSearch";
import { useRouter } from "next/router";


interface TYPE {
  isAddButton?: boolean;
  data?: any;
  serachFunction?:any;
}

export default function TableHeaderRole({ isAddButton,data,serachFunction }: TYPE) {
  const theme = useTheme();
  const router = useRouter();


  const handleButtonClick = () => {
      // Navigate to the desired page when the button is clicked
      router.push('/pages/roles/role_details');
    };

  return (
    <>
      <Card
        variant="outlined"
        className="common-table-header"
        style={{
          // background: theme.palette.primary.light,
          borderRadius: '16px',
          background: theme.palette.primary.light,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '40rem',
          padding: '5px',
          border:'none',
        }}
 
      >
              <TableHeaderSearch serachFunction={(e)=>serachFunction(e)} />
              <Button onClick={handleButtonClick} variant="contained" >ADD</Button>
 
      </Card>
    </>
  );
}
