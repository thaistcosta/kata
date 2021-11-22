function countOddPentaFib(n) {  
let fib = [1,1]
    function fiboo(n){
        if((fib.length < n) && (n>0)){
        let sum = fib[(fib.length-1)] + fib[(fib.length-2)]
        fib.push(sum)
        --n
        return fiboo(n)
        }
    return fib
    }
    
  const final = fiboo(n)
  console.log(final)
  return final.filter(n => ((n%2) !== 0)).length - 1
  }