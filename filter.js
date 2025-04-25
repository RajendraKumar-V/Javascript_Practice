//filters the elements based on the condition and returns the new array
const arrVal = [1,2,3,4,5,6];
const result = arrVal.filter((item,index)=>item%2===0)
console.log(result); // [2,4,6]   