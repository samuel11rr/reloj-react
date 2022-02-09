import React, { useState } from 'react';
import { useLimitTime } from '../hooks/useLimitTime';

export const ClockScreen = ({ showSeconds }) => {

  const getCurrentTime = () => {
    const date = new Date();

    const hour = date.toLocaleString('es-MX', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });

    return hour.split(':');
  }

  const [ currentTime, setCurrentTime ] = useState( getCurrentTime() );
  const [ hours, minutes, seconds ] = currentTime;

  setTimeout( () => {
    setCurrentTime( getCurrentTime );
  }, 1000);
  
  // TODO: this value should be defined by the user
  const limitTime = '22:02:00';
  
  const theme = useLimitTime( currentTime, limitTime );


  return (
    <div className={ showSeconds ? `clock-screen ${ theme }` : 'clock-screen no-seconds' }>

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
