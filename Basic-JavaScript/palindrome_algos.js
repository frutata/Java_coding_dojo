function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    /* log: "Not a pal-indrome!" */
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
/* console.log Not a pal-indrome!, Pal-indrome! */