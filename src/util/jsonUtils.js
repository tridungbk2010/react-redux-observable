/**
 * Created by Chris Ho on 7/25/2016.
 */

export function jsonToObject(data) {
  const newObj = Object.assign({}, data);
  newObj.content = newObj.content && Object.assign({}, JSON.parse(data.content));
  return newObj;
}
