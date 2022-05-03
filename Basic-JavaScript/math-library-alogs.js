//Math.floor(num) -> rounds it down
//Math.Ceiling(num) -> rounds it up

/* var random = Math.random();
//gives us a random number
console.log(random); */

/* var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);

console.log(floor);
console.log(ceiling); */


//DICE ROLL
/* function d6() {
    //takes a random number from 1-6
    var roll = Math.random() * 6;
    console.log(roll)
    //takes random number from 0-6

    roll = roll + 1
    console.log(roll)
    //adds a one so 0 is not an option

    roll = Math.floor(roll);
    console.log(roll)
    //rounds down to the nearest number

    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll); */


//LIFES ANSWERS
var lifesAnswers = [
    "It is certain.", //0th value
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful." //19th value
];

function randLifeAnswer() {
    var random;
    var arrLength = lifesAnswers.length;
    console.log("array length = "+arrLength);
    //logs the length of the array which is 20

    var randNum = Math.random()*arrLength;
    console.log("randNum = "+randNum);
    //adds the text "randNum =" and a random number from arrLength

    random = Math.floor(randNum);
    console.log("random = "+random);
    //rounds down with Math.floor

    console.log(lifesAnswers[random]);
}
randLifeAnswer();