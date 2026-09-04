const express = require("express")
const app  = express()

app.use(express.json());

let arr = [];

app.post("/getdata",(req,res)=>{
    let {clothes,rate,sell} = req.body;
     
     if(!clothes || !rate || !sell){
        res.send({
            message: "all fields are required..",
        
        });
 }
        arr.push({
            clothes,
            rate,
            sell,
        })
        res.send("ok data added");
    
});


app.get("/data",(req,res)=>{
    res.send(arr)
})











app.listen(5001,()=>{
    console.log("server is runing on port 5001")
})