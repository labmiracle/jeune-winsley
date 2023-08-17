const http = require('http');

const server = http.createServer((req, res) => {  
  if (req.url==="favicon.ico") {
    res.statusCode=204;
    res.end();
    return
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<html><head><title> Node js server bing bang</title></head></html>");
  res.write("<h1>Hello this a title</h1>");
  res.write(`<p> The url is: ${req.url}</p>`);
  //console.log(req);
  console.log(req.url)
  res.end('Hello, this is my server!');
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});