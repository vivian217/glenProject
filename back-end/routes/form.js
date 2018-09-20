const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.get("/email",(req,res)=>{
  var email=req.query.email;
  var sql="SELECT id FROM glen_email WHERE email=?";
  pool.query(sql,[email],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:0,msg:"您已订阅，请勿重复订阅"});
      return;
    }else{
      sql="INSERT INTO glen_email VALUES(null,?,now())";
      pool.query(sql,[email],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"订阅成功！"});
      })
    }
  });

});
router.get("/feedback",(req,res)=>{
  var email=req.query.email;
  var content=req.query.content;
  var sql="INSERT INTO glen_feedback VALUES(null,?,?,now())";
  pool.query(sql,[email,content],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"已收到您的反馈，我们会尽快给您回复..."});
  })
});
router.get("/inquery",(req,res)=>{
  var uname=req.query.uname;
  var email=req.query.email;
  var phone=req.query.phone;
  var company=req.query.company;
  var title=req.query.title;
  var content=req.query.content;
  var sql="INSERT INTO glen_inquery VALUES(null,?,?,?,?,?,?,now())";
  pool.query(sql,[uname,email,phone,company,title,content],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"已收到您的询价，我们会尽快将报价单发给您..."});
  })
});
module.exports=router;