const http = require("http");

const server = http.createServer((req, res) => {
    console.log(`Your server is running on port 3000`);
    console.log(`Let's see what are the stuff "req" does have!`);
    console.log(req);
});

server.listen(3000);
