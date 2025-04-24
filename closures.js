function OuterFunction(){
    const val = 'Madhu'

    function innerFunction(){
        console.log(val);
    }
    innerFunction();
}

OuterFunction()