const fs = require('fs');
const fileController = require('./fileController');
var fileName = 'test.txt';
fileController.saveFile(fileName, 'Test module');
fileController.readFile(fileName,(data)=>{
    console.log(`Call back ${data}`);
});