process.stdout.write('prompt >');

process.stdin.on('data', (data) => {

  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
  const exportsFromPwd = require('./pwd');
  exportsFromPwd();
  }
  else {
    process.stdout.write(`You typed ${cmd}`);
    process.stdout.write('\nprompt ');
  }
});

