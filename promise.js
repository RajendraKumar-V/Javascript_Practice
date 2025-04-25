let pizzaPromise = new Promise((resolve,reject)=>{
    let pizzaReady = true
    if(pizzaReady){
        resolve('Pizza is ready')
    }else{
        reject('Pizza is not ready')
    }
})
pizzaPromise.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.error(error)
})