const chalk = require('chalk');

console.log(chalk.bold.magenta('Hello world!'));
console.log (process.argv)
const myArgs =process.argv.slice(2);
console.log('myArgs: ', myArgs);

