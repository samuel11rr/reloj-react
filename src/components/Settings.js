import React from 'react';
import { determinateLimitTime } from '../helpers/getTimeDate';

export const Settings = ({
  isSettingsOpen, 
  handleSettings,
  showSeconds,
  handleShowSeconds,
  limitTime,
  setLimitTime,
}) => {

  const limitHour = '12:30:00';
  const limitMilliseconds = determinateLimitTime( limitHour );
  
  const handleLimitTime = () => {
    setLimitTime( limitMilliseconds );

    console.log(limitTime);
  }



  return (
    <aside className='settings-panel'>
      <div className='settings-header'>
        <span> Settings panel </span>
        <button onClick={ () => handleSettings( !isSettingsOpen ) } >
          Close
        </button>
      </div>

      <div>
        <input type="checkbox" id="show-seconds" checked={ showSeconds } onChange={ () => handleShowSeconds( !showSeconds ) } />
        <label htmlFor="show-seconds"> Show seconds </label>
      </div>

      <div>
        <button onClick={ handleLimitTime }>
          set limit hour 12:30:00
        </button>
      </div>
    </aside>
  );
};
