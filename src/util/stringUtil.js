/**
 * Created by Chris Ho on 12/14/2016.
 */
export const capitalizeWords = (str) => str.replace(/\w\S*/g,
  txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
