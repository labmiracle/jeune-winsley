const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/queHacemos") {
    console.log("I am here")
    serverStaticFile(res, "./queHacemos.html");
  } else if (req.url === "/quienesSomos") {
    serverStaticFile(res, "./quienesSomos.html");
  } else if (req.url === "/contacto") {
    serverStaticFile(res, "./contacto.html");
  } else {
    serverStaticFile(res, "./404.html", 404);
  }
});

function serverStaticFile(res, fileName, statusCode = 200) {
  const filePath = path.join(fileName);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Server error</h1>");
      return;
    }

    res.statusCode = statusCode;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
}

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
