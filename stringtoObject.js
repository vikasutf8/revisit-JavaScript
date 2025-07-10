//  convert stirng(., any sperator) to object and last should be key :value

let sampleString = "a.b.c.d.e.f";

// output : {a:{b:{c:{d:{e:f}}}}}

// convet to array

let arr = sampleString.split(".");
console.log(arr);

function stringToObject(arr) {
//   let obj = {};
//   let level = ""; // skipping last char
//   arr.forEach(function objectCreate(char) {
//     if (level || Object.keys(obj).length) {
//       var n = { [char]: obj || level };
//       level =""
//       console.log(n);

//       obj = n;
//     } else {
//       level = char;
//     }
//   });

//   return obj;

// return arr.reduce(function(acc, next){
//     console.log(next,acc);
//  return {[next]:acc};
// },{})
// return arr.reduce(function(acc, next){
//     console.log(next,acc);
//  return {[next]:acc};
// })
return arr.reduceRight(function(acc, next){
    console.log(next,acc);
 return {[next]:acc};
})
//callback fn , initial value

}

console.log(stringToObject(arr));
