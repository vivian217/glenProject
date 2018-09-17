const express=require("express");
var router=express.Router();
var query=require("../query");
router.get("/",(req,res)=>{
  var kw=req.query.kw;
  var output={
    fid:req.query.fid || "",
    count:0,//�ܹ���������
    pno:req.query.pno || 1,//��ǰҳ������Ĭ��Ϊ��һҳ
    pSize:10,//ÿҳ��ʾ����
    pageCount:0,//�ܹ�ҳ��
    data:[]//ÿҳ������
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