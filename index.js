const express = require('express');

const app = express();


const PORT = process.env.PORT || 3000;




app.get("/",(req,res)=> {
    return res.send("hellow, what's up!!🚀");
});

app.get("/ping",(req,res)=> {
    return res.send("pong");
});



app.listen(PORT, ()=> {
    console.log(`app walking at ${PORT}`);
})