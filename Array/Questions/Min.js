function min_Value(arr){
    let min = arr[0]
    for(var i = 1; i<=arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min;
}
let result = min_Value([10,20,30,40,100])
console.log(result)