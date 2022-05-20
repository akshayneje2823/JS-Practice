const person = {    name: 'joy', 
                    lastName: 'Doe', 
                    age: 38 
                }
const x = person       /*  This is not a copy of perosn Both are same object */
x.salary =45000;
console.log(person)
console.log(x)