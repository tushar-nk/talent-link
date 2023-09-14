// // ** MUI Imports
// import React from 'react'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'

// // ** Icons Imports
// import DotsVertical from 'mdi-material-ui/DotsVertical'

// // ** Types Imports
// import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

// const CardStatsVertical = (props: CardStatsVerticalProps) => {
//   // ** Props
//   const { title, color, icon, stats } = props

//   return (
//     <Card>
//       <CardContent>
//         <Box sx={{ display: 'flex', marginBottom: 5.5, alignItems: 'flex-start', justifyContent: 'space-between' }}>
//           <Avatar sx={{ boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `${color}.main` }}>
//             {icon}
//           </Avatar>
//           {/* <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
//             <DotsVertical />
//           </IconButton> */}
//         </Box>
//         <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{title}</Typography>
//         <Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
//           <Typography variant='h6' sx={{ mr: 2 }}>
//             {stats}
//           </Typography>
//           {/* <Typography
//             component='sup'
//             variant='caption'
//             sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
//           >
//             {trendNumber}
//           </Typography> */}
//         </Box>
//         {/* <Typography variant='caption'>{subtitle}</Typography> */}
//       </CardContent>
//     </Card>
//   )
// }

// export default CardStatsVertical

// CardStatsVertical.defaultProps = {
//   color: 'primary'
//   // trend: 'positive'
// }

import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'



const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { title, stats, className } = props

  return (
    <Card className={className + ' ' + 'categories-cards'}>
      <CardContent>
        <Typography sx={{ fontWeight: 600, fontSize: '17px', color: '#000000' }}>{title}</Typography>
        <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Typography variant='h6' className='count' sx={{ mr: 2, textAlign: 'center', color: '#000000' }}>
            {stats}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary'
}
