const path = require("path"); // /folder/files.jpg

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "abc.png"));
  // res.send("<ul><li>Hello from Sailesh </li></ul>");
}

function postMessages(req, res) {
  res.send("Updating Messages");
}

module.exports = {
  getMessages,
  postMessages,
};
