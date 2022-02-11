const getTimeDate = () => {
  return new Date();
}

export const getTimeLocaleString = () => {
  const hour = getTimeDate().toLocaleString('es-MX', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  return hour.split(':');
}

export const getMilliseconds = ( hour, nextDay = false ) => {
  const date = getTimeDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = nextDay ? date.getDate() + 1 : date.getDate();

  const fullDate = `${ year }-${ month < 10 ? `0${month}` : month }-${ day < 10 ? `0${day}` : day } ${ typeof hour === 'string' ? hour : hour.join(':') }`;
 
  const milliseconds = new Date( fullDate ).getTime();
  
  return milliseconds;
}

export const determinateLimitTime = ( limitHour ) => {
  let limitMilliseconds = getMilliseconds( limitHour );
  const currentMilliseconds = getTimeDate().getTime();

  if (limitMilliseconds < currentMilliseconds) {
    limitMilliseconds = getMilliseconds( limitHour, true )
  }

  return limitMilliseconds;
}