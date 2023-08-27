const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err){
            console.error(`Error: ${path}: ${err}`);
            process.exit[1]
        }else{
            console.log(data);
        }
    });
}

async function webCat(url){
    try{
        let res = await axios.get(url);
        console.log(res.data);
    }catch(err){
        console.error(`Error getting ${url}: ${err}`);
        process.exit(1)
    }
}
let path = process.argv[2]
if(path.slice(0, 4) === 'http'){
    webCat(path);
}else{
    cat(path);
}

function handleOutput(text, out){
    if(out){
        fs.writeFile(out, text, 'utf8', funtion(err){
            if(err){
                console.error(`Can't write ${out}: ${err}`);
                process.exit(1)
            }
        });
    }else{
        console.log(text);
    }
}

function cat