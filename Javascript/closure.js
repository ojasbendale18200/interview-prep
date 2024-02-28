// A closure is a function that has access to its outer function scope even after the 
// function has  returned. Meaning, A closure can remember and access variables and arguments
// reference of its outer function even after the function has returned.

// 1st Example
function x() {
    var a = 7;
    function y() {
    console.log(a);
    }
    return y;
   }
var z = x();
console.log(z()); 

// 2nd Example
// assume there is two button in htmls document which has an id orange and green

function clickHandler(color){
    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("orange").onclick = clickHandler("orange")
document.getElementById("green").onclick = clickHandler("green")



// In above code, When y is returned, not only is the function returned but the entire closure 
// (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else 
// in program, it still remembers var a inside x()