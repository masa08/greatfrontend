/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target Target integer to search within the array
 * @return {Array<number>}
 */
export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 10, 11, 20], 1));
console.log(binarySearch([1, 2, 3, 10, 11, 20], 20));
