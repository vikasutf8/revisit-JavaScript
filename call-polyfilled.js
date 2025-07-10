

function debounce(callback, delay) {
    let timeOut='';
    return function(...arg){
        let self = this;
        if(timeOut){
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(function(){
            callback.apply(self,arg);
            // callback.call(self,...arg);

        },delay);
    }    
    //setTimeOut. callSe
    //previou ko reset
   
}



function throttle(callback, delay, options) {
    // let wait =false;

    // return function throttled(...arg){
    //     if(!wait){
    //         callback();
    //         wait =true;
    //         setTimeout(function(){
    //             wait =false;
    //         },delay);
    //     }
    // }


    let lastcall =0;
    const {leading=false, trailing =true} = options;

    
    let thisvalue = this || globalThis

    let timeOutId ='';
    return function throttled(...arg){

        let now = Date.now();
        if(!leading && lastcall ==0){
        lastcall =now
        }
        if(now - lastcall > delay){
            callback.apply(thisvalue,arg);
            lastcall = now;

            clearTimeout(timeOutId);
            timeOutId='';
        }
        else if(trailing && !timeOutId){
            timeOutId =setTimeout(()=>{
            callback.apply(thisvalue,arg);
            lastcall =leading ? now : 0;
            timeOutId='';
            },delay)
        }
    }
}