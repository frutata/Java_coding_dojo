/* CODEFLOW */
var x = 5;
/* nothing actually happens here the function just states it knows "setX" */
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
/* return to line 3 plug in 15 */
setX(15);
/* after we replace 5 with 15 we console.log yet again */
console.log(x);
/* output: 5, 15 */

/* RETURN OF RETURNS */
var x = 5;
    
function addToX(amount) {
    return x + amount;
    /* 5 + -10 = -5 */
    console.log("hello there");
    /* algo ends after we do the return */
}
    
console.log(x);
var result = addToX(-10);
/* jump back to line 16 */
console.log(result);
/* JUMP back down to console.log -5, 5 */
console.log(x);
/* output: 5, -5, 5 */

