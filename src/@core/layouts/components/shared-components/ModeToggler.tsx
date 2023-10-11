// ...import statements

// ** MUI Imports
import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon' // Import SvgIcon

// ** Icons Imports
import WeatherNightIcon from 'mdi-material-ui/WeatherNight'
import WeatherSunnyIcon from 'mdi-material-ui/WeatherSunny'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

// Wrap the WeatherNight and WeatherSunny icons with SvgIcon
const WeatherNight = (props: any) => (
  <SvgIcon {...props}>
    <WeatherNightIcon />
  </SvgIcon>
);

const WeatherSunny = (props: any) => (
  <SvgIcon {...props}>
    <WeatherSunnyIcon />
  </SvgIcon>
);

const ModeToggler = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  )
}

export default ModeToggler
