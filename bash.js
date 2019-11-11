process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(" ");
  const cmd = input[0];
  let arg;

  if (input.length > 1) {
    arg = input[1];
  }

  if (cmd === 'pwd') {
    const exportsFromPwd = require('./pwd');
    exportsFromPwd();
  } else if (cmd === 'ls') {
    require('./ls');
  } else if (cmd === 'cat') {
    const cat = require('./cat');
    cat(arg);
  } else {
    process.stdout.write(`You typed ${cmd}`);
    process.stdout.write('\nprompt ');
  }
});
