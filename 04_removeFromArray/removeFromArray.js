const removeFromArray = function(array, ...elements) {
    array = array.filter((item, index) => array.indexOf(item) === index);
    for (const element of elements) {
      let index = array.indexOf(element);
      while (index > -1) {
        array.splice(index,1);
        index = array.indexOf(element);  
        };
    };
    return (array);
};    

removeFromArray([1,2,3,4],7,2);
// Do not edit below this line
module.exports = removeFromArray;
