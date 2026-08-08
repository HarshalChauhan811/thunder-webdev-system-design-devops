const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

   
    // Step 1 : Parse the Incoming URL from -->  req.url
    // Example:  /add?num1=10&num2=20
    /*
    url.parse(req.url, true)  

    pathname -> /add

    query -> {
        num1: "10",
        num2: "20"
    }
    */

    const parsed = url.parse(req.url, true);

    
    // Step 2 : Extract Operation --> pathname = "/add"
    // slice(1) removes '/'
    // operation = "add"
    

    const operation = parsed.pathname.slice(1);

    
    // Step 3 : Extract Query Parameters

    // query = {
    //     num1 : "10",
    //     num2 : "20"
    // }

    // Number() converts string into number.
    

    const num1 = Number(parsed.query.num1);
    const num2 = Number(parsed.query.num2);

   
    // Step 4 : Perform Requested Operation
   
    if (operation === "add") {

        // Addition
        res.end(JSON.stringify({result: num1 + num2}));

    } else if (operation === "sub") {

        // Subtraction
        res.end(JSON.stringify({result: num1 - num2}));

    } else if (operation === "mul") {

        // Multiplication
        res.end(JSON.stringify({result: num1 * num2}));

    } else {

        // Division
        res.end(JSON.stringify({result: num1 / num2}));
    }
});

/*
Start Server --> Server listens on Port 3000

Visit:
http://localhost:3000/add?num1=10&num2=20
*/

server.listen(3000, () => {
    console.log("🚀 Server is listening on PORT 3000");
});