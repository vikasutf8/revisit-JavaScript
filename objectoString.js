let sampleString =  {a:{b:{c:{d:{e:"f"}}}}}

// output : "a.b.c.d.e.f"`

// function objectToString(obj) {
//     console.log(obj)
//     let str = "";
//     for (let key in obj) {
//         if (typeof obj[key] === "object") {
//             str += key + ".";

//             str += objectToString(obj[key]);
//         } else {
//              str += key + "." + obj[key] ;
//         }
//         console.log(str)
//     }

//     return str;

// }

//do with reduce function. 


console.log(objectToString(sampleString));