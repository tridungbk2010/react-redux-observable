/**
 * Created by Chris Ho on 10/28/2016.
 */

export function dateTimeFormat(dateTime) {
  let date = new Date();
  const options = {
    // day: "numeric",
    month: "short"
    // weekday: "long",
    // year: "numeric"
    // hour: "2-digit",
    // minute: "2-digit"
  };
  const dateTimeArr = dateTime && dateTime.split("-");
  return dateTimeArr[0] + "-" + date.toLocaleDateString('en-US', options) + "-" + dateTimeArr[2];
}

export const dateFormat = (date) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};
