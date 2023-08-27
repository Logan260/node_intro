const fs = require('fs');
const process = require('process')

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





// const fs = require('fs');

// fs.readFile('one.txt', 'utf8', (err, data)=> {
//     if(err){
//         console.log("Erroor:", err);
//         process.kill(1)
//     }
//     console.log("Data:", data)
// })