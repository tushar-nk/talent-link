import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const customMenuItemStyle = {
  color: 'var(--primary-font-1, #20548b)',
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  lineHeight: '20px'
}

const CommonActions = ({ onMenuItemClick, menuLabels }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (key, menuItem) => {
    handleClose()
    if (onMenuItemClick) {
      onMenuItemClick(key, menuItem)
    }
  }

  return (
    <>
      <div>
        <IconButton
          aria-label='more'
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu id='demo-customized-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
          {menuLabels.map(label => (
            <MenuItem
              key={label}
              onClick={() => handleMenuItemClick(label, label)}
              className='menu-item'
              style={customMenuItemStyle}
            >
              {label === 'View' && <RemoveRedEyeIcon />}
              {label === 'Edit' && <EditIcon />}
              {label === 'Soft Delete' && <ClearIcon />}
              {label === 'Hard Delete' && <DeleteIcon />}
              {label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  )
}

export default CommonActions
