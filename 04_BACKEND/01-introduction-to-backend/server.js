// ========================= Create Your First HTTP Server =========================

// Agar hume server create karna ho to Node.js me built-in 'http' module use karte hain.
// Internally networking ka low-level implementation C/C++ me hota hai.
// Node.js uske upar ek easy API (http module) provide karta hai,
// jisse hum aasani se HTTP server create kar sakte hain.

const http = require('http');

// createServer() ek Server Object return karta hai.
// Is callback ko turant execute nahi kiya jata,
// balki Server Object ke andar store kar diya jata hai.
//
// Jab bhi Browser, Postman ya koi bhi client HTTP request bhejta hai,
// tab Node.js isi stored callback ko execute karta hai.

const server = http.createServer((request, response) => {
    console.log("Hello Harshal");

    // Client ko response bhejna zaroori hota hai,
    // warna request pending (loading) state me rahegi.
    response.end("Hello Harshal, This is your first HTTP Server");  // response.end() --> res ko close kar deta hai iske baad me koi bhi res.write() ya res.end() execute nahi hoga
    response.end("Hellow bhai kaise ho");
});

// Server ko kisi specific port par start (listen) karna padta hai,
// taaki us port par aane wali HTTP requests ko accept kar sake.
//
// Jab koi client Port 3000 par request bhejta hai,
// to sabse pehle Operating System (OS) us request ko receive karta hai.
// Fir OS us request ko Node.js ke Server Object tak pahunchata hai.
// Uske baad Node.js Server Object ke andar store createServer() wale callback function ko execute karta hai.

server.listen(3000, () => {
    // Ye callback sirf ek baar execute hota hai,
    // jab server successfully Port 3000 par start ho jata hai.
    console.log("Server is Listening at Port number 3000");
});

// Summary:
// server.listen() → Server ko OS ke saath Port 3000 par bind karke start karta hai.
// createServer() callback → Har incoming HTTP request par execute hota hai.
// Browser request bhejta hai → OS receive karta hai → Node.js callback execute karta hai → Response client ko bheja jata hai.