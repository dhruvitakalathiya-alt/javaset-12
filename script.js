/*console.log("one");
console.log("two");

setTimeout (() =>{
    console.log("hello");
},5000);

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
  sumCallback(a,b); 
}

calculator(1,2,sum);
 
let age = 20;
if(age>=18){
    if(age>=60){
        console.log("senior")
    }else{
        console.log("middie")
    }
}else{
    console.log ("child");
}

for (let i=0;i<5;i++){
    let str = "";
    for(let j=0;j<5;j++){
        str = str + j;
    }
    console.log (i,str);
}*/
/*let promise = new Promise((resolve,reject) => {
    console.log(" I am promise");
    resolve("success");
});
const getPromise = () => {
    return new promise((resolve,reject) => {
        console.log("I am promise is you");
        resolve("success");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
});

promise.catch ((err) => {
    console.log("rejected",err);
});


/*function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        //console.log("data",dataId);
        //resolve("success");
        reject()
        if(getNextData){
            getNextData();
        }
    },5000);
  });
}    
/*callback hell
getData(1,() =>{
   console.log("getting data2....");
    getData(2,() => {
         console.log("getting data3....");
        getData(3,() =>{
              console.log("getting data4....");
            getData(4);
        });
    });
});

async function hello() {
    console.log("hello");  
}*/

function getData(dataId){
    return new promise ((resolve,reject) => {
        setTimeout(() =>{
    console.log("data",dataId);
    resolve("success");
        } , 2000);
   });
}
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
}