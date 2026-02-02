const fs=require("fs");
const timeStamps=new Date(Date.now());

fs.appendFile("text.txt",
    `date = ${timeStamps}`,(err)=>{
        if(err){
            console.log("error in append file");
        }
    })