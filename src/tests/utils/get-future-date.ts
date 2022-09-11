import {setYear, parseISO} from 'date-fns';


/**
 * I am increase date received with one year  * eg. receives "2022-08-10" and returns "2023-08-10"
 *
 *:params: date: date to be incremented
 *
 * returns: increased date
 */
export function getFutureDate(date: string): Date 
{
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}