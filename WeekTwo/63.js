// Q63. Binary Search. If element found print the index, else -1
let arr = [20, 30, 40, 50, 60, 70, 80];
let t = 50;

let st = 0, en = arr.length - 1, index = -1;

while (st <= en) {
    let mid = Math.floor((st + en) / 2);

    if (arr[mid] === t) {
        index = mid;
        break;
    } 
    else if (arr[mid] < t) {
        st = mid + 1;
    } 
    else {
        en = mid - 1;
    }
}

if (index === -1) {
    console.log("Index not found");
} else {
    console.log("Index found: " + index);
}