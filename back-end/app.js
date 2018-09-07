const express=require("express");
const bodyParser=require("body-parser");
var app=express();
app.listen(5050);
//引入路由
var index=require("./routes/index");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("../myproject"));
//挂载路由
app.use("/index",index);