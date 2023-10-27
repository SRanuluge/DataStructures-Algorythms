//**-------- Example 01 -----------------------------------------------------------------*/
const boxes = [0, 1, 2, 3, 4, 5, 6];
function ex1(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    // anotherFunction(); //O(n) this call n(input length) times
    let stranger = true; //O(n)  this call n(input length) times
    a++; //O(n) this call n(input length) times
  }
  return a; // n(1)
}
//BIG O(3 + 4n)
//O(n)

function ex2(input) {
  let a = 10; //O(1)
  let b = 10; //O(1)
  let c = 10; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }

  for (let j = 0; j < input.length; j++) {
    //O(n)
    let p = j * 2;
    let q = j * 2;
  }
  let whoIam = "I don't know"; //O(1)
}
//BIG O(4 + 7n)
//O(n)

// Finding if two arrays contains the same elements
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

//**-------- Example 02 ---------------------------------------------------------------*/
// Using nested loops
function isContainDuplicate01() {
  for (const [i, v] of array1.entries()) {
    if (v) {
      for (const [j, q] of array2.entries()) {
        if (v === q) {
          return true;
        }
      }
    }
  }
  return false;
}

// // O(a * b)  Time complexity
// // O(1)       Space complexity this don't create new variables

// Second method
let map = {};
function isContainDuplicate02() {
  for (const [i, v] of array1.entries()) {
    if (!map[v]) {
      map[v] = true;
    }
  }

  for (const [j, q] of array2.entries()) {
    if (map[q]) {
      return map[q];
    }
  }
  return false;
}

//o(a + b) when comes to the time complexity good
//o(a) Space complexity bad => creating a objet

// Talk about handle errors

// More readable way to write this code
const isContainDuplicate03 = (arr1, arr2) =>
  arr1.some((item) => arr2.includes(item));
// Readability is good
// console.log(ex3(array1, array2));
