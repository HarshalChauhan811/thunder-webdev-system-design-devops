// Raw Node.js me bahut saara code manually likhna padta tha.
// Express.js usi code ko easy aur short bana deta hai.

// Express.js, Node.js ke upar bana hua ek Web Framework hai.
// Ye Node.js ko replace nahi karta, bas wrapper ki tarah kaam karta hai.

import express from "express";


// Raw Node.js me server banate the,
// Express.js me uski jagah app use karte hain.
const app = express();


// app.use() ek Middleware register karta hai.
// Middleware matlab kisi bhi Request ko Route tak pahunchne se pehle
// ye code execute hoga.

// express.json() Body me aaya JSON Data
// automatically JavaScript Object me convert karke
// req.body me store kar deta hai.

// Raw Node.js me req.on("data"), req.on("end")
// aur JSON.parse() manually likhte the,
// Express.js me express.json() ye sab automatically kar deta hai.

// Ye GET, POST, PUT, PATCH, DELETE
// sabhi requests ke liye kaam karega.
app.use(express.json());


// ======================= GET =======================

app.get("/users", (req, res) => {

    res.send("This is GET Request");

});


// ======================= POST =======================

app.post("/users", (req, res) => {

    // Client ne Body me jo Data bheja hai,
    // wo req.body se access kar sakte hain.
    console.log(req.body);

    res.send("POST Request Successfully");

});


// ======================= PUT =======================

app.put("/users", (req, res) => {

    console.log(req.body);

    res.send("PUT Request Successfully");

});


// ======================= PATCH =======================

app.patch("/users", (req, res) => {

    console.log(req.body);

    res.send("PATCH Request Successfully");

});


// ======================= DELETE =======================

app.delete("/users", (req, res) => {

    console.log(req.body);

    res.send("DELETE Request Successfully");

});


// Server ko Port 3000 par Start Kiya.
app.listen(3000, () => {

    console.log("I am Listening at PORT 3000");

});