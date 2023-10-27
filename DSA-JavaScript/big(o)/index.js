//Scalable =>
// big (0) Complexity chart => O(n), O(n^2), O(2^n), O(n!) O(n log n), O(1)

const nemo = ["nemo"];
const everyone = ["dory", "fred", "gill", "nigel", "nemo", "hank", "marlin"];
const large = new Array(10000).fill("nemo");

//O(n) ---> Linear Time
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
}

// findNemo(large);

//O(1) --> Constant Time
const boxes = [0, 1, 2, 3, 4, 5, 6];
function findConstantTime(array) {
  console.log(array[0]); // O(1)
  console.log(array[1]); //O(1)
}

// findConstantTime(boxes); // O(1+1) => O(1)

// Rule 01: Worst Case
// Rule 02: Remove Constants
// Rule 03: Different terms for inputs
// Rule 04: Drop Non dominants

function findConstantTime(array1, array2) {
  for (let i = 0; i < array1.length; i++) {}

  for (let j = 0; i < array2.length; j++) {}
}

// O(a+b)

// O(1000 +n/2 +3n) =>  O(n)

// nested loop => O(n^2) Quadratic Time
