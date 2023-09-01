import {
  Checkbox,
  FormControlLabel,
  Card,
  useTheme,
  Typography,
  SvgIcon,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";

import React, { useContext } from "react";
import Image from "next/image";
import IconService from 'src/@core/utils/Icons';

import TableHeaderSearch from "src/@core/table/TableHeaderSearch";

//   import CommonDateRangePicker from "@/components/Common/DateRange/DateRangePicker";



interface TYPE {
  isAddButton?: boolean;
  data?: any;
  serachFunction?:any;
}

export default function TableHeaderCompany({ isAddButton,data,serachFunction }: TYPE) {
  // const [isTrue, setIsTrue] = React.useState<boolean>(false);
  const theme = useTheme();
  const router = useRouter();

  const handleButtonClick = () => {
    // Navigate to the desired page when the button is clicked
    router.push('/pages/company/formlayoutsseparator');
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
          gap: '45rem'
        }}
 
      >
              <TableHeaderSearch serachFunction={(e)=>serachFunction(e)} />
              <Button  onClick={handleButtonClick} variant="contained" href="#contained-buttons">ADD</Button>
 
      </Card>
    </>
  );
}