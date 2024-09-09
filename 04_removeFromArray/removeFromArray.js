const removeFromArray = function(array, ...elements) {
    let index = array.indexOf(...elements);
    for (const i of elements) {
      if (index > -1); {
        array.splice(index,1);
        index--;  
      };
    };  
    return (array);
};

removeFromArray([1,2,3,4],3,2);
// Do not edit below this line
module.exports = removeFromArray;
