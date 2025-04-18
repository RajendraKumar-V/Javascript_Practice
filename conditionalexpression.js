let a = prompt("Enter a number: ");
console.log(a); //o/p 10

//can you rewrite this if else logic correctly
if (a < 0) {
    alert("Negative number not eligible for voting");
} else if (a < 9) {
    alert("You are a kid not eligible for voting");
} else if (a >= 9 && a <= 18) {
    alert("You are not eligible for voting");
} else {
    alert("You are eligible for voting");
}