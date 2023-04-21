const fs = require('fs');

function addCookie(cookie,name) {

    return new Promise((resolve, reject) => {
        fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
                reject(err);
            } else {
                obj = JSON.parse(data); //now it an object

                for (let i in obj.table) {

                    if(obj.table[i].name === name) {
                        obj.table[i].cookie = cookie; 
                        break;
                    }
                } //add some data

                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('users.json', json, 'utf8', (err) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log("finished writing cookie")
                        resolve();
                    }
                }); // write it back 
            }
        });
    });
}

module.exports = {addCookie};