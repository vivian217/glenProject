ajax("http://localhost:63342/myproject/footer.html")
  .then(res=>{
    document.getElementById("footer")
      .innerHTML=res;
  });
