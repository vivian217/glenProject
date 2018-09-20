const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
var app=express();
app.listen(6060);
//引入路由
var index=require("./routes/index");
var prodetail=require("./routes/prodetail");
var products=require("./routes/products");
var news=require("./routes/news");
var info=require("./routes/info");
var form=require("./routes/form");
app.use(cors({
  origin:['http://127.0.0.1:8080', 'http://localhost:8080'],
  credentials:true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("../myproject"));
//挂载路由
app.use("/index",index);
app.use("/prodetail",prodetail);
app.use("/pro",products);
app.use("/news",news);
app.use("/info",info);
app.use("/form",form);