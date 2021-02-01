//  ES6 array sperade operator
const friendAge = [22,23,25,19,20];
const relativeAge = [18,20,23,24];
const seniorAge = [44,35,38,42,40];

// normal method
const allFriendAge1 = friendAge.concat(relativeAge).concat(seniorAge);
console.log(allFriendAge1);
// using sperede array
const allFriendAge = [...friendAge, ...relativeAge, ...seniorAge];
console.log(allFriendAge);

//  find maximum number 
const math = 80;
const database = 98;
const algorithm = 75;
// normal method to show maximum 
const maxNumber = Math.max(math, database, algorithm);
console.log(maxNumber);

// sperade array to show maximum number
const numbers = [80,75,90,69];
const maxGradeNumber = Math.max(...numbers);
console.log(maxGradeNumber); 
