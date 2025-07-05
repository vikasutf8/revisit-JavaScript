
//Test case 1 : map-polyfilled.js
/*
const sample1 =[1,3,4,5];
const sample2 =new Array(10);
const sample3 =[1,,,,,,34,4,,,5];
const sample4 ={length:3 ,0:1,1:3,2:4};


console.log(sample1.map(x=>x*2));
console.log(sample2.map(x=>x*2));
console.log(sample3.map(x=>x*2));
console.log(Array.prototype.map.call(sample4,(x=>x*2)));

*/


// What is Map
var arr=[1,2,3,4,5];
/*
const thisObj ={name:"vikas"};
//a function that return square of each element


//decalare
const res =myMap(arr,cbfnTranformArray,thisObj);  //its return an array
 
console.log(res);


//defination
// ? control this value
function myMap(arr, cbfn, thisArg){
    const res=[];

    for(let i=0;i<arr.length;i++){
        // res.push(cbfn(arr[i],i,arr)); breakdown
        let val =arr[i];
        // let newval = cbfn(val,i,arr);
        let newval = cbfn.call(thisArg,val,i,arr);
        res.push(newval);

    }
    return res;

    // cbfn(arr[0],0,arr);
}

function cbfnTranformArray(ele,index,arr){
    console.log(this)
   return ele*ele;
}
    */



// wirte function
// this MyMap added in Array.prototype
Array.prototype.MyMap =function(cbfngetSquare){
    // console.log("this:" ,this); //arr
    // const res =new Array();
    // for(let i=0;i<this.length;i++){
    //     // res.push(getSquare(this[i],i,this));
    //     let val =this[i];
    //     let newval = cbfngetSquare(val,i,this);
    //     res.push(newval);
    // }
    // return res;


    if(typeof cbfngetSquare !=="function"){
        throw new Error("cbfngetSquare must be a function");
    }
    const res =new Array(this.length);

    let i=0;
    while(i<this.length){
        // res.push(getSquare(this[i],i,this));
      if(this.hasOwnProperty(i)){
          let val =this[i];
        let newval = cbfngetSquare(val,i,this);
        res[i]=newval;
    }
    i++;
    }


    return res;
    
}
function getSquare(ele,index,arr){
   return ele*ele;
}


//calling & deleclering 
var res = arr.MyMap(getSquare);
console.log(res);





//Test case 1 : map-polyfilled.js

const sample1 =[1,3,4,5];
const sample2 =new Array(10);
const sample3 =[1,,,,,,34,4,,,5];
const sample4 ={length:3 ,0:1,1:3,2:4};


console.log(sample1.MyMap(x=>x*2));
console.log(sample2.MyMap(x=>x*2));
console.log(sample3.MyMap(x=>x*2));
console.log(Array.prototype.MyMap.call(sample4,(x=>x*2))); 

//kisi be object ko map par call kar shaket ha kyu ki length key honi chanye. :while(i<this.length){
