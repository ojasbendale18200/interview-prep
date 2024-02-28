function debounce(func, delay) {
  let timeputId;
  return function (...arg) {         //here ...args means input type by user  eg:- nirv...
    //in arg the is input event that target the value
    if (timeputId) {
      clearTimeout(timeputId);       //-------1
    }
    timeputId = setTimeout(() => {    //------2
      func.call(this, ...arg);
    }, delay);
  };
}

//this debounce function is work like 
//if user has type n then it will check if there has an value in timoutid bcz its firstTime call the value is undefined then it will got into 2 nd function call and wait for the 3 sec delay before 3 sec if user has type i letter then it check for the 1 st call it find this time timoutId has an value then it will cancel previous function call and again call for the 2nd fucntion call

function findSuggestions(e) {
  console.log("suggestions for", e.target.value);
}

const decoretedFindsuggestions = debounce(findSuggestions, 300);

// event listner
const myInput = document.getElementById("input-event");
myInput.addEventListener("input", decoretedFindsuggestions);
