const path = require("path"); // /folder/files.jpg
const friends = require("../models/friends.model");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends",
    friends: "Sailesh Gurung"
  })
  // res.sendFile(path.join(__dirname, "..", "public", "images", "abc.png"));
  // res.send("<ul><li>Hello from Sailesh </li></ul>");
}

function postMessages(req, res) {
  res.send("Updating Messages");
}

module.exports = {
  getMessages,
  postMessages,
};
