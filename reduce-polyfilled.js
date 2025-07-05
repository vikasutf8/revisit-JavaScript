// reduce : saare items ko combine karke ek value DelayNode


let arr =[1,2,3,4,5];

Array.prototype.MyReduce =function(cbfn,initalvalue){
    console.log(this);
    if(typeof cbfn !=="function"){
        throw new Error("cbfn must be a function");
    }
    if(!initalvalue && this.length===0){
        throw new Error("initial value must be provided");
    }
    if(this.length===0){
        return initalvalue;
    }
    
    if(this ==null){
        throw new Error("this must be an array");
    }

    const isValue = initalvalue ? initalvalue : this[0];
    const startindx = initalvalue ? 1 : 0;
    let acc =isValue;
    for(let i=startindx;i<this.length;i++){
        const nextval =this[i];

        acc = cbfn(acc,nextval,i,this);
    }

    return acc;
}

let res  =arr.MyReduce(function(acc,next){
    return acc+next
},0)


//first time ::acc === second parameter :: 0:: initial value

//by default not initial value so
// first ele is initalvalue and next is 2nd element


// [].reduce(()=>{})

console.log(res);