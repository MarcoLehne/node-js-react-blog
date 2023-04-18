const fs = require('fs');

function addPost(post) {
    return new Promise((resolve, reject) => {
        fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
                reject(err);
            } else {
                obj = JSON.parse(data); //now it an object

                for (let i in obj.table) {
                    if(obj.table[i].name === post.userName) {
                        obj.table[i].posts = [{date:post.date, content: post.content}, ...obj.table[i].posts] 
                        break;
                    }
                } //add some data

                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('users.json', json, 'utf8', (err) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log("finished writing")
                        resolve();
                    }
                }); // write it back 
            }
        });
    });
}

module.exports = {addPost};