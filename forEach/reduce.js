var myArray = [21,43,56,78,90];
;


var sum = myArray.reduce(function (accumulator,array){
    console.log( "accumulator..... " + accumulator);
    console.log("CurrentElement " + array)
    return accumulator + array
} )
console.log(sum)