import React, { useCallback, useEffect, useState } from 'react';
import { getTimeLocaleString } from '../helpers/getTimeDate';
import { checkMillisecondsLeft } from '../hooks/useLimitTime';

export const ClockScreen = ({ showSeconds, limitTime, isScreenLocked }) => {

  const [ currentTime, setCurrentTime ] = useState( getTimeLocaleString().split(':') );
  const [ theme, setTheme ] = useState('');
  const [ hours, minutes, seconds ] = currentTime;

  setTimeout( () => {
    setCurrentTime( getTimeLocaleString().split(':') );
  }, 1000);
  
  const checkTimeLeft = useCallback( () => {
      if ( !limitTime ) {
        return setTheme('');
      }
      setTheme( checkMillisecondsLeft(limitTime) );
    }, [limitTime]
  );
    
  useEffect(() => {
    checkTimeLeft();
  }, [seconds, checkTimeLeft]);


  return (
    <div className={ showSeconds ? `clock-screen ${ theme }` : `clock-screen no-seconds ${ theme }` }>
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
