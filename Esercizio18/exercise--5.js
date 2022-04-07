 function memoize(fn){
    let cache = {}
    const currentFunction = fn;

    return function (param){
        if (!(param in cache)){
            cache[param] = currentFunction(param);
            return `Calculating result for: ${param} -> ${cache[param]}`;
        }
        else return `Fetching from cache for: ${param} > ${cache[param]}`;
    }
}


function factorial(x) {
    let result = 1;
    for(let i=x; i>=1; i--){
        result *= i;
    }
      return result;
  }


  factorial = memoize(factorial); 
  console.log(factorial(10));
  console.log(factorial(5));
  console.log(factorial(6));