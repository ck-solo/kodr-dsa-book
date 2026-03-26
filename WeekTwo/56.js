// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

const arr = [2, 96, 69, 77, 145, 20]

arr.sort((a,b)=> b- a)
console.log("second greatest", arr[3])