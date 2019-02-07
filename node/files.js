const fs = require('fs');
const path = require('path'); //you can import functions with the require
const os = require('os');


fs.readFile(path.join(__dirname, 'hello.txt'), { encoding: 'utf8' }, (err, txt) => { //this is how you asynchronously read a file!
  // this triggers when the read is complete
  if (err) return console.log(err);
  console.log(txt);
});
// This triggers directly after asking to read the file
console.log('Just asked for file');
console.log(os.cpus());