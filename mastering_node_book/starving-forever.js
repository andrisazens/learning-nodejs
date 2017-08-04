var stop = false;
setTimeout(function() {
    // will never call timeout
    console.log("executing timeout")
    stop = true;
}, 1000);
console.log("start loop");
while(stop === false) {};