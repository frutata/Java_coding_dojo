//lesson 1
var a = 25;
a = a - 13;
//a -> 25-13=12
console.log(a/2);
//a=6
a = "hello";
console.log(a + " hello");
//outputs: 6, hello hello

//lesson 2
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
//0, 4, 8
console.log("outside of the loop " + i); //outside... 12
//outputs: 0, 4, 8, out... 12

//lesson 3
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
    //sum = 1->3->5
    for(var i=0; i<arrayOfNumbers.length; i++) {
        //i=o->1->2->3
        sum += arrayOfNumbers[i];
        //1=1+1-->2
        console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);

}
getTotal([1, 3, 5]);
//outputs:current... 2,current... 5, current 10, total... 10