//Variable var

var a = 'Raaghu';
{
   var a = 'Madhu';
   console.log('var '+ a)
}
console.log('var '+ a)

//Variable/Identifier let
let b ='Raaghu';
{
    let b ='Mahendra'
    console.log('let '+b)
}
console.log('let '+b)

//Identifier const
const author ='Raaghu';
author = 'Mahendra'; //TypeError: Assignment to constant variable.
console.log(author)