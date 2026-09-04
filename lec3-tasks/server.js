const express = require("express")

const app = express()
app.use(express.json())
app.get("/datta",(req,res)=>{
    const data = [
        {
            name: "arnav",

        },
        {
            name: "ap"
        },
    ];
    res.send(data)
})
app.get("/greet",(req,res)=>{
    res.send("good morning ....bhai");

})

app.post("/bt",(req,res)=>{
     const body = req.body;
     res.send(body);


})













app.listen(3000, (req,res)=>{
    console.log("server is runing on port 3000")
})