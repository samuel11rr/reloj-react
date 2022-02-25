import React, { useEffect, useState } from 'react';
import { ClockScreen } from './components/ClockScreen';
import { Settings } from './components/Settings';
import { Toolbar } from './components/Toolbar';
import { previousSettings } from './helpers/saveSettings';


export const ClockApp = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const [limitTime, setLimitTime] = useState(null);
  const [isSavedSettings, setIsSavedSettings] = useState(false);

  useEffect(() => {
    const isSaved = localStorage.getItem('settings') ? true : false;
    setIsSavedSettings(isSaved);

    const settings = previousSettings();
    setShowSeconds( settings.showSeconds );
    setLimitTime( settings.limit );

  }, [isSavedSettings]);


  return (
    <>
      <Toolbar 
        isExpanded={ isExpanded }
        handleExpanded={ setIsExpanded }
        isSettingsOpen={ isSettingsOpen }
        handleSettings={ setIsSettingsOpen }
      />

      <ClockScreen
        showSeconds={ showSeconds }
        limitTime={ limitTime }
      />

      {
        isSettingsOpen &&
        <Settings
          isSettingsOpen={ isSettingsOpen }
          handleSettings={ setIsSettingsOpen }
          showSeconds={ showSeconds }
          handleShowSeconds={ setShowSeconds }
          limitTime={ limitTime }
          setLimitTime={ setLimitTime }
        />
      }
    </>
  )
}