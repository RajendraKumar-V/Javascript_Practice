//reducer reduce an array to single value like Sum/Prodcut
const sumVal = [1,2,3,4];
const result = sumVal.reduce((accumalator:number,currentvalue:number)=>accumalator+currentvalue,0)
console.log(result); // 10