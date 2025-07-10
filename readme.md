
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





<!-- SLICE -->
// slice : to extract range of element from existing Array and it return new array ..not modify existing array
// and its return shalow copy of array ...not working new array nested array 


// slice() :: return shallow copy of array
// slice(start) :: return shallow copy of array from start index to length of array
// slice(start,end) :: return shallow copy of array from start index to end index(exclusive)


<!-- CALL APPLY BIND -->

- call function exist inside a prototype chain..and it can use when manuplate and custom value of "this" in function
show.call(thisArg,arg1,arg2,arg3)


IMPORTANT : thisArg ::if permitive. type then its convet it into object


- Apply : only difference form call is just pass argThis and argArrray ...not  arg1 arg2 arg3
passing  array instead of arguments


- Bind : this is not immidiate return value of this like call,apply but it return new function in which value of this(fixed) is set that we want..
IT set value its parmanetly except one case ::that was "new" keyword
..meant first we this value is refring some other object of that fuction...
but for that we create new object <-- this is refre new wali value




<!-- DEBOUNCING -->
next, previous call ka gap rahega tab tak call nahi hogi ...delay mein nahi karte hoga


<!-- throttle -->
fix interval me fix request accept karna
-leading  :no wait of delay at first time
-trailing : what if last scroll and current position of scroller