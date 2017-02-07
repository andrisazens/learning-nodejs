var fs = require('fs');

function base64Decode(inFileName, outFileName) {
    var fileContent = fs.readFileSync(inFileName, 'utf-8');
    var buffer = new Buffer(fileContent, 'base64');
    fs.writeFileSync(outFileName, buffer);
}

base64Decode("test.txt", "test.zip");