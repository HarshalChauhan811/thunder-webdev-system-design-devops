const http = require("http");

const server = http.createServer((req, res) => {

    console.log("Method :", req.method);
    console.log("URL    :", req.url);
    console.log("Headers:", req.headers);

    res.end("Hello Harshal");
});

server.listen(3000, () => {
    console.log("Server Started");
});