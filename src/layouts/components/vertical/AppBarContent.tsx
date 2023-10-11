// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

// ** Icons
import EmailOutline from 'mdi-material-ui/EmailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props
  const router = useRouter();
  const linkPath = router.asPath.split("/");
  linkPath.splice(-1);

  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });

  let Capital_letter: any = pathArray
    ?.at(-1)
    ?.breadcrumb?.charAt(0)
    ?.toUpperCase();
  let Capital_string = Capital_letter + pathArray?.at(-1)?.breadcrumb?.slice(1);

  // const isDashboardPage = router.pathname === '/pages/';     

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h5" color="text.secondary" style={{marginLeft:'30px'}} className="ml-[30px]">
        {Capital_string}
      </Typography>
      </Box>
      {/* {isDashboardPage && ( */}
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <EmailOutline sx={{mr: 4, cursor: 'pointer'}} />
        <NotificationsNoneIcon sx={{mr: 2, cursor: 'pointer'}} /> */}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <UserDropdown />
      </Box>
       {/* )} */}
    </Box>
  )
}

export default AppBarContent
