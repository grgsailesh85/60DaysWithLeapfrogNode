const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
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
  if (req.url === "/") {
    // res.writeHead(200, {
    // "Content-Type": "text/plain",
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    //   res.end("Hello! My name is Sailesh Gurung");
    res.end(
      JSON.stringify({
        id: 1,
        name: "Saileh Gurung",
      })
    );
  } else if (req.url === "/messages") {
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
  console.log(`Lsitening on port ${PORT}.....`);
});
