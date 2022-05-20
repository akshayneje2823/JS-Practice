// Use JS Function To Print Max Value Of The Given Array

function max_Value(arr) {
    var max = arr[0];
    for (var i =1; i <= arr.length; i++){
        if(arr[i]>=max){
            max = arr[i];
        }
    }
    return max;
}
let result = max_Value([10,20,30,40,100])
console.log(result)