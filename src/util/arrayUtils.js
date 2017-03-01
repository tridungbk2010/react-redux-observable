/**
 * Created by chris on 1/13/17.
 */
export const removeDuplicateElement = (arrList) => arrList.filter(
  (item, index, inputArray) => inputArray.indexOf(item) === index
);
