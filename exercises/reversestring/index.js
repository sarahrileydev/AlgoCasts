// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1

// function reverse(str) {

//   return str.split('').reverse().join("")
// }

// Solution #2

// function reverse(str) {
//   reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Solution #3

// function reverse(str) {
//   // reduce used to take all the different values of an array and reduce them to a single value
//   // reduce takes two arguments, an arrow function and a starting initial value that gets passed into the arrow function as the first argument
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

function reverse(str) {
  // same, just shorter syntax
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}
reverse('asdf')

module.exports = reverse;
