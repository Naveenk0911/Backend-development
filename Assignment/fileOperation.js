const fs=require('fs');
fs.readFile('file.txt','utf8',(error,data)=>{
        if(error){
            console.log("error in file read",error);
            return
        }
       console.log(data);

       const words=data.trim().split(/\s+/);
       const count=data.trim()==''?0:words.length;
       console.log(count);

       fs.writeFile('file2.txt',`no. of worde =${count}`,(err)=>{
        if(err){
            console.log("error in write file2");
        }
       });
});
