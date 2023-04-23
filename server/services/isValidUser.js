const fs = require('fs');

function isValidUser(username,password) {
    return new Promise((resolve, reject) => {

        fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
                reject(err);
            } else {
                obj = JSON.parse(data); //now it an object

                for (let i in obj.table) {
                    if(obj.table[i].name === username && obj.table[i].password === password) {
                        resolve(true);
                    }
                } //add some data

                reject(new Error("Invalid username or password"));
            }
        });
    });
}

module.exports = {isValidUser};