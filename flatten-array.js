// flatten :: flatten array of array
// deep flatten array

const sampleArr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, [12]]]]];
console.log(sampleArr.flat(2)); //default deepth is 0

// if Array having. only Numbers
console.log(sampleArr.toString().split(",").map(Number));

function flatten(arr, level) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (level > 0 && Array.isArray(arr[i])) {
      res.push(...flatten(arr[i], level - 1));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}


console.log(flatten(sampleArr,1));
