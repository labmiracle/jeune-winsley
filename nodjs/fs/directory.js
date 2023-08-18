const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    const filePath = path.join(__dirname, "vista", "about.html");

    fs.readFile(filePath, "utf-8", (err, fileContent) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Server error</h1>");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(fileContent); 
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Not Found</h1>");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
