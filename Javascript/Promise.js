
function kallu() {
let n = 3
return new Promise((resolve,reject) => {
    if(n%2 == 0) {
        resolve("successfull")
    } else {
        reject("error")
    }
})
}

kallu().then((data) => console.log(data)).catch((err) => console.log(err))