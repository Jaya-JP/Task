const fs = require('fs');
// read file
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// update the file
const update = data.toUpperCase()
console.log("modified")


fs.writeFile('new.txt', "utd8" , function (err) {
     if (err) throw err;
     console.log('file modified');
   });
   
