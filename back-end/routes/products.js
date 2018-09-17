const express=require("express");
var router=express.Router();
var query=require("../query");
router.get("/",(req,res)=>{
  var kw=req.query.kw;
  var output={
    fid:req.query.fid || "",
    count:0,//总共数据条数
    pno:req.query.pno || 1,//当前页码数，默认为第一页
    pSize:10,//每页显示数据
    pageCount:0,//总共页数
    data:[]//每页的数据
  };
  var sql="SELECT pid,fid,title,subtitle,(SELECT pic FROM glen_products_pic WHERE glen_products_pic.pid = glen_products.pid LIMIT 1) as pic FROM glen_products";
  query(sql,[]).then(result=>{
    output.count=result.length;
    output.pageCount=Math.ceil(output.count/output.pSize);
    if(!output.fid){
      sql+=" LIMIT ?,?";
      return query(sql,[(output.pno-1)*output.pSize,output.pSize]);
    }else{
      sql +=" WHERE fid=? LIMIT ?,?";
      return query(sql,[output.fid,(output.pno-1)*output.pSize,output.pSize]);
    }
  })
  .then(result=>{
      output.data=result;
      res.send(output);
    });
});
module.exports=router;