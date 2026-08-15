import http from "http";

// Temporary Database
// Abhi Array use kar rahe hain.
// Real Projects me MongoDB / MySQL use hota hai.

const Database = [
    { name: "Harshal", age: 20, email: "harshal@gmail.com", amount: 1000 },
    { name: "Deepak", age: 22, email: "deepak@gmail.com", amount: 2500 },
    { name: "Alok", age: 24, email: "alok@gmail.com", amount: 5000 }
];


// Browser / Postman jab bhi request bhejega,
// ye callback function execute hoga.
const server = http.createServer((req, res) => {

    // HTTP Methods
    // GET    -> Data Read Karna
    // POST   -> Naya Data Create Karna
    // PATCH  -> Kuch Fields Update Karna
    // PUT    -> Pura Data Replace Karna
    // DELETE -> Data Delete Karna


    // ======================= POST =======================
    // Naya User Database me Add Karna

    if (req.method == "POST" && req.url == "/user") {

        // Request Body ek baar me nahi aati.
        // Data Chunks (Pieces) me aata hai.
        // Isliye pehle empty string banayi.
        let body = "";

        // Jab tak data aata rahe,
        // usko body me add karte jao.
        req.on("data", (chunk) => {

            body += chunk;

            // Agar bahut badi file (Movie, PDF etc.) ho,
            // to RAM me store nahi karte.
            // Direct Secondary Storage me bhej dete hain.

        });


        // Jab pura data aa jaye,
        // tab ye callback execute hoga.
        req.on("end", () => {

            // Body JSON String me hoti hai.
            // Use JavaScript Object me convert kiya.
            const user = JSON.parse(body);

            // User ko Database me Add Kar Diya.
            Database.push(user);

            // Client ko Response bhej diya.
            res.end("User Created Successfully");

        });

        return;
    }


    // ======================= GET =======================
    // Database ke Sare Users Return Karna

    else if (req.method == "GET" && req.url == "/user") {

        // JavaScript Object ko
        // JSON String me Convert kiya.
        //
        // null -> Koi Replacer nahi.
        // 2    -> Pretty Formatting (Indentation)
        res.end(JSON.stringify(Database, null, 2));

        return;
    }

        // ======================= PATCH =======================
    // Existing User ki Sirf Required Fields Update Karna

    else if (req.method == "PATCH" && req.url == "/user") {

        // Request Body Chunks me Aati Hai.
        // Isliye Empty String Banayi.
        let body = "";

        // Jab Tak Data Aata Rahe,
        // Body Me Add Karte Jao.
        req.on("data", (chunk) => {

            body += chunk;

        });


        // Jab Pura Data Aa Jaye,
        // Tab Callback Execute Hoga.
        req.on("end", () => {

            // JSON String ko JavaScript Object me Convert Kiya.
            const user = JSON.parse(body);

            // Email ke Basis par User Search Kiya.
            const findUser = Database.find((u) => u.email == user.email);

            // Agar User Database me Nahi Mila.
            if (!findUser) {

                res.end("User Not Found");

                return;

            }

            // Jitni Fields Request Me Aayi Hain,
            // Sirf Unko Update Kar Do.
            Object.assign(findUser, user);

            // Same Kaam Manually Bhi Kar Sakte Hain.
            // for (const [key, value] of Object.entries(user)) {
            //     findUser[key] = value;
            // }

            res.end("User Information Updated Successfully");

        });

        return;
    }


    // ======================= DELETE =======================
    // Email ke Basis par User Delete Karna

    else if (req.method == "DELETE" && req.url == "/user") {

        // Request Body Chunks me Aati Hai.
        let body = "";

        req.on("data", (chunk) => {

            body += chunk;

        });


        // Jab Pura Data Aa Jaye,
        // Tab Callback Execute Hoga.
        req.on("end", () => {

            // JSON String ko JavaScript Object me Convert Kiya.
            const user = JSON.parse(body);

            // Email ke Basis par User Search Kiya.
            const index = Database.findIndex((u) => u.email == user.email);

            // Agar User Nahi Mila.
            if (index == -1) {

                res.end("User Not Found");

                return;

            }

            // User ko Database Se Remove Kar Diya.
            Database.splice(index, 1);

            res.end("User Deleted Successfully");

        });

        return;
    }

        // ======================= BASIC HTTP METHODS =======================
    // Sirf HTTP Methods ko Samajhne ke Liye.
    // Inka CRUD se Koi Relation Nahi Hai.
    // Isliye Alag Route (/demo/user) Use Kiya Hai.

    else if (req.method == "GET" && req.url == "/demo/user") {

        res.end("Hello Coder Army");

        return;
    }

    else if (req.method == "POST" && req.url == "/demo/user") {

        res.end("User Data Created Successfully");

        return;
    }

    else if (req.method == "PATCH" && req.url == "/demo/user") {

        res.end("User Data Patched Successfully");

        return;
    }

    else if (req.method == "PUT" && req.url == "/demo/user") {

        // PUT ka Matlab Hai Pura Resource Replace Karna.
        res.end("User Data Put Successfully");

        return;
    }

    else if (req.method == "DELETE" && req.url == "/demo/user") {

        res.end("User Data Deleted Successfully");

        return;
    }


    // ======================= INVALID ROUTE =======================
    // Agar Upar Diye Gaye Kisi Bhi Route Se Match Nahi Hua,
    // To Ye Else Block Execute Hoga.

    else {

        res.end("Invalid URL");

    }

});


// ======================= START SERVER =======================
// Server ko Port 3000 par Start Kiya.

server.listen(3000, () => {

    console.log("Server is Listening at PORT 3000");

});