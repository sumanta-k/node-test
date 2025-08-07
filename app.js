const http = require("http");

/* creating a different function that will work as handler */
function reqHandler(req, res) {
    console.log(req);
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<meta charset='utf-8'>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Hello From Homepage!</h1>");
    res.write("</body>");
    res.write("</html>");
    /* make sure to end your res.write() , cause your server is still thinking that you are still serving , and when you hit that URL you won't get anything cause , your server is still thinking that it is serving */
    res.end();
}
const server = http.createServer(reqHandler);

server.listen(3000, () => {
    console.log("print the base, the main entrypoint of your application.");
    console.log(__filename);

    console.log(
        "What is the Module name! inside your main entrypoint file reside.",
    );
    console.log(__dirname);
});
