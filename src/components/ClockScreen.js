import React, { useState } from 'react';

export const ClockScreen = ({ showSeconds }) => {

  const currentTime = () => {
    const date = new Date();

    const hour = date.toLocaleString('es-MX', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });
    
    return hour.split(':');
  }

  const [ time, setTime ] = useState( currentTime() );
  const [ hours, minutes, seconds ] = time;

  setTimeout( () => setTime( currentTime ), 1000 );
  
  return (
    <div className={ showSeconds ? 'clock-screen' : 'clock-screen no-seconds' }>

      <div className={ showSeconds ? 'clock-number' : 'clock-number-big' }>
        { hours }
      </div>

      <span className='clock-separator'>
        { (seconds % 2 === 0 && !showSeconds) ? ':' : '' }
        { showSeconds && ':' }
      </span>
      
      <div className={ showSeconds ? 'clock-number' : 'clock-number-big' }>
        { minutes }
      </div>

      { showSeconds && <span className='clock-separator'> : </span> }
      { showSeconds && <div className='clock-number'> { seconds } </div> }
    </div>
  )
};
