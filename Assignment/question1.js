const fs=require("fs");
const obj={};
fs.readFile("./text.json","utf8",(error,data)=>{
    if(error)
    {
        console.log("error inn read file",error);
    }
    else{
        const stringData=JSON.parse(data);
        obj.stringData=stringData;
        console.log(data);
        console.log(stringData);
        console.log(obj);

    }
});