const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/miraclelab"){
        req.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><title>Miracle Lab</title></head></html>");
        res.write("<h1>Mirale lab page</h1>");
        res.end()
        
    }if(req.url==="/"){
        req.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><title>Home</title></head></html>");
        res.write("<h1>Welcome to the Home</h1>");
        res.end()
        
    }
    
    if(req.url==="/about-us"){
        req.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><title>about us</title></head></html>");
        res.write("<h1>About us</h1>");
        res.end()
    }else{
        req.statusCode=400;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><title>Page not found</title></head></html>");
        res.write("<h1>There nothing here anda pa alla !!</h1>");
        
    }
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})