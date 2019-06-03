// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter = 0;

const HelloWorld = () => {
    counter++;
    if (counter <= 5) {
        console.log("Hello World!");
    } else {
        console.log("Done");
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(HelloWorld, 1000);