//write a function that takes an array then squares the elements of said array then adds them together
function squareSum(numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
      sum += Math.pow(numbers[i],2);
    }
    return sum;
  }