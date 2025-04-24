const originalObject={
    name:'Raj',
    address:{city:'Bangalore'}
}

const deepCopy = JSON.parse(JSON.stringify(originalObject)) 
deepCopy.name='Madhu';
deepCopy.address.city='Mysore';
console.log(deepCopy.name); // Madhu
console.log(originalObject.name); // Raj
console.log(originalObject.address.city); // Bangalore