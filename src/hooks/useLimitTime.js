import { getTimeDate } from "../helpers/getTimeDate";


export const checkMillisecondsLeft = ( millisecondsLimit ) => {
  const millisecondsCurrent = getTimeDate().getTime();

  const status = millisecondsCurrent < millisecondsLimit ? 'in time' : 'overtime';

  console.log( status );
}