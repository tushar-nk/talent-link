// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import BusinessIcon from '@mui/icons-material/Business'
import PortraitIcon from '@mui/icons-material/Portrait'
import DescriptionIcon from '@mui/icons-material/Description'
import LaunchIcon from '@mui/icons-material/Launch'
import CoPresentIcon from '@mui/icons-material/CoPresent'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/pages/dashboard'
    },
    {
      sectionTitle: 'System'
    },
    {
      title: 'Users',
      icon: PeopleOutlineIcon,
      path: '/pages/users'
    },
    {
      title: 'Role',
      icon: CoPresentIcon,
      path: '/pages/roles'
    },

    {
      sectionTitle: 'Hiring'
    },
    {
      title: 'Company',
      icon: BusinessIcon,
      path: '/pages/company'
    },
    {
      title: 'Profiles',
      icon: PortraitIcon,
      path: '/pages/profiles'
    },
    {
      title: 'Resumes',
      icon: DescriptionIcon,
      path: '/pages/resumes'
    },
    {
      title: 'Hire Request',
      icon: LaunchIcon,
      path: '/pages/hire-request'
    },

    {
      sectionTitle: 'Masters'
    },
    {
      title: 'Categories',
      icon: FormatLetterCase,
      path: '/pages/categories'
    },
    {
      title: 'Sub Category',
      icon: GoogleCirclesExtended,
      path: '/pages/sub-category'
    },
    {
      title: 'Skills',
      icon: CreditCardOutline,
      path: '/pages/skills'
    },
    {
      sectionTitle: 'Reports'
    },
    {
      title: 'Support Subject',
      icon: CubeOutline,
      path: '/pages/support-subject'
    },
    {
      title: 'Support Request',
      icon: CubeOutline,
      path: '/pages/support-request'
    }
  ]
}

export default navigation
