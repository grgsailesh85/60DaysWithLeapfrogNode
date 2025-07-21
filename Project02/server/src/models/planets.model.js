//Imports the parse function from the csv-parse library to convert CSV data into JavaScript objects.
const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const Planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          savePlanet(data);
        }
      })

      .on("error", (err) => {
        console.log(err);
        reject(err);
      })

      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets found!`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await Planets.find(
    {},
    {
      "_id": 0,
      "__v": 0,
    }
  );
}

async function savePlanet(planet) {
  try {
    // insert + update = upsert
    // upsert inserts if doesn't already exist
    // if filter doesn't exist, insert 2nd argument, otherwise do nothing
    await Planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        keplerName: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (error) {
    console.error(`Could not save planet ${error}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
  // savePlanet,
};
