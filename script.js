/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /* Exercise 2 */

  function isAdult(age) {
    if (age >= 18){
        return "Adult";
    } else{
        return "Mior";
    }
  }
  console.log("Excerise 2 Result:", isAdult(21));

  /* Exercise 3 */

  function ischarAVowel(char){
    const vowels = "aouieAOUIE";
    return vowels.includes(char);
  }
console.log("Exercise 3 Result:", ischarAVowel("a"));

/* Exercise 4 */
function generateEmail(name, domian){
    return (name+ "@" + domian);
}
console.log("EXercise 4 Result:", generateEmail("johnsmith","example.com"));

/* Exercise 5 */
function greetUser(name, timeOfDay) {
  // 
return `${name}, ${timeOfDay}!`;
}
console.log("Exercise 5 Result:", greetUser("sam","morning"));

/* Exercise 6 */

function maxOfThree(x, y, z){
    if (x >= y && x >= z ) {
        return x;
    } else if (y >= x && y >=z) {
        return y;
    }
     else {
        return z;
       }
    }
    console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

    /* Exercise 7 */
 // in order to calculate tip by using multiplaying the total by the presentage (costum disition)

function calculateTip (totalbill, tippercentage) {
    return ((totalbill* tippercentage)/ 100) ;
    }
    console.log("Exercise 7 Result:", calculateTip (50, 20));

    /* Exercise 8 */
// to convert celsius to fahrenheit (multiply by 1.8)  then add 32
// to convert fahrenheit to celsius (substract 32) then divied (1/1.8)

function convertTemperature (temperature, scale) {
  if (scale === "C") {
    return (temperature * 1.8) + 32;

  } else if (scale === "F") {
    return (temperature - 32) / 1.8;

  }
}
 console.log("Exercise 8 Result:", convertTemperature(32, "C"));

 /* Exercise 9 */
 // four cases to create (add, subtract, multiply, divide)
  
 function basicCaculator(x, y, operation) {
    switch (operation) {
        case "add":
         return x + y;
        case "multiply":
         return x * y;
        case "subtract":
         return x - y;
        case "divide":
            return y !== 0 ? x / y : "Error: Division by zero"; 
default:
    return "Error: Invalid operation";

    }
 }
 console.log("Exercise 9 Result:", basicCaculator( 10, 5, "subtract"));
