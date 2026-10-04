for(let i=0;i<=10;){
    console.log('=========================');
    console.log();
    i++;//or declare in for loop as in java
    console.log('======================');
}

let arr=[10,20,30,40,50,60];
let str="JavaScript"
//for-of loop

for(val of arr){
    console.log(val);
}
//for each loop

for(let ch of str){
    console.log(ch);
}

//for in loop
for(let ind in arr){
    console.log(ind);
}
for(let ind in str){
    console.log(ind);
}
//forEach loop
arr.forEach((val,ind,a)=>{
    console.log(val,"->",ind,"->",a);
})

console.log("===================== MAP FUNCTION ===================================");
let prices=[500,102,456,7812,3535,442,5123,12313,1324];
console.log(prices);
let discountedprices=prices.map((x)=>{
    return x-x/10;
})
console.log(discountedprices);
;

let addedExtraamount= prices.map((x)=>{
    return x+250;
})

console.log(addedExtraamount);

console.log("========================== FILTER FUNCTION ==============================");

let filteredprices=discountedprices.filter((x)=>{
    return x>=500 && x<=5000;
})
console.log(filteredprices);



console.log("======================== Reduce Function =============================");
const totalprices=filteredprices.reduce((acl,val)=>{
    return acl+val;
})
console.log(totalprices);

const totalprices1=filteredprices.reduce((acl,val)=>{
    return acl+val;
},500)
console.log(totalprices1);






