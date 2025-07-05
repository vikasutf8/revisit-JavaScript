
//Test case 1 : map-polyfilled.js

const sample1 =[1,3,4,5];
const sample2 =new Array(10);
const sample3 =[1,,,,,,34,4,,,5];
const sample4 ={length:3 ,0:1,1:3,2:4};


console.log(sample1.map(x=>x*2));
console.log(sample2.map(x=>x*2));
console.log(sample3.map(x=>x*2));
console.log(Array.prototype.map.call(sample4,(x=>x*2)));
