// slice : to extract range of element from existing Array and it return new array ..not modify existing array
// and its return shalow copy of array ...not working new array nested array 


// slice() :: return shallow copy of array
// slice(start) :: return shallow copy of array from start index to length of array
// slice(start,end) :: return shallow copy of array from start index to end index(exclusive)


// IMPORTANT : slice is used to convert into array ...
// function show(){
    
//     // console.log(arguments.slice(0,2)); // retur an array
//     // console.log(arguments.map(x=>x*2)); //not valid
//     // console.log(Array.prototype.slice.call(arguments).map(x=>x+5));// retur an array

//     console.log([...arguments].map(x=>x+5)); // return ES6 array
    
// }

// show(1,2,3,4,5,6,7,8,9,10);

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.slice(0,2));
console.log(arr.MySlice(2));
const MySlice = function(start,end){
    if(start === undefined){
        start = 0;
    }
    if(start <0){
        start = arr.length + start;
        start = start < 0 ? 0 : start;
    }

    if(end === undefined){
        end = arr.length;
    }
    if(end > arr.length){
        end =end%arr.length;
    }
    let res=[];
    for(let i=start;i<end;i++){
        res.push(arr[i]);
    }
    return res;

}


