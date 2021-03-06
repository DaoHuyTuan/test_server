const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries")
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.options('*', cors());
app.use(
    bodyParser.urlencoded({
        extended:true,
        limit:"50mb"
    })
    ,bodyParser.json({
        limit:"50mb"
    })
)
app.get("/",db.getData)
app.post("/send",db.sendData)
app.listen(port, () => {
    console.log("server is runing on port " + port)
})
