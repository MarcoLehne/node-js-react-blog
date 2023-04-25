const fs = require('fs');

function addUser(userObj) {
    return new Promise((resolve, reject) => {
        fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
                reject(err);
            } else {
                obj = JSON.parse(data); //now it an object

                for (let u of obj.table) {
                    if (u.name === userObj.name) {
                        reject(new Error("User already exists"));
                    }
                }

                obj.table.push({
                    id : obj.table.length + 1, 
                    name: userObj.name,
                    password: userObj.password,
                    posts: []
                });
                } //add some data

                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('users.json', json, 'utf8', (err) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(`finished writing ${userObj.name}`)
                        resolve();
                    }
                }); // write it back 
            })
        });
};


module.exports = {addUser};