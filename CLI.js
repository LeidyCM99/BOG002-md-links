const chalk = require('chalk');
<<<<<<< HEAD
const process = require('process')
=======
const process= require('process')
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
const yargs = require('yargs')
const md = require('./mdlinks');
const index = require('./index.js');

<<<<<<< HEAD
const myArgs = process.argv.slice(2);
=======
const myArgs =process.argv.slice(2);
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
const PathMD = myArgs[0]
console.log(PathMD)

const argv = yargs
<<<<<<< HEAD
	.option('validate', {
		alias: 'v',
		description: 'Validate the links',
		type: 'boolean'
	})
	.option('stats', {
		alias: 's',
		description: 'Shows the statistics',
		type: 'boolean'
	})

	.help()
	.alias('help', 'h')
	.argv

if (!PathMD) {
	console.log(chalk.bold.bgRed("Enter the path of your file"));
}
//validar links
if (argv.validate && !argv.stats) {
	md.MdLinks(PathMD, { validate: true })
		.then((obj) => {
			index.statusLinks(obj)
				.then((result) => {
					console.log(chalk.bold.yellowBright("************************ Validate the links ***************************"));
					console.log(result)
				})
		})
}
//Estadisticas de los links
if (argv.stats && !argv.validate) {
	md.MdLinks(PathMD, { validate: true })
		.then((obj) => {
			console.log(chalk.bold.yellowBright("****** Stats the links *******"));
			console.table(index.stats(obj))
		})
}
//Validar y estadistica
if (argv.stats && argv.validate) {
	md.MdLinks(PathMD, { validate: true })
		.then((obj) => {
			console.log(chalk.bold.yellowBright("******* Stats and validate *******"))
			console.table(index.stats(obj))
			console.table(index.broken(obj))
		})
}

if (!argv.stats && !argv.validate) {
	md.MdLinks(PathMD, { validate: false })
		.then((obj) => {
			console.log(chalk.bold.yellowBright("************************ Links ***************************"))
			console.log(obj)
		})
}
=======
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
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
