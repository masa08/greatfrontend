/**
 * @callback func
 * @return {Function}
 */
export default function once(func) {
  let isExecuted = false;
  let result;

  return function (...args) {
    if (isExecuted) return result;

    result = func.apply(this, args);
    isExecuted = true;
    return result;
  };
}
