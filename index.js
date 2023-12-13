const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.routes");
const app=express();
app.use(cors())

app.use(express.json())
app.use("/users", userRouter);
// app.use(express.urlencoded({extended:false}))
app.get("/",async(req,res)=>{
    res.setHeader("Content-type", "text/html")
    res.send("<h1>Welcome to the Model</h1>")
})


const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("You are connected to Saregama");
    console.log(`Server is running on Port: ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
