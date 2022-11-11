import React, { FC } from 'react'

// Icon imports
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Tooltip from '@mui/material/Tooltip';
import { Badge } from '@mui/material';

type navProps = {
  customFuncOne: any,
  disabledSide: any,
  mobileSide: any,
  customFuncTwo: any
}

const Navbar:FC<navProps> =({customFuncOne={}, customFuncTwo={}, disabledSide={}, mobileSide={}}) => {
  let notificationNumber = 0;
  let theme = 0;
  
  return (
    <div className={`flex justify-evenly p-3 relative mx-3`}>
        <button type="button" onClick={!disabledSide ? customFuncOne : customFuncTwo}
          className={`hover:scale-110 transition-all duration-150 ease-in-out`}>
          <MenuIcon fontSize="large" />
        </button>

        <div className="w-full"></div>

        <div className="flex gap-4">
          <Tooltip title="Theme">
            <button type="button" onClick={() => {}}
              className={`hover:scale-110 transition-all duration-150 ease-in-out`}>
              {theme ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
            </button>
          </Tooltip>

          <Tooltip title="Notifications"
            className="hover:scale-110 transition-all duration-150 ease-in-out">
            <button type="button" onClick={() => {}}>
              <Badge badgeContent={notificationNumber} color="info" overlap="circular">
                {notificationNumber > 0 ? <NotificationImportantIcon fontSize="large" /> : <NotificationsNoneIcon fontSize="large" />}
              
              </Badge>
            </button>
          </Tooltip>
          
          {/* Settings */}
          <Tooltip title="Settings"
            className="hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180">
            <button type="button" onClick={() => {}}>
              <SettingsIcon fontSize="large" />
            </button>
          </Tooltip>

          {/* Profile */}
          <Tooltip title="Profile"
            className="hover:scale-110 transition-all duration-150 ease-in-out">
            <button type="button" onClick={() => {}}>
              <AccountCircleIcon fontSize="large" />
            </button>
          </Tooltip>
        </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar