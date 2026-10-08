var n=6
for(let i=2;i<=parseInt(Math.sqrt(n));i++){
    if(n%i==0){
        console.log("False");
        return;
    }
}
console.log("True");