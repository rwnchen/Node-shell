const fs = require('fs');

module.exports = function (filename) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
    process.stdout.write('\nprompt ');
  })
}
