const removeFromArray = function(array, ...elements) {
    array = array.filter((item, index) => array.indexOf(item) === index);
    let index = array.indexOf(...elements);
    for (const i of elements) {
      if (index > -1); {
        array.splice(index,1);
        index--;  
      };
    };  
    return (array);
};

removeFromArray([1,2,2,4],2);
// Do not edit below this line
module.exports = removeFromArray;
