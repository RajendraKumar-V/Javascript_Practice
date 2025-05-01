// let pizzaPromise = new Promise((resolve,reject)=>{
//     let pizzaReady = true
//     if(pizzaReady){
//         resolve('Pizza is ready')
//     }else{
//         reject('Pizza is not ready')
//     }
// })
// pizzaPromise.then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.error(error)
// })
let pizzaPromise = new Promise((resolve,reject)=>{
    let pizza = true
    if(pizza){
      resolve('Pizza is ready')
    }else{
      reject('pizza is not ready')
    }
})


let churmuriPromise = new Promise((resolve,reject)=>{
  let churmuri = true
  if(churmuri){
    resolve('churmuri is ready')
  }else{
    reject('churmuri is not ready')
  }
})



Promise.allSettled([pizzaPromise,churmuriPromise])
.then((items) => {
console.log("All delivered:", items);
})
.catch((error) => {
console.log("One failed:", error);
});

Promise.all([pizzaPromise,churmuriPromise])
.then((items) => {
console.log("All delivered:", items);
})
.catch((error) => {
console.log("One failed:", error);
});
Promise.race([pizzaPromise,churmuriPromise])
.then((items) => {
console.log("All delivered:", items);
})
.catch((error) => {
console.log("One failed:", error);
});
Promise.any([pizzaPromise,churmuriPromise])
.then((items) => {
console.log("All delivered:", items);
})
.catch((error) => {
console.log("One failed:", error);
});