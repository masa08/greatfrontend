/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  if (this.length == 0) return [];

  const newArr = [];
  // thisが配列を指す
  this.forEach((e) => {
    const newVal = e ** 2;
    newArr.push(newVal);
  });

  return newArr;
};

console.log([1, 2, 3, 4].square());
