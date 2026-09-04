const express = require("express")

const app = express();
 app.use(express.json())

 const ganjaArr = [
     {
    ganja: "weed",
    rate: "400 ki pudia",
  },
  {
    ganja: "maal",
    rate: "500 ki pudia",
  },
  {
    ganja: "lekha",
    rate: "350 ki pudia",
  },
  {
    ganja: "golmal",
    rate: "700 ki pudia",
  },
  {
    ganja: "charas",
    rate: "200 ki pudia",
  },

 ];



app.post("/", (req, res) => {
  try {
    let { ganja, rate } = req.body;

    if (!ganja || !rate) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    ganjaArr.push({
      ganja,
      rate,
    });

    return res.status(201).json({
      success: true,
      message: "Ganja rakh liya",
      data: { ganja, rate },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.get("/ganja",(req,res)=>{
     try {
        return res.status(200).json({
            success: true,
            message: "data fetched successfully",
            data: ganjaArr,
        })
     } catch (error) {
         return res.status(500).json({
        success: false,
         message: "Internal server error",
    });
     }
})

app.patch("/update-data/:id",(req,res)=>{
    let {id} = req.params
    let {ganja,rate} = req.body
    if(!ganja || !rate)
        return res.status(400).json({
    success : false,
    message: "pls send updated data"
})
   let updatedData = ganjaArr.find((elem)=> elem.ganja === id )

   if(!updatedData) return res.status(404).json({
     success: false,
     message: "Data not found with that id"
   })
   updatedData.ganja = ganja
   updatedData.rate = rate

   return res.status(200).json({
    success: true,
    message: "data updated",
    data : ganjaArr,
   })
})






app.listen(3000, (req,res)=>{
    console.log("server is runing on port 3000")
})