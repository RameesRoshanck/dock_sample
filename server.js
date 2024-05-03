const express = require('express')

const app =express()

app.get("/",(req,res)=>{
    res.send("Hello world")
})

let pot =3000

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})