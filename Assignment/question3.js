const fs=require('fs');
const timstamped=Date.now();
fs.copyFile("text.txt",`copyFile_${timstamped}`,(error)=>{
    if(error)
    {
        console.log("Error in copy file");
    }
    else{
        console.log("file copy seccesful");
    }

});