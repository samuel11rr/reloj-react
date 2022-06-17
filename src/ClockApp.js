import React, { useCallback, useEffect, useState } from 'react';
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
  const [isScreenLocked, setIsScreenLocked] = useState(false);

  useEffect(() => {
    const isSaved = localStorage.getItem('settings') ? true : false;
    setIsSavedSettings(isSaved);

    const settings = previousSettings();
    setShowSeconds( settings.showSeconds );
    setLimitTime( settings.limit );

  }, [isSavedSettings]);

  const screenLockOn = useCallback( async () => {
    try {
      const screenStatus = await navigator.wakeLock.request('screen');
      setIsScreenLocked( !screenStatus.released );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const screenLockOff = useCallback( async () => {
    try {
      const screenLock = await navigator.wakeLock.request('screen');
      await screenLock.release();
      setIsScreenLocked( false );
    } catch (error) {
      setIsScreenLocked( false );
    }
  }, []);

  const visibilityChange = useCallback( () => {
    return document.visibilityState === 'visible' ? screenLockOn() : screenLockOff();
  }, [screenLockOn, screenLockOff]);

  useEffect(() => {
    if ( !navigator.wakeLock ) return;

    screenLockOn();
    document.addEventListener('visibilitychange', visibilityChange);
    window.addEventListener('focus', screenLockOn);
    window.addEventListener('blur', screenLockOff);
  }, [screenLockOn, screenLockOff, visibilityChange]);


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
        isScreenLocked={ isScreenLocked }
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