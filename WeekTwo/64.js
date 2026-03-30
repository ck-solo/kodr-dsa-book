// Q64. Move all the negative elements on the left side and positive elements on the right side O(n).
let arr = [2, -3, 4, -1, -7, 8, 5, -2];

let i = 0;
let j = arr.length - 1;

while (i <= j) {
    if (arr[i] < 0) {
        i++;
    } 
    else if (arr[j] > 0) {
        j--;
    } 
    else {
        // swap
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}

console.log(arr);