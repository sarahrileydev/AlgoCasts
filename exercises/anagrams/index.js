// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
// function anagrams(stringA, stringB) {
//   let aCharMap = buildCharMaps(stringA);
//   let bCharMap = buildCharMaps(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let i in aCharMap) {
//     if (aCharMap[i] !== bCharMap[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMaps(str) {
//   let charMap = {};
//   let cleanString = str.replace(/[^\w]/g, "").toLowerCase();

//   for (let char of cleanString) {
//     charMap[char] = +1 || 1;
//   }
//   return charMap;
// }

function anagrams(stringA, stringB) {
  // let strA = sort(stringA);
  // let strB = sort(stringB);

  // if (strA === strB) {
  //   return true;
  // }
  // return false;

  return sort(stringA) === sort(stringB);
}

function sort(str) {
  let cleanString = str.replace(/[^\w]/g, "").toLowerCase();
  return cleanString
    .split("")
    .sort()
    .join("");
}

anagrams("abcc", "abc");
module.exports = anagrams;
