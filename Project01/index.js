//Imports the parse function from the csv-parse library to convert CSV data into JavaScript objects.
const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

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
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })

  //Displays an error message if something goes wrong while reading or parsing.
  .on("error", (err) => {
    console.log(err);
  })

  //Prints the collected data and a "done" message when file reading and parsing are complete.
  .on("end", () => {
    console.log(
      habitablePlanets.map((planet) => {
        return planet["kepler_name"];
      })
    );
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });
