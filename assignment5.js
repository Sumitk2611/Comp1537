// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// just like a simple web server like Apache web server
// we are mapping file system paths to the app's virtual paths
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));
app.use("/font", express.static("./public/font"));

app.get("/", function (req, res) {
    console.log(process.env);
    // retrieve and send an HTML document from the file system
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);


});
app.get("/data/table", function (req, res) {
    let doc = fs.readFileSync("./app/data/popsongtable.html", "utf-8");
    res.send(doc);
});

app.get("/data/info", function (req, res) {
    let doc = fs.readFileSync("./app/data/info.json")
    res.send(doc);
});

app.get("/data/rocksongtable", function (req, res) {
    let doc = fs.readFileSync("./app/data/rocksongtable.html", "utf-8");
    res.send(doc);
});

app.get("/data/jazztable", function(req,res) {
    let doc = fs.readFileSync("./app/data/jazztable.html", "utf-8");
    
    res.send(doc);
});

app.get("/data/hiphoptable", function(req,res){
    let doc = fs.readFileSync("./app/data/hiphoptable.html", "utf-8");
    res.send(doc);
});

app.get("/data/homeimg", function(req, res) {
    let doc = fs.readFileSync("./app/data/homeimg.html", "utf-8")
    res.send(doc);
})

let port = 8000;
app.listen(port, function () {
    console.log(" App listening on port " + port + "!");
});