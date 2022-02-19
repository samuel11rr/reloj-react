import React from 'react';
import { determinateLimitTime, getInitialLimit } from '../helpers/getTimeDate';

export const Settings = ({
  isSettingsOpen, 
  handleSettings,
  showSeconds,
  handleShowSeconds,
  limitTime,
  setLimitTime,
}) => {

  const limitHour = getInitialLimit();
  const intervalsMilliseconds = determinateLimitTime( limitHour );

  
  const handleLimitTime = () => {
    // TODO: remove limit
    setLimitTime( intervalsMilliseconds );

    console.log(limitHour);
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
          set limit hour { limitHour }
        </button>
      </div>
    </aside>
  );
};
