import { getMilliseconds } from "../helpers/getTimeDate";

export const checkTime = ( currentTime, limitTime ) => {
  const millisecondsCurrentTime = getMilliseconds( currentTime );
  let millisecondsLimitTime = getMilliseconds( limitTime );
  let nextDay = millisecondsLimitTime < millisecondsCurrentTime;
  if ( nextDay ) millisecondsLimitTime = getMilliseconds( limitTime, nextDay );

  const response = millisecondsCurrentTime < millisecondsLimitTime ? '' : 'limit';

  return response
}