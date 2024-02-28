// var a = 100;
{
 var a = 10; // same name as global var
 let b = 20;
 const c = 30;
 console.log(a); // 10
 console.log(b); // 20
 console.log(c); // 30
}
console.log(a); // 10, instead of the 100 we were expecting. So block "a"
// modified val of global "a" as well. In console, only b and c are in block
// space. a initially is in global space(a = 100), and when a = 10 line is
// run, a is not created in block space, but replaces 100 with 10 in global
// space itself.
// So, If one has same named variable outside the block, the variable inside the block shadows the
// outside variable. This happens only for var


console.log(1)

setTimeout(()=> {
    console.log(2)
},0)

