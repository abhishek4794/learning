
setImmediate(() => {
    console.log("Inside setImmediate");
});
setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);
/*
process.nextTick(()=>{
    console.log("Inside process tick");
});*/




//index.js
const fs = require('fs');
fs.readFile("package.json", function () {
    setTimeout(function () {
        console.log("SETTIMEOUT");
    });
    setImmediate(function () {
        console.log("SETIMMEDIATE");
    });
});

// Timer --> I/O callbacks phase --> idle, prepare phase (Internally) --> pole (checks new event ) --> check (setimmediate ) --> close callbacks (Socket connection close etc)
// next tick callback will be called after current process completes irrespective of phase