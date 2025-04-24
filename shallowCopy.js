const originalObject={
    name:'Raj',
    address:{city:'Bangalore'}
}

const shallowCopy = {...originalObject}
shallowCopy.name='Madhu';
shallowCopy.address.city='Mysore';
console.log(shallowCopy.name); // Madhu
console.log(originalObject.name); // Raj
console.log(originalObject.address.city); // Mysore