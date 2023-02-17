/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
  return arr;
}

selectionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
// selectionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
