import {
  Checkbox,
  FormControlLabel,
  Card,
  useTheme,
  Typography,
  SvgIcon,
  Button,
} from "@mui/material";

import React, { useContext } from "react";


import TableHeaderSearch from "src/@core/table/TableHeaderSearch";
import { useRouter } from "next/router";

//   import CommonDateRangePicker from "@/components/Common/DateRange/DateRangePicker";



interface TYPE {
  isAddButton?: boolean;
  data?: any;
  serachFunction?:any;
}

export default function TableHeaderCategories({ isAddButton,data,serachFunction }: TYPE) {
  // const [isTrue, setIsTrue] = React.useState<boolean>(false);
  const theme = useTheme();
  const router = useRouter();


  const handleButtonClick = () => {
      // Navigate to the desired page when the button is clicked
      router.push('/pages/categories/categories_details');
    };

  return (
    <>
      <Card
        variant="outlined"
        className="common-table-header"
        style={{
          // background: theme.palette.primary.light,
          borderRadius: '16px',
          background: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '40rem',
          padding: '5px'
        }}
 
      >
              <TableHeaderSearch serachFunction={(e)=>serachFunction(e)} />
              <Button onClick={handleButtonClick} variant="contained" href="#contained-buttons">ADD</Button>
 
      </Card>
    </>
  );
}
