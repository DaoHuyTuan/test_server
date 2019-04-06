const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries")
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)
app.get("/",db.getData) 
app.listen(port, () => {
    console.log("server is runing on port " + port)
})