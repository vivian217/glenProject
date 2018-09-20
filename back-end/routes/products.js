const express=require("express");
var router=express.Router();
var query=require("../query");
router.get("/",(req,res)=>{
  var kw=req.query.kw;
  var output={
    fid:req.query.fid || "",
    count:0,//数据总条数
    pno:req.query.pno || 1,//当前页码
    pSize:10,//每页数据数
    pageCount:0,//总共页数
    data:[]//具体数据
  };
  var sql="SELECT pid,fid,title,subtitle,(SELECT pic FROM glen_products_pic WHERE glen_products_pic.pid = glen_products.pid LIMIT 1) as pic FROM glen_products";
  query(sql,[]).then(result=>{
    if(output.fid){
      sql +=" WHERE fid=? ";
      return query(sql,[output.fid]);
    }
    if(kw){
      var kws=kw.split(" ");
      kws.forEach((elem,i,arr)=>{
        arr[i]=`title like '%${elem}%'`;
      });
      var where=kws.join(" and ");
      sql += ` WHERE ${where} `;
      console.log(sql);
      return query(sql,[]);
    }
    return query(sql,[]);
  }).then(result=>{
    output.count=result.length;
    output.pageCount=Math.ceil(output.count/output.pSize);
    var offset=parseInt((output.pno-1)*output.pSize);//偏移量，每次limit开始的值
    output.pSize=parseInt(output.pSize);
    sql+=" LIMIT ?,?";
    if(output.fid){
      return query(sql,[output.fid,offset,output.pSize]);
    }
    return query(sql,[offset,output.pSize]);
  }).then(data=>{
    output.data=data;
    //console.log(output.pageCount,output.pno,output.count);
    res.send(output);
  });
});
module.exports=router;