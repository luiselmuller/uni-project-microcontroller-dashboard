import React, { lazy } from 'react'

// Icons import
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterIcon from '@mui/icons-material/Water';
import WifiIcon from '@mui/icons-material/Wifi';
import GrassIcon from '@mui/icons-material/Grass'; // temporary
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone'; // temporary
import AirIcon from '@mui/icons-material/Air';

const SimpleCard = lazy(() => import('../components/SimpleCard'));

// Simplified view of the data
const Overview = () => {
  return (
    <div className="mt-16">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:px-4">
        {/* TODO: Make the cards generate by themselves according to the sensor data
            fields received from firebase. Also give the icons an id somehow so they correspond to 
            a certain data reading. */}
        {/* ESP Status */}
        <SimpleCard 
          title="Device Status"
          icon={<WifiIcon fontSize="large"/>}
          data={<p className="flex items-center gap-2">
            <span className={`bg-green-400 h-2 w-2 rounded-full relative`}></span>
            Online 
          </p>}
        />
        {/* Temperature */}
        <SimpleCard 
          title="Temperature"
          icon={<ThermostatIcon fontSize="large"/>}
          data={<p>27 <span>&#176;C</span></p>}
        />
        {/* Humidity */}
        <SimpleCard 
          title="Humidity"
          icon={<OpacityTwoToneIcon fontSize="large"/>}
          data={<p>76 <span>%</span></p>}
        />
        {/* Soil Moisture */}
        <SimpleCard 
          title="Soil Moisture"
          icon={<GrassIcon fontSize="large"/>}
          data={<p>45 <span>%</span></p>}
        />
        {/* Air Quality */}
        <SimpleCard 
          title="Air Quality"
          icon={<AirIcon fontSize="large"/>}
          data={<p>54 <span>%</span></p>}
        />
        {/* River Water Level */}
        <SimpleCard 
          title="River Level"
          data={<p>400 <span>L/M</span></p>}
          icon={<WaterIcon fontSize="large"/>}
        />
      </div>
      {/* Widgets */}
      <div className="flex flex-wrap justify-center gap-4 px-4 bg-white">

      </div>
    </div>
  )
}

export default Overview