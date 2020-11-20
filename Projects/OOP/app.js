//Person Constructor
function Person( firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime()
    //     const age = new Date(diff)
    //     return Math.abs( age.getUTCFullYear() - 1970 )
    // }
}

//Prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const age = new Date(diff)
    return Math.abs( age.getUTCFullYear() - 1970 )
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//Calculate age 

const chris = new Person("christian", "Kimou","12-24-85")

console.log(chris.calculateAge())
console.log(chris.getFullName())