import React from 'react';
import { ClockScreen } from './components/ClockScreen';
import { Settings } from './components/Settings';
import { Toolbar } from './components/Toolbar';


export const ClockApp = () => {
  return (
    <>
      <Toolbar />
      <ClockScreen />
      <Settings />
    </>
  )
}