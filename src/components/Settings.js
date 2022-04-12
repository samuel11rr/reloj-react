import React, { useState } from 'react';
import { determinateLimitTime, getInitialLimit, getTimeLocaleString } from '../helpers/getTimeDate';
import { removeLimit, saveLimit, saveSecondsStatus } from '../helpers/saveSettings';
import close from '../assets/close.svg';
import deleteIcon from '../assets/delete.svg';
import heart from '../assets/heart.png';


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
    removeLimit();
  }

  const handleFormHour = (event) => {
    if ( !event.target.value ) return;
    const selectedHour = `${ event.target.value }:00`;
    setFormHour( selectedHour );
  }
  
  const handleLimitTime = (event) => {
    event.preventDefault();
    setLimitTime( intervalsMilliseconds );
    saveLimit( intervalsMilliseconds );
  }

  const toggleSeconds = () => {
    handleShowSeconds( !showSeconds );
    saveSecondsStatus( !showSeconds );
  }


  return (
    <aside className='settings-panel'>
      <div className='settings-header'>
        <h4> Ajustes </h4>
        <button onClick={ () => handleSettings( !isSettingsOpen ) } className="button-img white opacity-full shadow">
          <img src={ close } alt="Cerrar ajustes" title="Cerrar ajustes" />
        </button>
      </div>

      {
        limitTime &&
        <div className='settings-info'>
          <span> Hora Limite: { timePrevSelected().substring(0,5) } </span>

          <button onClick={ clearLimitHour } className="button-img button-sm danger opacity-full shadow">
            <img src={ deleteIcon } alt="Quitar límite" title="Quitar límite" className='icon-white'/>
          </button>
        </div>
      }

      <form onSubmit={ handleLimitTime }>
        <label htmlFor="limit-time">Selecciona la hora límite:</label>
        <input type="time" id="limit-time" name="limit-time" value={ formHour } onChange={ handleFormHour } required />

        <button type="submit" disabled={ !formHour }>
          Establecer límite: { formHour.substring(0, 5) }
        </button>
      </form>

      <hr/>

      <div className='settings-option'>
        <input type="checkbox" id="show-seconds" checked={ showSeconds } onChange={ toggleSeconds } />
        <label htmlFor="show-seconds"> Ver segundos </label>
      </div>

      <small className='settings-footer'>
        Made with <img src={heart} alt="heart"/> by <a href='https://www.samuel-ramirez.com/' target='_blank' rel="noreferrer">Samuel Ramirez</a>
      </small>
    </aside>
  );
};
