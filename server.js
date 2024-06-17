import express from 'express';

const app = express();
const port = 3000
app.get("/",(req, res)=>{
    res.send("You are in AWS cloud service, My name is Shashi :)..");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
