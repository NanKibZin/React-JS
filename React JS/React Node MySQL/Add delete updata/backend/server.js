// const express=require("express")
// const cors=require("cors")
// const mysql=require("mysql")
// const app=express();
// app.use(cors())

// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"db_test"
// })
// app.get("/information",(req,res)=>{
//     const sql="SELECT * FROM information";
//     db.query(sql,(err,data)=>{
//         if(err) return res.json("error");
//             return res.json(data)
//     })
// })
// app.listen(8081,()=>{
//     console.log("localhost:8081");
// })

// const express = require("express");  //it is libary mysql
// const cors = require("cors");
// const mysql = require("mysql");   //modul it is libary mysql
// const app = express();
// app.use(express.json());
// app.use(cors());
// const db = mysql.createConnection({   //it connecttion it can communicate with database server and have right to access to database server ban and it can allow us push data from database insert update delete data to database server
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "db_test",
// });
// // we use query to push monify data insert data from database server
// app.get("/", (req, res) => {
//   const sql = "SELECT * FROM student";    
//   db.query(sql, (err, data) => {
//     if (err) return res.json("error");
//     return res.json(data);
//   });
// });
// app.post("/create", (req, res) => {
//   const sql = "INSERT INTO student (`Name`,`Email`) VALUES(?)";
//   const values = [req.body.name, req.body.email];
//   db.query(sql, [values], (err, data) => {
//     if (err) return res.json("Error");
//     return res.json(data);
//   });
// });
// app.put("/update/:id", (req, res) => {
//   const sql = "update student set `Name`=?, `Email`=? where ID=?";
//   const values = [req.body.name, req.body.email];
//   const id=req.params.id;
//   db.query(sql, [...values,id], (err, data) => {
//     if (err) return res.json("Error");
//     return res.json(data);
//   });
// });
// app.delete("/student/:id", (req, res) => {
//   const sql = "DELETE FROM student WHERE ID=?";
// //   const values = [req.body.name, req.body.email];
//   const id=req.params.id;
//   db.query(sql, [id], (err, data) => {
//     if (err) return res.json("Error");
//     return res.json(data);
//   });
// });
// app.listen(8081, () => {
//   console.log("localhost:8081");
// });

const express=require("express");
const cors=require("cors")
const mysql=require("mysql");
const app=express();
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_test"
})
app.get("/",(req,res)=>{
    const sql="SELECT * FROM information";
    db.query(sql,(err,data)=>{
        if(err) return res.json(data)
            return res.json(err)
    })
})
app.listen(8081,()=>{
        console.log("localhost:8081");
 })