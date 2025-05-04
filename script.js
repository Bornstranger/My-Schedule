let ar = [10,20,30,40,50]

let k = 70
let op = 0
let i = 0;
while(i < ar.length){
    let sum = 0
    if(sum <= k){
        sum += ar[i]
        i++
    }else{
        op++;
        sum = 0;
    }
}
console.log(op)