const removeFromArray = function(array, elements) {
    const index = array.indexOf(elements);
    if (index > -1); {
      array.splice(index, 1);  
    }
    return (array);
    console.log(array);
};

//removeFromArray([1,2,3,4],3);
// Do not edit below this line
module.exports = removeFromArray;
