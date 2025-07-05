// # filter : return an new array and that updated new array must be filtered with condition that pass true or false


const arr =new Array(10);
const thisObj ={name:"vikas"};
/*
//decalare
const newRes =filterfunc(arr,cbfnFilterArray,thisObj);
console.log(newRes, typeof newRes);

//defination
function filterfunc(arr,cbfn,thisArg){

    const res =new Array();

    for(let i=0;i<arr.length;i++){
        let val =arr[i];

        let needtoadd = cbfn.call(thisArg,val,i,arr);
        needtoadd && res.push(val);
    }
   
    
    return res;

    // cbfn(arr[0],0,arr);
}

function cbfnFilterArray(ele,index,arr){
    console.log(this)
    return ele%2===0;
}

*/

// adding function in Array.prototype
Array.prototype.MyFilter =function(cbfn){
    if(typeof cbfn !=="function"){
        throw new Error("cbfn must be a function");
    }
    const res =new Array();
    console.log(res.size());
    
    console.log(this);
    
    let i=0;
    while(i<this.length){
        if(this.hasOwnProperty(i)){
            let val =this[i];
            let needtoadd = cbfn.call(this,val,i,this);
            needtoadd && res.push(val);
        }
        i++;
    }
    
return res;
}

function isEven(ele,index,arr){
   return ele%2===0;
}

var res = arr.MyFilter(isEven);
console.log(res);

// IMPORTANT : filter functiion ushi array par kam karta ha jiske  index initiate ho gya ha
