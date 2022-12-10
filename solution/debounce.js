export default function debounce(func, wait = 0) {
  let timeoutId = null;

  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(context, args);
    }, wait);
  };
}

let i = 0;
const increment = () => i++;
const debouncedIncrement = debounce(increment, 100);
debouncedIncrement();
