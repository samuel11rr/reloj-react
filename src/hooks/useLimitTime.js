import { getTimeDate } from "../helpers/getTimeDate";


export const checkMillisecondsLeft = ({ warning, danger, limit, over }) => {
  const current = getTimeDate().getTime();

  const status = current < warning ? 'in-time' 
    : current < danger ? 'warning'
    : current < limit ? 'danger' 
    : current < over ? 'limit' 
    : 'in-time';

  console.log( status );

  return status;
}