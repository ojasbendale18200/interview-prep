// Lexical Environement is
// the local memory along with the lexical environment of its parent

// The process of going one by one to parent and checking for values is called scope chain or Lexcial
// environment chain


function a() {
    c();
    function c() {
    var b = 100;            //if this b is not there then it will take the value of global envirnment that is var b = 10
    console.log(b); // 100
    }
   }
   var b = 10;
   a();
   
