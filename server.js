import express from 'express';

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello World! on CICD pipeline");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})