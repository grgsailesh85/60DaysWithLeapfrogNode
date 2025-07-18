const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://nasa-api:9yTgYBAtn85XReUc@cluster0.hhh5gle.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0";

const server = http.createServer(app);

mongoose.connection.on("open", () => {
  console.log("MongoDB connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

async function startServer() {
  await mongoose.connect(
    MONGO_URL
    //   {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // }
  );
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
