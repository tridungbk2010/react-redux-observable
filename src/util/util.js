/**
 * Created by Chris Ho on 10/24/2016.
 */
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
