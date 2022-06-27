const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue" ,
    fullName : function (){
        return this.firstName + " " + this.lastName
    }  
};
console.log(person["age"])
console.log(person.age)
console.log(person.fullName())