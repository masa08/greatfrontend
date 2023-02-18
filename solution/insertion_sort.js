/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      // currentValより大きい値をsortedListの後方に移動
      arr[j + 1] = arr[j];
      j--;
    }

    // arr[j] < currrentValの状態なので、arr[j+1]にcurrentValを挿入
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([3, 4, 1, 6]));
