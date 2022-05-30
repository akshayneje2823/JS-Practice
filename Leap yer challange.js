function isLeap(year){
    if(year %4 === 0){
        if (year%100 === 0) {
            if (year %400 ===0) {
                console.log("Leap Year")
            }
            else{
                console.log("Not Leap year")
            }
        }else(
            console.log("Not a leap year")
        )
    } else{
        console.log("Not leap year")
    }
}
console.log(isLeap(2000))
console.log(isLeap(2001))