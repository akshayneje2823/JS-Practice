function getMilk(money){
    var numBottles = Math.floor(money /1.5);
    console.log("buy "+ numBottles + " bottels of Milk")
    return money % 1.5
}
console.log(getMilk(20))