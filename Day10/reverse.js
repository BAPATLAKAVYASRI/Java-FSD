let a=234
let b=0;
let rem=0;
while(a!=0){
    rem=a%10;
    b=b*10+rem;
    a=parseInt(a/10);
}
console.log(b);