const chalk = require('chalk');

// console.log(chalk.bold.magenta('Hello world!'));
// console.log (process.argv)
// const myArgs =process.argv.slice(2);
// console.log('myArgs: ', myArgs);
const yargs = require('yargs')
const argv = yargs
    .option('validate', {
        alias: 'va',
        description: 'Validate the links ',
        type: 'boolean'
    })
    .option('stats', {
        alias: 'st',
        description: 'Shows the statistics of the links',
        type: 'boolean'
    })
    
    .help()
    .alias('help', 'h')
    .argv
	console.log(argv)

if (argv.validate){
	console.log("Holaaa")
}
if (argv.stats) {
	console.log("soy stats")
}