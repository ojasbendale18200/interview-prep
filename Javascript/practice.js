// practical - 1
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }


    greet() {
        return `${this.name} is ${this.age}`
    }
}

let func1 = new Person("ojas",18);
console.log(func1.greet())

// practical - 2

let func2 = new Person("chandan",16);
let func3 = new Person("leena",40);
console.log(func2.greet());
console.log(func3.greet())

// practical - 3
class Student extends Person {
   constructor(name,age,grade){
     super(name,age)
     this.grade = grade
   }

   greet() {
    return `${this.name} is ${this.age} and has grade ${this.grade}`
   }
}

let func4 = new Student("shiva",20,9.7) 
console.log(func4.greet())