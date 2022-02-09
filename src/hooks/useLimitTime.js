export const useLimitTime = (currentTime, limitTime) => {
  const [ currentHours, currentMinutes ] = currentTime.map( number => Number(number) );
  const [ limitHours, limitMinutes ] = limitTime.split(':').map( number => Number(number) );
  
  if (currentHours >= limitHours && currentMinutes >= limitMinutes) {
    return 'limit';
  }
  return '';
}