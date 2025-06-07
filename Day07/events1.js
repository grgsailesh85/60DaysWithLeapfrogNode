const EventEmitter = require("events");
const celebrity = new EventEmitter();

//Subscribe to celebrity for observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congratulations! You are the best!");
  }
});

//Subscribe to celebrity for observer 2
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Boo I could have done better!");
  }
});

//It runs after all your code has finished, just before the program closes.
//"exit" is a special event that happens when the Node.js process is about to finish running.
//0 usually means everything went fine,Any other number means something went wrong
process.on("exit", (code) => {
  console.log("Process exit event with code", code);
});

celebrity.emit("race", "win");
celebrity.emit("race", "lost"); // this will not trigger any listeners

// This code uses EventEmitter to create a "race" event. Two listeners respond only if the result is "win". If the result is "lost", nothing happens. At the end, the program logs the exit code using process.on("exit").
