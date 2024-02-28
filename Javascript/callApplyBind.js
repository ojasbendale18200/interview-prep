


let name1 = {
    firstName:"ojas",
    lastName : "Bendale",
    
}
let printFullName = function(homeTown,pin) {
    console.log(`${this.firstName} ${this.lastName} ${homeTown} ${pin}`)
  }

let name2 = {
    firstName:"sachin",
    lastName:"Tendulkar"
}

// The call method is used to invoke a function with a specified this value and individual arguments passed one by one.
// It allows you to set the this value explicitly and pass arguments to the function.
printFullName.call(name1,"mumbai","424294")

// Similar to call, the apply method is used to invoke a function with a 
//  specified this value, but it takes an array or an array-like object 
//  as the second argument, allowing you to pass multiple arguments.
printFullName.apply(name2, ["pune","425302"])


// The bind method creates a new function with the same body as the original function 
// but with a fixed this value and, optionally, pre-specified arguments.
// It returns a new function that, when called, has its this value set to the provided value,
//  and any additional arguments are fixed.
let newFunc = printFullName.bind(name2, "pune","425302")
newFunc()