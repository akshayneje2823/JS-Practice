var myArray = [11,33,44,55,20,77,33];

const findIndex = myArray.findIndex(function(x){
    return x%2 == 0;
});
console.log(findIndex)
console.log("Hello")