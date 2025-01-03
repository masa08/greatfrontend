export default function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) return;

    shouldThrottle = true;
    setTimeout(() => {
      shouldThrottle = false;
    }, wait);

    const context = this;
    func.apply(context, args);
  };
}

let i = 0;
const increment = () => i++;
const throttledIncrement = throttle(increment, 100);
throttledIncrement(); // i = 1
