const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.get("/",(req,res)=>{
  var pid=req.query.pid;
  var output={};
  var sql1="SELECT pid,fid,title,subtitle,details FROM glen_products WHERE pid=?";
  pool.query(sql1,[pid],(err,result)=>{
    if(err)throw err;
    output.specs=result;
  });
  var sql2="SELECT id,pic FROM glen_products_pic WHERE pid=?";
  pool.query(sql2,[pid],(err,result)=>{
    if(err)throw err;
    output.pics=result;
    res.send(output);
  });
});
module.exports=router;