import React, { useEffect, useState } from 'react';
import { getTimeLocaleString } from '../helpers/getTimeDate';
import { checkMillisecondsLeft } from '../hooks/useLimitTime';

export const ClockScreen = ({ showSeconds, limitTime }) => {

  const [ currentTime, setCurrentTime ] = useState( getTimeLocaleString() );
  const [ hours, minutes, seconds ] = currentTime;

  setTimeout( () => {
    setCurrentTime( getTimeLocaleString() );
  }, 1000);
  
  const checkTimeLeft = () => {
    if ( !limitTime ) return;

    checkMillisecondsLeft( limitTime );
  }

  useEffect(() => {
    checkTimeLeft();
  }, [seconds]);
  

  const theme = '';


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
