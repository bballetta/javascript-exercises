const removeFromArray = function(array, ...elements) {
    array = array.filter((item, index) => array.indexOf(item) === index);
    let index = array.indexOf(...elements);
    while (array.includes(...elements)) {
      for (const i of elements) {
        if (index > -1); {
          array.splice(index,1);
          index--;  
        };
      };
    };    
    return (array);
};

removeFromArray([1,2,3,4],7,"tacos");
// Do not edit below this line
module.exports = removeFromArray;
