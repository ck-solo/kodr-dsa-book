// Q69. Concatenation of array

let arr = [ 1,2,3,4]
let n = arr.length
let ans = new Array(2 * n);

for(let i = 0; i < n; i++){
    ans[i] = arr[i]
    ans[i + n ] = arr[i]
}
console.log(ans)
 