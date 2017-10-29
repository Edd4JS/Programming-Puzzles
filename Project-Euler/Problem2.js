const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    }
    else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

const recursiveFactorial = memoize (
  (n) => {
    if (n < 2) {
      return n;
    } else {
      return n * recursiveFactorial(n - 1);
    }
  }
);
