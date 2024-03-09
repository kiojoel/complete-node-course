const fs = require('fs');
const crypto = require('crypto');

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate finished'));

const start = Date.now();

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('------------------------------------------');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate finished'));

  crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512');
  console.log(Date.now() - start, 'password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512');
  console.log(Date.now() - start, 'password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512');
  console.log(Date.now() - start, 'password encrypted');
});

console.log('The top-level code');
