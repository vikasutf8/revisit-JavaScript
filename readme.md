
<!-- #test1 -->
const sample1 =[1,3,4,5];
const sample2 =new Array(10);
const sample3 =[1,,,,,,34,4,,,5];
const sample4 ={length:3 ,0:1,1:3,2:4};


console.log(sample1.map(x=>x*2));
console.log(sample2.map(x=>x*2));
console.log(sample3.map(x=>x*2));
console.log(Array.prototype.map.call(sample4,(x=>x*2)));



<!-- result -->
vikasarya@Vikass-MacBook-Air javaScript % node map-polyfilled.js
[ 2, 6, 8, 10 ]
[ <10 empty items> ]
[ 2, <5 empty items>, 68, 8, <2 empty items>, 10 ]
[ 2, 6, 8 ]


<!-- solution -->
Array.prototype.MyMap =function(cbfngetSquare){
    if(typeof cbfngetSquare !=="function"){
        throw new Error("cbfngetSquare must be a function");
    }
    const res =new Array(this.length);
    let i=0;
    while(i<this.length){
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


// function ke pass ek key hoti ha prototype jo ki kisi bhi child function ke sath share kar shaket hai