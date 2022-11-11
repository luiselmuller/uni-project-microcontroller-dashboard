import React from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

const Sidebar = () => {

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2">
      
        {/* Items */}
        <div className="flex flex-col gap-2">
          <p className="text-xl p-2 mb-5">ESP32 Dashboard</p>

          {/* Temporary */}
          <NavLink to="/" 
          className="flex items-center gap-1 hover:bg-main-dark-bg p-2 rounded-lg">
            <CalendarViewMonthIcon />
            <p>Overview</p>
            
          </NavLink>

          {/* Temporary */}
          <NavLink to="/device-statistics"
          className="flex items-center gap-1 hover:bg-main-dark-bg p-2 rounded-lg">
            <MonitorHeartIcon />
            <p>Device Statistics</p>
            
          </NavLink>
          
            
        </div>
    </div>
  )
}

export default Sidebar