const fs = require('fs');

function saveFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}
function readFile(fileName,callBack){
    fs.readFile(fileName, {encoding: 'utf-8'},(erro,data)=>{
        callBack(data);
    });
}

module.exports = {
    saveFile,
    readFile
};