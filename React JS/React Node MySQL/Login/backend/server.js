const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json({err:"login failed"});
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Faile");
    }
  });
});
app.listen(8081, () => {
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  });
});

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database configuration
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "signup"
// });

// // Connect to database
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// // Signup endpoint
// app.post("/signup", (req, res) => {
//     // Validate required fields
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({
//             error: "All fields are required"
//         });
//     }

//     const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
//     const values = [name, email, password];

//     db.query(sql, values, (err, result) => {
//         if (err) {
//             console.error('Error in signup:', err);
//             return res.status(500).json({
//                 error: "Error creating user",
//                 details: err.message
//             });
//         }

//         return res.status(200).json({
//             message: "User registered successfully",
//             userId: result.insertId
//         });
//     });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         error: "Something broke!",
//         details: err.message
//     });
// });

// // Start server
// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// // Handle database errors
// db.on('error', (err) => {
//     console.error('Database error:', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//         console.error('Database connection was closed.');
//     }
// });

// // Handle process termination
// process.on('SIGINT', () => {
//     db.end((err) => {
//         console.log('Database connection closed.');
//         process.exit(err ? 1 : 0);
//     });
// });
