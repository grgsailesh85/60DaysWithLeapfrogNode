const http = require("http");

const PORT = 3000;

const server = http.createServer();
const friends = [
  {
    id: 0,
    name: "Sailesh Gurung",
  },
  {
    id: 1,
    name: "Er. Sailesh Gurung",
  },
  {
    id: 2,
    name: "Mr. Sailesh Gurung",
  },
];
server.on("request", (req, res) => {
  const items = req.url.split("/"); // /friends/2 => ['', 'friends', '2']
  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Sailesh, How are you? </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.....`);
});
