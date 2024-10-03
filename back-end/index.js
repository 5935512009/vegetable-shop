require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();


//Middlewares
app.use(express.json());
app.use(cors());




app.get('/test', async (req,res)=>{
    res.json("Hello world");
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})