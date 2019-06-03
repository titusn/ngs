const theOneFunc = timeout => {
    console.log("Hello after " + timeout/1000 + " seconds"); 
};

// Hello after 4 seconds
let timeout = 4000;
setTimeout(theOneFunc, timeout, timeout);

// Hello after 8 seconds
timeout = 8000;
setTimeout(theOneFunc, timeout, timeout);

// You can define only ONE function
