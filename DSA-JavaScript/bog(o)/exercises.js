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
ex1(boxes); //O(n)

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
ex2(boxes); //O(n)

module.exports = { ex1 };
