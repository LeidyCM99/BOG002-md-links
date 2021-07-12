const chalk = require('chalk');
const process= require('process')
const yargs = require('yargs')
const md = require('./mdlinks');
const index = require('./index.js');

const myArgs =process.argv.slice(2);
const PathMD = myArgs[0]
console.log(PathMD)

const argv = yargs
    .option('validate', {
        alias: 'v',
        description: 'Validate the links',
        type: 'boolean'
    })
    .option('stats', {
        alias: 'st',
        description: 'Shows the statistics',
        type: 'boolean'
    })
    
    .help()
    .alias('help', 'h')
    .argv

//validar links
if (argv.validate && !argv.stats){
	md.MdLinks(PathMD, {validate:true})
	.then((obj) => {
		index.statusLinks(obj)
		.then((result) => {
			console.log(chalk.bold.yellowBright("*************************"))
			console.log("Validate the links") 
			console.log(chalk.yellowBright("*************************"))
			console.log(result) 
		})
	})
}
//Estadisticas de los links
if (argv.stats && !argv.validate) {
	md.MdLinks(PathMD, {validate:true})
	.then((obj) => {
		console.log("stats", index.stats(obj))
	})
}
//Validar y estadistica
if (argv.stats && argv.validate) {
	md.MdLinks(PathMD, {validate:true})
	.then((obj) => {
		 console.log("estadistica con broken", index.stats(obj),index.broken(obj))
	})
}

if (!argv.stats && !argv.validate) {
	md.MdLinks(PathMD, {validate:false})
	.then((obj) => {
		
		console.log("unicamente los links", obj)
	})
}
// console.log(chalk.bold.magenta('Hello world!'));
// console.log (process.argv)
// const myArgs =process.argv.slice(2);
// console.log('myArgs: ', myArgs);