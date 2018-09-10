const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.get("/",(req,res)=>{
    var sql="SELECT id,src,title,alt FROM glen_index_carousel";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/products",(req,res)=>{
    var sql="SELECT id,title,details,img,alt FROM glen_index_products";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/hotPro",(req,res)=>{
    var sql="SELECT id,title,img,alt FROM glen_index_hotpro";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
module.exports=router;