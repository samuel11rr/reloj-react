import React, { useState } from 'react';

export const ClockScreen = () => {

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
    <div className='clock-screen'>
      <div className='clock-number'> { hours } </div>
      <span className='clock-separator'> : </span>
      <div className='clock-number'> { minutes } </div>
      <span className='clock-separator'> : </span>
      <div className='clock-number'> { seconds } </div>
    </div>
  )
};
