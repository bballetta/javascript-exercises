const sumAll = function(lowInt, highInt) {
    let arr = [];
    for (i = lowInt; i <= highInt; i++) {
        arr.push(i);
    };
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(arr);
    console.log(sum);
    return(sum);
    
};

sumAll(1,4)
// Do not edit below this line
module.exports = sumAll;
