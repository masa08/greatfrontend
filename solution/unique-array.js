export default function uniqueArray(array) {
  const result = [];
  const seen = new Set();

  array.forEach((item) => {
    if (!seen.has(item)) {
      result.push(item);
      seen.add(item);
    }
  });

  return result;
}

const arr = [1, 2, 3, 3];
const result = uniqueArray(arr);
console.log(result);
