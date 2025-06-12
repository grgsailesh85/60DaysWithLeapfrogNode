//Imports the parse function from the csv-parse library to convert CSV data into JavaScript objects.
const { parse } = require("csv-parse");
const fs = require("fs");
const results = [];
//Starts reading the kepler_data.csv file as a stream of data.
fs.createReadStream("kepler_data.csv")
  //Sends the file stream into the CSV parser, which skips lines starting with # and uses the first line as column names.
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  //Adds each parsed row of data into the results array as it’s read.
  .on("data", (data) => {
    results.push(data);
  })
  //Displays an error message if something goes wrong while reading or parsing.
  .on("error", (err) => {
    console.log(err);
  })
  //Prints the collected data and a "done" message when file reading and parsing are complete.
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
