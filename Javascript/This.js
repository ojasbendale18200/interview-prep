// this in Global Object

console.log(this)

// this inside the function

function x() {
    // the value of this is depends on  strict / non strict  mode
    console.log(this)
}
x()
// this the above function if the we use strict mode then we get undefined in console
// but if we do not use strict mode then we get window object its all depend on strict mode
// if th value of this keyword in undefined/null then it will be replace by
// global object only in non-strict mode

// this keyword inside an obj
// this keyword value depends on how the function is called
const student = {
    name:"ojas",
    printName:function() {
        console.log(this)
    }
}

student.printName()  //{name:ojas,printName:f()} now here this is reffering to student not to the global

// this inside an call-apply-bind method

// if i want to access printName method from student object but i want to use use 
// another object properties 
let student2 = {
    name:"amey"
}

student.printName(student2) 
// in student2 object we dont have an printname method that why i use call method so it can access of student obj properties using this

// this inside arrow functions

// arrow functions don't provide their own this binding
//  (it retains the this value of the enclosing lexical context).
const obj = {
    a:10,
    x: () => {
        console.log(this)
    }
}

obj.x() // in here x is called at global level so value of this is in global object


// this inside an nested arrow function

const obj2 = {
    a:20,
    x: function()  {
        // enclosing lexial context
        const y = () => {
            console.log(this)
        }
      y()
    }
}

obj2.x() // if you want call the arrow function in obj and get the properties 
// of obj then you have to enclose with the another function like here we use x()
// then it will refer to obj2 properties