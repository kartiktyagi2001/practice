// let str = "kartik"

// function revstr(str){
//     return str.split('').reverse().join('');
// }

// let rev = (revstr(str));

// function pal(str){
//     return str === rev;
// }

// if(pal(str)){
//     console.log("Palindrome");
// } else{
//     console.log("Not a Palindrome");
// }

// let arr = [2,5,8,6,1,0,8,4,3,7,9];

// function max(arr){
//     let max= arr[0];
//     for(let i = 0; i< arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(max(arr));

// let n = 6

// function fib(n){
//     if(n<=1) return n;

//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(n))

let n = 5

function prime(n){
    if(n<=1) return 1;

    return n*fact(n-1);
}
if(prime(n)) console.log("Prime")