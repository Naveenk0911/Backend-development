
const fs=require("fs");
fs.readdir("./",(error,files)=>{
    if(error)
    {
        console.log("error in read directort",error);
    }
    else{
        files.forEach(file => {
            fs.stat(`${file}`,(error,stats)=>{
                if(error){
                    console.log("error in stats of fiile");
                }else{
                    console.log(stats.size,'bytes');
                }
            })
            console.log(file);
        });
    }
})