/* 
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
*/

for(var i=1; i<=100; i++) {
    if( i % 15 === 0) {
        console.log("FizzBuzz");
    } else if( i % 3 === 0) { 
        console.log("Fizz");
    } else if( i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}