// what is memoization?

// -> Momoization is the optimization technique that can reduce the time consuming 
// calculation by saving previous input in cache and return the result from it



let sum = 0;
function calc(n) {
  for (i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

const memoize = (func) => {
  let cache = {};             //acts like ket-value '5'-15
  return function (...args) {
    let n = args[0];
    if (n in cache) {         //first check for 1st element in cache if dound return it
      console.log("cache");
      return cache[n];
    } else {
     console.log("calculating for the First time")
      let result = func(n);
      cache[n] = result
      return result;
    }
  };
};

console.time();
const efficiant = memoize(calc)
console.log(efficiant(5))
console.timeEnd();

console.time();
console.log(efficiant(5))
console.timeEnd();

