import React, { useState } from 'react';
import { determinateLimitTime, getInitialLimit, getTimeLocaleString } from '../helpers/getTimeDate';

export const Settings = ({
  isSettingsOpen, 
  handleSettings,
  showSeconds,
  handleShowSeconds,
  limitTime,
  setLimitTime,
}) => {

  const [formHour, setFormHour] = useState(getInitialLimit());
  const intervalsMilliseconds = determinateLimitTime( formHour );
  

  const timePrevSelected = () => {
    if ( !limitTime ) return false;

    return getTimeLocaleString( limitTime.limit );
  }

  const clearLimitHour = () => {
    setLimitTime(null);
    setFormHour( getInitialLimit() );
  }

  const handleFormHour = (event) => {
    if ( !event.target.value ) return;
    const selectedHour = `${ event.target.value }:00`;
    setFormHour( selectedHour );
  }
  
  const handleLimitTime = (event) => {
    event.preventDefault();
    setLimitTime( intervalsMilliseconds );
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

      {
        limitTime &&
        <div>
          Hora Limite: { timePrevSelected() }

          <button onClick={ clearLimitHour }>
            Restablecer
          </button>
        </div>
      }

      <form onSubmit={ handleLimitTime }>
        <label htmlFor="limit-time">Selecciona la hora límite:</label>
        <input type="time" id="limit-time" name="limit-time" value={ formHour } onChange={ handleFormHour } required />

        <button type="submit" disabled={ !formHour }>
          set limit hour { formHour.substring(0, 5) }
        </button>
      </form>
    </aside>
  );
};
