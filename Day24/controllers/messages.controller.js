function getMessages(req, res) {
  res.send("<ul><li>Hello from Sailesh </li></ul>");
}

function postMessages(req, res) {
  res.send("Updating Messages");
}

module.exports = {
  getMessages,
  postMessages,
};
