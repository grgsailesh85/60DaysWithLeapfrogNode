const EventEmitter = require("events");
const celebrity = new EventEmitter();

//Subscribe to celebrity for observer 1
celebrity.on("race win", () => {
  console.log("Congratulations! You are the best!");
});

//Subscribe to celebrity for observer 2
celebrity.on("race win", () => {
  console.log("Boo I could have done better!");
});


//It runs after all your code has finished, just before the program closes.
//"exit" is a special event that happens when the Node.js process is about to finish running.
//0 usually means everything went fine,Any other number means something went wrong
process.on("exit",(code) => {
    console.log('Process exit event with code', code)
})

celebrity.emit("race win");
celebrity.emit("race lost"); // this will not trigger any listeners
celebrity.emit("race win");  // trigger the event

// This code creates an event system where a "celebrity" wins a race. Two people (listeners) react to that event with different messages. When the event is triggered, both messages are shown. It shows how multiple reactions can happen to one event using Node.js.
