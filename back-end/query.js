var pool=require("./pool");
module.exports=function(sql,params){
  return new Promise(function(open,err){
    pool.query(sql,params,(error,result)=>{
      if(error)throw error;
      else open(result);
    })
  })
}