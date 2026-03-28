let arr = [20,40,50,60,70]
let temp = new Array(arr.length)
let i = arr.length-1
for(let j = 0; j <temp.length; j++){
    temp[j] = arr[i]
    i--
}
console.log(temp)