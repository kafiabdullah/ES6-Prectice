// JavaScript ES6 OOP concepts destructor

// destructor used in a object
const person = {name: "Kafi abdullah", age: 23, address: "notun Bazar"};

const {name, address} = person;
console.log(name, address);

// destructor in a array
const friends = ["tareq", "adib", "riyad", "nazmul"];
const [firstFriend, ...restOfTheFriends] = friends;

console.log(firstFriend, restOfTheFriends);