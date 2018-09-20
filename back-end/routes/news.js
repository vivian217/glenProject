const express=require("express");
var query=require("../query");
var router=express.Router();
router.get("/",(req,res)=> {
  var output={
    pno:req.query.pno || 1,
    pSize:10,//每页显示数据条数
    count:0,
    pTotal:0,
    data:[]
  };
  var sql="SELECT id,title,date,detail FROM glen_news";
  query(sql,[]).then(result=>{
    output.count=result.length;
    output.pTotal=Math.ceil(output.count/output.pSize);
    var offset=parseInt((output.pno-1)*output.pSize);
    sql+=" LIMIT ?,?";
    return query(sql,[offset,output.pSize]);
  }).then(data=>{
    output.data=data;
    res.send(output);
  })
});
router.get("/detail",(req,res)=>{
  var id=req.query.id;
  var sql="SELECT id,title,date,detail,(SELECT MAX(id) FROM glen_news WHERE id<?) AS prevId,(SELECT title FROM glen_news WHERE id=(SELECT MAX(id) FROM glen_news WHERE id<?)) AS prevTitle,(SELECT MIN(id) FROM glen_news WHERE id>?) AS nextId,(SELECT title FROM glen_news WHERE id=(SELECT MIN(id) FROM glen_news WHERE id>?)) AS nextTitle FROM glen_news WHERE id=?";
  query(sql,[id,id,id,id,id]).then(result=>{
    res.send(result);
  })
});
module.exports=router;
