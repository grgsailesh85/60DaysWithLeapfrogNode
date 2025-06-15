const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // "Content-Type": "text/plain",
    "Content-Type": "application/json",
  });

  //   res.end("Hello! My name is Sailesh Gurung");
  res.end(
    JSON.stringify({
      id: 1,
      name: "Saileh Gurung",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Lsitening on port ${PORT}.....`);
});
