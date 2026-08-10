const http = require('http'); // Node js ko bol rhe --> Mujhe HTTP server banana hai.
const url = require('url');


// jab bhi browser server ko request karega yah fn chalega (req,res)=>{}
const server = http.createServer((req,res)=> {

    console.log(req.url); // Browser jo bhi url deta hai req.url me de deta hai  --> /add?a=10&b=20
    
    // localhost:2000/add?a=10&b=20 ye url hit krne pe output
    const parsed = url.parse(req.url, true); // true --> Query ko object banane ke liye.

    // parsed ek object hai
    // Url {
    //     pathname: '/add',
    //     query: {
    //         a:'10',
    //         b:'20'
    //     }
    // }

    console.log(parsed.pathname);
    console.log(parsed.query);
    console.log(parsed.query.a);
    console.log(parsed.query.b);


    // String ko Number me convert kiya.
    const a = parseInt(parsed.query.a, 10);
    const b = parseInt(parsed.query.b, 10);

    console.log(a);
    console.log(b);


    // Route ko store kiya.
    // "/add" -> "add"
    const operation = parsed.pathname.slice(1);

    console.log(operation);


    // Addition
    if (operation === "add") {

        const a = parseInt(parsed.query.a, 10);
        const b = parseInt(parsed.query.b, 10);

        const ans = a + b;

        res.end(ans.toString());
        // Browser number samajhta hai. Problem browser ki nahi hai. res.end() se HTTP response bhejna hota hai, aur usme string ya Buffer bhejna best practice hai. Isliye toString() use karte hain.

        return;
    }


    // Substraction
    else if (operation === "sub") {

        const ans = a - b;

        res.end(ans.toString());

        return;
    }


    // Multiply
    else if (operation === "multiply") {

        const ans = a * b;

        res.end(ans.toString());

        return;
    }


    // Divide
    else if (operation === "divide") {

        if (b === 0) {
            res.end("Cannot Divide By Zero");
            return;
        }

        const ans = a / b;

        res.end(ans.toString());

        return;
    }


    // Invalid Route aaye tab 
    else {

        res.end("Invalid Route");

        return;
    }

});


// Server ko start kare
server.listen(2000,()=> {
    console.log("Server is Listening at Port 2000");
});