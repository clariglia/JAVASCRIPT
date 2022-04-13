function memoize(fn) {
  let cache = {}
  const funzioneCorrente = fn;
  return function (parametro){
    if(parametro in cache){
      return `Fetching from cache for: ${parametro} -> ${cache[parametro]}`
    }
    else{
      cache[parametro] = funzioneCorrente(parametro)
      return `Calculating result for: ${parametro} -> ${cache[parametro]}`
    }
  }
}

function calcoloFattoriale(x) {
  if (x === 0) {
    return 1;
  }

   return x * calcoloFattoriale(x - 1);
}



const factorial = memoize(calcoloFattoriale);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(6));

