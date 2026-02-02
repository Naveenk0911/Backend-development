fs.stat(file,(error,stats)=>{
                if(error){
                    console.log("error in stats of fiile");
                }else{
                    console.log(stats.size,'bytes');
                }
            })