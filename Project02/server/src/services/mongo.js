const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:9yTgYBAtn85XReUc@cluster0.hhh5gle.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connection.on("open", () => {
  console.log("MongoDB connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
    mongoConnect
}
