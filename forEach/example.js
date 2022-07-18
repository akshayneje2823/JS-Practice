var numbers = [1,2,3,4,5,6,7,8,9,10];

var getByForEach = []

var forEeachMethod = numbers.forEach(x=>{ if (x%2==0) {
    return getByForEach.push(x)
}})

console.log(getByForEach)
