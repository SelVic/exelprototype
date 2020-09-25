// let t = setInterval(()=> {
//     setTimeout(()=>{
//     clearInterval(t);
// },3000)
//     console.log("Привет")
//
// },1000)

// const a = /abc/;
// console.log(typeof(a+1))

// const a = [1,2,3,4,5,6,7,8,9,0]
// //
// // a.forEach((el,ind)=> {el+=1})
// // console.log(a)






const promise = new Promise((resolve, reject) => setTimeout(()=> {
    console.log(1);
    reject("2");
}, 1000)
);
promise.then((result)=> console.log(2)).catch((result)=> console.log(3))
