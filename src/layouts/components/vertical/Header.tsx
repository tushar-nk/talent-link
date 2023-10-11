import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import Image from 'next/image'
import IconService from 'src/@core/utils/Icons'

export default function CommonHeader() {
  const router = useRouter()
  const linkPath = router.asPath.split('/')
  linkPath.splice(-1)

  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
  })

  let Capital_letter: any = pathArray?.at(-1)?.breadcrumb?.charAt(0)?.toUpperCase()
  let Capital_string = Capital_letter + pathArray?.at(-1)?.breadcrumb?.slice(1)

  return (
    <div className='main-header flex justify-between items-center common-header'>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <span onClick={() => router.back()} className='arrow-icon'>
          <Image src={IconService.BackNavigationArrow} alt='back-btn' height={22} width={22} />
        </span>
        <Typography variant='h6' color='text.primary' className='page-title'>
          {Capital_string}
        </Typography>
      </div>
    </div>
  )
}
