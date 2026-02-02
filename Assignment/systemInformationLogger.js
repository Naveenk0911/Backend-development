const os=require('os');
const fs=require('fs');
let count=0;
const setinterval =setInterval(()=>{
    count++;
    let platform=os.platform();
    fs.appendFile('output.txt',`Platform =${platform} \n `,'Utf8',(err)=>{
        if(err){
            console.log(err);
        }
    });
    let cpu=os.cpus().length;
    fs.appendFile('output.txt',`cpu = ${cpu}\n`,'Utf8',(err)=>{
        if(err){
            console.log(err);
        }
    });
    let memory=os.totalmem();
    fs.appendFile('output.txt',`memory = ${memory} \n`,'Utf8',(err)=>{
        if(err){
            console.log(err);
        }
    });
    console.log(`memory = ${memory} \n Platform =${platform} \n cpu =${cpu} `);
},5000);

setTimeout(()=>{
    clearInterval(setinterval);

},15000);