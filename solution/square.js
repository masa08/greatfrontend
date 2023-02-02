/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  if (this.length == 0) return [];

  const newArr = [];
  this.forEach((e) => {
    const newVal = e ** 2;
    newArr.push(newVal);
  });

  return newArr;
};
