// Q70 Build Array from Permutation
let nums = [0, 2, 1, 5, 3, 4];
let n = nums.length;

let ans = new Array(n);

for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
}

console.log(ans);