const http = require("http");
const url = require("url");

// In-Memory Database
const Database = [
    {
        name: "Harshal",
        age: 20,
        email: "Harshal@gmail.com",
    },
    {
        name: "Deepak",
        age: 22,
        email: "Deepak@gmail.com",
    },
];


// CRUD FUNCTIONS


// Create User
// New user ko Database me add karega.
function createUser(user) {
    // URL query params hamesha string hote hain.
    // Age ko number me convert karke store karenge.
    if (user.age) {
        user.age = parseInt(user.age, 10);
    }

    Database.push(user);
}

// Delete User
// Email match hone par user ko Database se remove karega.
function deleteUser(user) {
    for (let i = 0; i < Database.length; i++) {
        if (Database[i].email === user.email) {
            Database.splice(i, 1);
            break; // First match milte hi loop stop.
        }
    }
}

// Patch Update
// Sirf diye gaye fields ko update karega.
function patchUpdate(user) {
    for (let i = 0; i < Database.length; i++) {
        if (Database[i].email === user.email) {
            if (user.name) {
                Database[i].name = user.name;
            }

            if (user.age) {
                Database[i].age = parseInt(user.age, 10);
            }

            break;
        }
    }
}

// SERVER

const server = http.createServer((req, res) => {
    console.log(req.url);

    // URL parse karke query string ko object me convert karega.
    const parsed = url.parse(req.url, true);

    // Leading "/" remove kar denge.
    const operation = parsed.pathname.slice(1);

    // Delete User
    if (operation === "deleteUser") {
        deleteUser(parsed.query);
        res.end("User deleted successfully.");
        return;
    }

    // Create User
    if (operation === "createUser") {
        createUser(parsed.query);
        res.end("User created successfully.");
        return;
    }

    // Patch Update
    if (operation === "patchUpdate") {
        patchUpdate(parsed.query);
        res.end("User updated successfully.");
        return;
    }

    // Get All Users
    if (operation === "getUser") {
        res.end(JSON.stringify(Database));
        return;
    }

    // Default Route
    res.end("I am available.");
});

// START SERVER

server.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});


// For Request hit this url
// http://localhost:3000/

// http://localhost:3000/getUser

// http://localhost:3000/createUser?name=Rahul&age=25&email=rahul@gmail.com

// http://localhost:3000/deleteUser?email=rahul@gmail.com

// http://localhost:3000/patchUpdate?email=Harshal@gmail.com&name=HarshalChauhan&age=21
