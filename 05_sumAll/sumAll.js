const sumAll = function(lowInt, highInt) {
    if (!Number.isInteger(lowInt) || !Number.isInteger(highInt) || lowInt <= 0 || highInt <= 0) {
        return('ERROR');
    }

    let arr = [];
    
    if (lowInt < highInt) {
        for (i = lowInt; i <= highInt; i++) {
        arr.push(i);
        }
    }   
    
    else if (lowInt > highInt) {
        for (i = lowInt; i >= highInt; i--) {
        arr.push(i);
        }
    } 
    
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(arr);
    console.log(sum);
    return(sum);
};
 


sumAll(4,1)
// Do not edit below this line
module.exports = sumAll;

// TOP solution 
/* const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}; */
