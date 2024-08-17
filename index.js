//checking sum zero - problem 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input    traversing:- to visit each nd every element of array
//[-4,4] -> output

function getSumZero(array){
for(let number of array){
for(let j = 1 ; j< array.length - 1 ; j++){
if(number + array[j] === 0){
return [number , array[j]]
}
}

}
}

const result = getSumZero( [-5,-4,-3,-2,0,2,4,6,8])
console.log(result);
