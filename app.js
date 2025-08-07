const http = require("http");

const server = http.createServer((req, res) => {
    res.write("<!DOCTYPE>");
    res.write("<html>");
    res.write("<head><meta charset='utf-8'>");
    res.write("<body><h1>Hello World!</h1></body>");
    res.write("</html>");
    res.end();

    console.log(`Your server is running on port 3000`);
});

server.listen(3000);
