import React, { useState } from 'react';
import { ClockScreen } from './components/ClockScreen';
import { Settings } from './components/Settings';
import { Toolbar } from './components/Toolbar';


export const ClockApp = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);


  return (
    <>
      <Toolbar 
        isExpanded={ isExpanded }
        handleExpanded={ setIsExpanded }
        isSettingsOpen={ isSettingsOpen }
        handleSettings={ setIsSettingsOpen }
      />

      <ClockScreen />

      {
        isSettingsOpen &&
        <Settings
          isSettingsOpen={ isSettingsOpen }
          handleSettings={ setIsSettingsOpen }
        />
      }
    </>
  )
}